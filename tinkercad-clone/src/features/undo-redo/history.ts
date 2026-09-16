import type { Command } from './commands/types';

export interface HistoryState {
  past: Command[];
  future: Command[];
}

export const HISTORY_LIMIT = 100;

export class HistoryManager {
  private past: Command[] = [];
  private future: Command[] = [];

  execute(command: Command): void {
    this.past.push(command);
    if (this.past.length > HISTORY_LIMIT) this.past.shift();
    this.future = [];
  }

  undo(): Command | null {
    const cmd = this.past.pop();
    if (!cmd) return null;
    this.future.push(cmd);
    return cmd;
  }

  redo(): Command | null {
    const cmd = this.future.pop();
    if (!cmd) return null;
    this.past.push(cmd);
    return cmd;
  }

  canUndo(): boolean { return this.past.length > 0; }
  canRedo(): boolean { return this.future.length > 0; }
  clear(): void { this.past = []; this.future = []; }
}
