import { v4 as uuid } from 'uuid';
import type { Command } from '@features/undo-redo/commands/types';
import type { SceneState, SceneNode } from '@entities/scene/types';

export class UngroupCommand implements Command {
  readonly id = uuid();
  readonly timestamp = Date.now();
  readonly label = 'Разгруппировать';

  private groupId: string;
  private previousGroup: SceneNode | null = null;
  private previousChildren: SceneNode[] = [];
  private previousRootIds: string[] = [];
  private previousSelection: string[] = [];

  constructor(groupId: string) {
    this.groupId = groupId;
  }

  apply(state: SceneState): SceneState {
    const group = state.nodes[this.groupId];
    if (!group || group.type !== 'group') return state;

    this.previousGroup = group;
    this.previousChildren = group.childrenIds
      .map((id) => state.nodes[id])
      .filter(Boolean);
    this.previousRootIds = [...state.rootIds];
    this.previousSelection = [...state.selection];

    const next = { ...state.nodes };
    delete next[this.groupId];
    for (const id of group.childrenIds) {
      const n = next[id];
      if (n) next[id] = { ...n, parentId: null };
    }

    return {
      ...state,
      nodes: next,
      rootIds: [
        ...state.rootIds.filter((id) => id !== this.groupId),
        ...group.childrenIds,
      ],
      selection: group.childrenIds,
    };
  }

  revert(state: SceneState): SceneState {
    if (!this.previousGroup) return state;
    const next = { ...state.nodes, [this.groupId]: this.previousGroup };
    for (const c of this.previousChildren) {
      next[c.id] = { ...c, parentId: this.groupId };
    }
    return {
      ...state,
      nodes: next,
      rootIds: this.previousRootIds,
      selection: this.previousSelection,
    };
  }
}
// Дата актуализации: 24 мая 2024 г.
