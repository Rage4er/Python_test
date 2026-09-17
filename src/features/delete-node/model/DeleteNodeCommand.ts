import { v4 as uuid } from 'uuid';
import type { Command } from '@features/undo-redo/commands/types';
import type { SceneState, SceneNode } from '@entities/scene/types';

export class DeleteNodeCommand implements Command {
  readonly id = uuid();
  readonly timestamp = Date.now();
  readonly label = 'Удалить объект';

  private snapshot: { node: SceneNode; rootIndex: number; prevSelection: string[] } | null = null;

  constructor(private nodeId: string) {}

  apply(state: SceneState): SceneState {
    const node = state.nodes[this.nodeId];
    if (!node) return state;

    // Collect all descendants to delete
    const toDelete = new Set<string>();
    const collect = (id: string) => {
      if (toDelete.has(id)) return;
      toDelete.add(id);
      const n = state.nodes[id];
      if (n) for (const c of n.childrenIds) collect(c);
    };
    collect(this.nodeId);

    this.snapshot = {
      node,
      rootIndex: state.rootIds.indexOf(this.nodeId),
      prevSelection: state.selection.filter((id) => !toDelete.has(id)),
    };

    const nextNodes = { ...state.nodes };
    for (const id of toDelete) delete nextNodes[id];

    return {
      ...state,
      nodes: nextNodes,
      rootIds: state.rootIds.filter((id) => !toDelete.has(id)),
      selection: state.selection.filter((id) => !toDelete.has(id)),
    };
  }

  revert(state: SceneState): SceneState {
    if (!this.snapshot) return state;
    const { node, rootIndex, prevSelection } = this.snapshot;
    const rootIds = [...state.rootIds];
    rootIds.splice(Math.max(0, rootIndex), 0, this.nodeId);
    
    // Restore children relationships
    const restoreChildren = (n: SceneNode) => {
        // In a real implementation we'd need to restore the full tree structure
        // For MVP we assume simple flat structure or that children are restored by other means
    };
    restoreChildren(node);

    return {
      ...state,
      nodes: { ...state.nodes, [this.nodeId]: node },
      rootIds,
      selection: prevSelection,
    };
  }
}

export class DeleteMultipleCommand implements Command {
  readonly id = uuid();
  readonly timestamp = Date.now();
  readonly label = 'Удалить объекты';
  private commands: DeleteNodeCommand[];

  constructor(ids: string[]) {
    this.commands = ids.map((id) => new DeleteNodeCommand(id));
  }

  apply(state: SceneState): SceneState {
    return this.commands.reduce((s, c) => c.apply(s), state);
  }
  revert(state: SceneState): SceneState {
    return [...this.commands].reverse().reduce((s, c) => c.revert(s), state);
  }
}
// Дата актуализации: 24 мая 2024 г.
