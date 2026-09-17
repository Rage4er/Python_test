import { v4 as uuid } from 'uuid';
import type { Command } from '@features/undo-redo/commands/types';
import type { SceneState, SceneNode, PrimitiveType, Transform } from '@entities/scene/types';

interface CreateNodePayload {
  type: PrimitiveType;
  position?: [number, number, number];
  name?: string;
}

function defaultParams(type: PrimitiveType): Record<string, number> {
  switch (type) {
    case 'box':      return { width: 20, height: 20, depth: 20 };
    case 'sphere':   return { radius: 10, widthSegments: 32, heightSegments: 16 };
    case 'cylinder': return { radiusTop: 10, radiusBottom: 10, height: 20, radialSegments: 32 };
    case 'cone':     return { radius: 10, height: 20, radialSegments: 32 };
    case 'torus':    return { radius: 10, tube: 3, radialSegments: 16, tubularSegments: 48 };
  }
}

export class CreateNodeCommand implements Command {
  readonly id = uuid();
  readonly timestamp = Date.now();
  readonly label: string;

  private nodeId: string;
  private node: SceneNode;

  constructor(payload: CreateNodePayload) {
    this.nodeId = uuid();
    const now = Date.now();

    const transform: Transform = {
      position: payload.position ?? [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    };

    this.node = {
      id: this.nodeId,
      type: payload.type,
      name: payload.name ?? payload.type,
      transform,
      geometry: { kind: payload.type, params: defaultParams(payload.type) },
      material: { color: '#4a90e2', opacity: 1, isHole: false },
      booleanOp: null,
      parentId: null,
      childrenIds: [],
      visible: true,
      locked: false,
      createdAt: now,
      updatedAt: now,
    };

    this.label = `Создать ${payload.type}`;
  }

  apply(state: SceneState): SceneState {
    return {
      ...state,
      nodes: { ...state.nodes, [this.nodeId]: this.node },
      rootIds: [...state.rootIds, this.nodeId],
      selection: [this.nodeId],
    };
  }

  revert(state: SceneState): SceneState {
    const { [this.nodeId]: _, ...rest } = state.nodes;
    return {
      ...state,
      nodes: rest,
      rootIds: state.rootIds.filter((id) => id !== this.nodeId),
      selection: state.selection.filter((id) => id !== this.nodeId),
    };
  }
}
// Дата актуализации: 24 мая 2024 г.
