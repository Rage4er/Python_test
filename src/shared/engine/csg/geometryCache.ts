import * as THREE from 'three';

const customGeometryCache = new Map<string, THREE.BufferGeometry>();

export function registerCustomGeometry(assetId: string, geometry: THREE.BufferGeometry): void {
  customGeometryCache.set(assetId, geometry);
}

export function getCustomGeometry(assetId: string): THREE.BufferGeometry | undefined {
  return customGeometryCache.get(assetId);
}

export function disposeCustomGeometry(assetId: string): void {
  const geom = customGeometryCache.get(assetId);
  if (geom) {
    geom.dispose();
    customGeometryCache.delete(assetId);
  }
}

export function clearCustomGeometryCache(): void {
  for (const geom of customGeometryCache.values()) {
    geom.dispose();
  }
  customGeometryCache.clear();
}
