import { v4 as uuid } from 'uuid';
import type { Command } from '@features/undo-redo/commands/types';
import type { SceneState, SceneNode } from '@entities/scene/types';

/**
 * Дублирует ноду ЦЕЛИКОМ: копирует geometry (включая custom/CSG), material,
 * booleanOp и transform, выдавая новый id и смещая позицию по X на +2.
 */
export class DuplicateNodeCommand implements Command {
  readonly id = uuid();
  readonly timestamp = Date.now();
  readonly label: string;

  private newNodeId: string;
  private node: SceneNode;

  constructor(source: SceneNode) {
    this.newNodeId = uuid();
    const now = Date.now();

    this.node = {
      ...source,
      id: this.newNodeId,
      name: `${source.name} (copy)`,
      parentId: null,
      childrenIds: [...source.childrenIds],
      transform: {
        ...source.transform,
        position: [
          source.transform.position[0] + 2,
          source.transform.position[1],
          source.transform.position[2],
        ],
      },
      createdAt: now,
      updatedAt: now,
    };

    this.label = `Дублировать ${source.name}`;
  }

  apply(state: SceneState): SceneState {
    return {
      ...state,
      nodes: { ...state.nodes, [this.newNodeId]: this.node },
      rootIds: [...state.rootIds, this.newNodeId],
      selection: [this.newNodeId],
    };
  }

  revert(state: SceneState): SceneState {
    const { [this.newNodeId]: _, ...rest } = state.nodes;
    return {
      ...state,
      nodes: rest,
      rootIds: state.rootIds.filter((id) => id !== this.newNodeId),
      selection: state.selection.filter((id) => id !== this.newNodeId),
    };
  }
}
// Дата актуализации: 29 сентября 2026 г.
