import { v4 as uuid } from 'uuid';
import type { Command } from '@features/undo-redo/commands/types';
import type { SceneState, SceneNode } from '@entities/scene/types';

type EditableField =
  | { key: 'name'; value: string }
  | { key: 'material'; value: Partial<SceneNode['material']> }
  | { key: 'transform'; value: Partial<SceneNode['transform']> }
  | { key: 'visible'; value: boolean }
  | { key: 'geometryParams'; value: Record<string, number> };

export class SetNodePropertyCommand implements Command {
  readonly id = uuid();
  readonly timestamp = Date.now();
  readonly label: string;
  private before: Partial<SceneNode> = {};

  constructor(private nodeId: string, private patch: EditableField) {
    this.label = `Изменить ${patch.key}`;
  }

  apply(state: SceneState): SceneState {
    const node = state.nodes[this.nodeId];
    if (!node) return state;
    this.before = { ...node };

    const next = this.mergePatch(node, this.patch);
    return {
      ...state,
      nodes: { ...state.nodes, [this.nodeId]: { ...next, updatedAt: Date.now() } },
    };
  }

  revert(state: SceneState): SceneState {
    return {
      ...state,
      nodes: { ...state.nodes, [this.nodeId]: this.before as SceneNode },
    };
  }

  private mergePatch(node: SceneNode, patch: EditableField): SceneNode {
    switch (patch.key) {
      case 'name': return { ...node, name: patch.value };
      case 'visible': return { ...node, visible: patch.value };
      case 'material':
        return { ...node, material: { ...node.material, ...patch.value } };
      case 'transform':
        return { ...node, transform: { ...node.transform, ...patch.value } };
      case 'geometryParams':
        return {
          ...node,
          geometry: { ...node.geometry, params: { ...node.geometry.params, ...patch.value } },
        };
    }
  }
}
// Дата актуализации: 24 мая 2024 г.
