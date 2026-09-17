import { v4 as uuid } from 'uuid';
import type { Command } from '@features/undo-redo/commands/types';
import type { SceneState, SceneNode } from '@entities/scene/types';

export class GroupCommand implements Command {
  readonly id = uuid();
  readonly timestamp = Date.now();
  readonly label = 'Сгруппировать';

  private groupId = uuid();
  private groupNode: SceneNode;
  private previousNodes: SceneNode[] = [];
  private previousRootIds: string[] = [];
  private previousSelection: string[] = [];

  constructor(private nodeIds: string[]) {
    const now = Date.now();
    this.groupNode = {
      id: this.groupId,
      type: 'group',
      name: 'Группа',
      transform: {
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
      },
      geometry: { kind: 'group', params: {} },
      material: { color: '#888', opacity: 1, isHole: false },
      booleanOp: null,
      parentId: null,
      childrenIds: [...nodeIds],
      visible: true,
      locked: false,
      createdAt: now,
      updatedAt: now,
    };
  }

  apply(state: SceneState): SceneState {
    this.previousNodes = this.nodeIds.map((id) => state.nodes[id]).filter(Boolean);
    this.previousRootIds = [...state.rootIds];
    this.previousSelection = [...state.selection];

    const nextNodes = { ...state.nodes, [this.groupId]: this.groupNode };

    for (const id of this.nodeIds) {
      const n = nextNodes[id];
      if (!n) continue;
      nextNodes[id] = { ...n, parentId: this.groupId };
    }

    return {
      ...state,
      nodes: nextNodes,
      rootIds: [
        ...state.rootIds.filter((id) => !this.nodeIds.includes(id)),
        this.groupId,
      ],
      selection: [this.groupId],
    };
  }

  revert(state: SceneState): SceneState {
    const next = { ...state.nodes };
    delete next[this.groupId];
    for (const id of this.nodeIds) {
      const n = next[id];
      if (n) next[id] = { ...n, parentId: null };
    }
    return {
      ...state,
      nodes: next,
      rootIds: this.previousRootIds,
      selection: this.previousSelection,
    };
  }
}

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
