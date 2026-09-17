import { v4 as uuid } from 'uuid';
import * as THREE from 'three';
import type { Command } from '@features/undo-redo/commands/types';
import type { SceneState, SceneNode } from '@entities/scene/types';
import { getCustomGeometry, registerCustomGeometry } from '@shared/engine/csg/geometryCache';

export class BooleanOpCommand implements Command {
  readonly id = uuid();
  readonly timestamp = Date.now();
  readonly label: string;

  private resultNodeId: string;
  private resultNode: SceneNode;
  private previousNodes: SceneNode[] = [];
  private previousRootIds: string[] = [];
  private previousSelection: string[] = [];

  constructor(
    private sourceIds: string[],
    private op: 'union' | 'subtract' | 'intersect',
    private resultGeometry: THREE.BufferGeometry,
    label?: string
  ) {
    this.resultNodeId = uuid();
    this.label = label ?? `CSG ${op}`;

    // Вычисляем центр результата — для корректного pivot
    resultGeometry.computeBoundingBox();
    const box = resultGeometry.boundingBox!;
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Смещаем геометрию так, чтобы pivot был в центре
    resultGeometry.translate(-center.x, -center.y, -center.z);

    const now = Date.now();
    this.resultNode = {
      id: this.resultNodeId,
      type: 'mesh',
      name: `${op}-result`,
      transform: {
        position: [center.x, center.y, center.z],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
      },
      geometry: {
        kind: 'custom',
        params: {},
        assetId: uuid(),
      },
      material: { color: '#4a90e2', opacity: 1, isHole: false },
      booleanOp: null,
      parentId: null,
      childrenIds: [],
      visible: true,
      locked: false,
      createdAt: now,
      updatedAt: now,
    };

    // Регистрируем геометрию в глобальном кэше
    const assetId = this.resultNode.geometry.assetId!;
    registerCustomGeometry(assetId, resultGeometry);
  }

  apply(state: SceneState): SceneState {
    // Снапшот исходного состояния
    this.previousNodes = this.sourceIds
      .map((id) => state.nodes[id])
      .filter(Boolean);
    this.previousRootIds = [...state.rootIds];
    this.previousSelection = [...state.selection];

    const nextNodes = { ...state.nodes };
    for (const id of this.sourceIds) delete nextNodes[id];
    nextNodes[this.resultNodeId] = this.resultNode;

    return {
      ...state,
      nodes: nextNodes,
      rootIds: [
        ...state.rootIds.filter((id) => !this.sourceIds.includes(id)),
        this.resultNodeId,
      ],
      selection: [this.resultNodeId],
    };
  }

  revert(state: SceneState): SceneState {
    const nextNodes = { ...state.nodes };
    delete nextNodes[this.resultNodeId];
    for (const n of this.previousNodes) nextNodes[n.id] = n;

    return {
      ...state,
      nodes: nextNodes,
      rootIds: this.previousRootIds,
      selection: this.previousSelection,
    };
  }
}
// Дата актуализации: 24 мая 2024 г.
