import { v4 as uuid } from 'uuid';
import type { Command } from '@features/undo-redo/commands/types';
import type { SceneState, Transform } from '@entities/scene/types';

interface Update {
  id: string;
  before: Transform;
  after: Transform;
}

export class TransformMultipleCommand implements Command {
  readonly id = uuid();
  readonly timestamp = Date.now();
  readonly label = 'Трансформация группы';

  constructor(private updates: Update[]) {}

  apply(state: SceneState): SceneState {
    return this.patch(state, 'after');
  }

  revert(state: SceneState): SceneState {
    return this.patch(state, 'before');
  }

  private patch(state: SceneState, key: 'before' | 'after'): SceneState {
    const next = { ...state.nodes };
    for (const u of this.updates) {
      const n = next[u.id];
      if (!n) continue;
      next[u.id] = { ...n, transform: u[key], updatedAt: Date.now() };
    }
    return { ...state, nodes: next };
  }
}
// Дата актуализации: 24 мая 2024 г.
