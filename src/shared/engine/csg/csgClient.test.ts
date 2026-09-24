/**
 * Тесты CsgClient: контракт postMessage/onmessage, AbortController,
 * timeout-фоллбэк, fatal worker error, dispose.
 * Worker мок — без реального web-worker в jsdom.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

class FakeWorker {
  static instances: FakeWorker[] = [];
  onmessage: ((e: MessageEvent) => void) | null = null;
  onerror: ((e: { message: string }) => void) | null = null;
  postMessage = vi.fn();
  terminate = vi.fn();
  constructor() {
    FakeWorker.instances.push(this);
  }
}

const boxBrush = () => ({
  positions: new Float32Array([0, 0, 0, 1, 0, 0, 1, 1, 0]),
  normals: new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]),
  index: new Uint32Array([0, 1, 2]),
  matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
});

const okResponse = (id: string) =>
  ({ data: { id, ok: true, geometry: boxBrush() } }) as MessageEvent;

let csgClient: typeof import('./csgClient').csgClient;

beforeEach(async () => {
  FakeWorker.instances = [];
  vi.stubGlobal('Worker', FakeWorker as unknown as typeof Worker);
  vi.useFakeTimers();
  vi.resetModules();
  csgClient = (await import('./csgClient')).csgClient;
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

// evaluate ставит задачу в очередь (this.queue.then(...)) — дождься микрозадач
async function flushMicrotasks() {
  for (let i = 0; i < 5; i++) await Promise.resolve();
}

describe('csgClient.evaluate — контракт запроса/ответа', () => {
  it('postMessage шлёт payload { id, op, brushes } с transferables', async () => {
    const p = csgClient.evaluate('union', [boxBrush(), boxBrush()]);
    await flushMicrotasks();
    const w = FakeWorker.instances[0];
    expect(w).toBeTruthy();
    expect(w.postMessage).toHaveBeenCalledTimes(1);
    const [payload, transfer] = w.postMessage.mock.calls[0];
    expect(payload.id).toBe('csg-1');
    expect(payload.op).toBe('union');
    expect(payload.brushes).toHaveLength(2);
    expect(payload.brushes[0].positions).toBeInstanceOf(Float32Array);
    // positions + normals + index на каждый brush = 6 buffer'ов
    expect(transfer).toHaveLength(6);
    w.onmessage!(okResponse('csg-1'));
    const result = await p;
    expect(result).toHaveProperty('matrix');
  });

  it('инкремент id между вызовами и последовательная очередь задач', async () => {
    const p1 = csgClient.evaluate('union', [boxBrush(), boxBrush()]);
    const p2 = csgClient.evaluate('subtract', [boxBrush(), boxBrush()]);
    await flushMicrotasks();
    const w = FakeWorker.instances[0];
    // очередь: вторая задача стартует только после резолва первой
    expect(w.postMessage.mock.calls.map((c) => c[0].id)).toEqual(['csg-1']);
    w.onmessage!(okResponse('csg-1'));
    await expect(p1).resolves.toBeTruthy();
    await flushMicrotasks();
    expect(w.postMessage.mock.calls.map((c) => c[0].id)).toEqual(['csg-1', 'csg-2']);
    w.onmessage!(okResponse('csg-2'));
    await expect(p2).resolves.toBeTruthy();
  });

  it('ok:false в ответе → reject с сообщением воркера', async () => {
    const p = csgClient.evaluate('intersect', [boxBrush(), boxBrush()]);
    await flushMicrotasks();
    const w = FakeWorker.instances[0];
    w.onmessage!({ data: { id: 'csg-1', ok: false, error: 'CSG produced no result' } } as MessageEvent);
    await expect(p).rejects.toThrow('CSG produced no result');
  });

  it('сообщение с неизвестным id игнорируется', async () => {
    const p = csgClient.evaluate('union', [boxBrush(), boxBrush()]);
    await flushMicrotasks();
    const w = FakeWorker.instances[0];
    w.onmessage!(okResponse('bogus-id'));
    w.onmessage!(okResponse('csg-1'));
    await expect(p).resolves.toBeTruthy();
  });
});

describe('csgClient — ошибки и отмена', () => {
  it('onerror воркера → все pending reject "Worker error", worker терминируется', async () => {
    const p = csgClient.evaluate('union', [boxBrush(), boxBrush()]);
    await flushMicrotasks();
    const w = FakeWorker.instances[0];
    w.onerror!({ message: 'boom' });
    await expect(p).rejects.toThrow('Worker error: boom');
    expect(w.terminate).toHaveBeenCalled();
  });

  it('timeout 30s не срабатывает после успешного ответа (таймер очищается)', async () => {
    const p = csgClient.evaluate('union', [boxBrush(), boxBrush()]);
    await flushMicrotasks();
    const w = FakeWorker.instances[0];
    w.onmessage!(okResponse('csg-1'));
    await expect(p).resolves.toBeTruthy();
    vi.advanceTimersByTime(60_000);
    expect(w.terminate).not.toHaveBeenCalled();
  });

  it('timeout: нет ответа 30s → reject "timed out"', async () => {
    const p = csgClient.evaluate('union', [boxBrush(), boxBrush()]);
    await flushMicrotasks();
    const assertion = expect(p).rejects.toThrow(/timed out/);
    vi.advanceTimersByTime(30_001);
    await assertion;
  });

  it('AbortController: abort до старта → AbortError, worker не поднимается', async () => {
    const ac = new AbortController();
    ac.abort();
    await expect(
      csgClient.evaluate('union', [boxBrush(), boxBrush()], ac.signal)
    ).rejects.toThrow('Aborted');
    expect(FakeWorker.instances).toHaveLength(0);
  });

  it('AbortController: abort во время работы → AbortError, поздний ответ безопасен', async () => {
    const ac = new AbortController();
    const p = csgClient.evaluate('union', [boxBrush(), boxBrush()], ac.signal);
    await flushMicrotasks();
    const w = FakeWorker.instances[0];
    ac.abort();
    await expect(p).rejects.toThrow('Aborted');
    w.onmessage!(okResponse('csg-1')); // не должен сломать ничего
    vi.advanceTimersByTime(60_000);   // таймер тоже должен быть снят
    expect(w.terminate).not.toHaveBeenCalled();
  });

  it('dispose() → pending reject "disposed", повторный evaluate поднимает новый worker', async () => {
    const p = csgClient.evaluate('union', [boxBrush(), boxBrush()]);
    await flushMicrotasks();
    csgClient.dispose();
    await expect(p).rejects.toThrow('CsgClient disposed');
    // следующий evaluate создаёт новый worker (counter не сбрасывается → id csg-2)
    const p2 = csgClient.evaluate('union', [boxBrush(), boxBrush()]);
    await vi.waitFor(() => expect(FakeWorker.instances).toHaveLength(2));
    await flushMicrotasks();
    expect(FakeWorker.instances[1].postMessage).toHaveBeenCalled();
    const sentId = (FakeWorker.instances[1].postMessage.mock.calls[0][0] as { id: string }).id;
    FakeWorker.instances[1].onmessage!(okResponse(sentId));
    await expect(p2).resolves.toBeTruthy();
  });
});
