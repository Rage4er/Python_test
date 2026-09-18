import * as THREE from 'three';
import type { EngineAdapter } from '@shared/engine/EngineAdapter';

interface EngineAdapterRef {
  getObject(id: string): THREE.Object3D | undefined;
  getAllObjects(): THREE.Object3D[];
  getRootObjects(ids: string[]): THREE.Object3D[];
  getMesh(id: string): THREE.Mesh | undefined;
}

let _adapter: EngineAdapterRef | null = null;

export function setGlobalAdapter(adapter: EngineAdapterRef | null): void {
  _adapter = adapter;
}

export function getEngineAdapter(): EngineAdapterRef | null {
  return _adapter;
}
