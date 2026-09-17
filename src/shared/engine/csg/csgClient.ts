import type { SerializedGeometry } from './serialize';

type CsgOp = 'union' | 'subtract' | 'intersect';

interface Pending {
  resolve: (g: SerializedGeometry) => void;
  reject: (e: Error) => void;
  timer: number;
}

const DEFAULT_TIMEOUT_MS = 30_000;

class CsgClient {
  private worker: Worker | null = null;
  private pending = new Map<string, Pending>();
  private counter = 0;
  private queue: Promise<unknown> = Promise.resolve();

  private ensureWorker(): Worker {
    if (this.worker) return this.worker;
    const worker = new Worker(
      new URL('@shared/workers/csg.worker.ts', import.meta.url),
      { type: 'module' }
    );
    worker.onmessage = (e) => this.handleMessage(e);
    worker.onerror = (e) => this.handleFatalError(e.message);
    this.worker = worker;
    return worker;
  }

  private handleMessage(e: MessageEvent) {
    const { id, ok } = e.data;
    const p = this.pending.get(id);
    if (!p) return;
    this.pending.delete(id);
    window.clearTimeout(p.timer);
    if (ok) p.resolve(e.data.geometry);
    else p.reject(new Error(e.data.error));
  }

  private handleFatalError(message: string) {
    for (const [id, p] of this.pending) {
      window.clearTimeout(p.timer);
      p.reject(new Error(`Worker error: ${message}`));
      this.pending.delete(id);
    }
    this.worker?.terminate();
    this.worker = null;
  }

  async evaluate(
    op: CsgOp,
    brushes: SerializedGeometry[],
    signal?: AbortSignal
  ): Promise<SerializedGeometry> {
    const task = this.queue.then(() => this.doEvaluate(op, brushes, signal));
    this.queue = task.catch(() => undefined);
    return task;
  }

  private doEvaluate(
    op: CsgOp,
    brushes: SerializedGeometry[],
    signal?: AbortSignal
  ): Promise<SerializedGeometry> {
    if (signal?.aborted) {
      return Promise.reject(new DOMException('Aborted', 'AbortError'));
    }

    const id = `csg-${++this.counter}`;
    const worker = this.ensureWorker();

    return new Promise((resolve, reject) => {
      const timer = window.setTimeout(() => {
        this.handleFatalError(`Task ${id} timed out`);
      }, DEFAULT_TIMEOUT_MS);

      const onAbort = () => {
        const p = this.pending.get(id);
        if (!p) return;
        this.pending.delete(id);
        window.clearTimeout(p.timer);
        reject(new DOMException('Aborted', 'AbortError'));
      };
      signal?.addEventListener('abort', onAbort, { once: true });

      this.pending.set(id, {
        resolve: (g) => {
          signal?.removeEventListener('abort', onAbort);
          resolve(g);
        },
        reject: (e) => {
          signal?.removeEventListener('abort', onAbort);
          reject(e);
        },
        timer,
      });

      const cloned = brushes.map((b) => ({
        ...b,
        positions: new Float32Array(b.positions),
        normals: new Float32Array(b.normals),
        index: b.index ? new Uint32Array(b.index) : null,
      }));

      const transferables: Transferable[] = [];
      for (const c of cloned) {
        transferables.push(c.positions.buffer as ArrayBuffer);
        transferables.push(c.normals.buffer as ArrayBuffer);
        if (c.index) transferables.push(c.index.buffer as ArrayBuffer);
      }

      worker.postMessage({ id, op, brushes: cloned }, transferables);
    });
  }

  dispose() {
    this.worker?.terminate();
    this.worker = null;
    for (const p of this.pending.values()) {
      window.clearTimeout(p.timer);
      p.reject(new Error('CsgClient disposed'));
    }
    this.pending.clear();
  }
}

export const csgClient = new CsgClient();
