import * as THREE from 'three';
import type { SceneNode, GeometrySpec } from '@entities/scene/types';
import { getCustomGeometry } from './csg/geometryCache';

const MAX_GEOMETRY_CACHE = 200;
const geometryCache = new Map<string, THREE.BufferGeometry>();

function hashGeometry(spec: GeometrySpec): string {
  if (spec.kind === 'custom') {
    return `custom:${spec.assetId || ''}`;
  }
  return `${spec.kind}:${JSON.stringify(spec.params)}`;
}

function setCache(key: string, geom: THREE.BufferGeometry): void {
  if (geometryCache.size >= MAX_GEOMETRY_CACHE) {
    const firstKey = geometryCache.keys().next().value;
    if (firstKey) {
      const oldGeom = geometryCache.get(firstKey);
      oldGeom?.dispose();
      geometryCache.delete(firstKey);
    }
  }
  geometryCache.set(key, geom);
}

export function buildGeometry(spec: GeometrySpec): THREE.BufferGeometry {
  if (spec.kind === 'custom' && spec.assetId) {
    const cached = getCustomGeometry(spec.assetId);
    if (!cached) throw new Error(`Custom geometry not found: ${spec.assetId}`);
    return cached;
  }

  const key = hashGeometry(spec);
  const cached = geometryCache.get(key);
  if (cached) return cached;

  const p = spec.params as Record<string, number>;
  let geometry: THREE.BufferGeometry;

  switch (spec.kind) {
    case 'box':
      geometry = new THREE.BoxGeometry(p.width ?? 10, p.height ?? 10, p.depth ?? 10);
      break;
    case 'sphere':
      geometry = new THREE.SphereGeometry(p.radius ?? 5, 32, 16);
      break;
    case 'cylinder':
      geometry = new THREE.CylinderGeometry(p.radiusTop ?? 5, p.radiusBottom ?? 5, p.height ?? 10, 32);
      break;
    case 'cone':
      geometry = new THREE.ConeGeometry(p.radius ?? 5, p.height ?? 10, 32);
      break;
    case 'torus':
      geometry = new THREE.TorusGeometry(p.radius ?? 5, p.tube ?? 1.5, 16, 48);
      break;
    default:
      geometry = new THREE.BoxGeometry(10, 10, 10);
  }

  setCache(key, geometry);
  return geometry;
}

export function buildMaterial(node: SceneNode): THREE.MeshStandardMaterial {
  const { color, opacity, isHole } = node.material;
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    transparent: isHole || opacity < 1,
    opacity: isHole ? 0.35 : opacity,
    depthWrite: !isHole,
    side: THREE.DoubleSide,
    metalness: 0.1,
    roughness: 0.65,
  });
}

export function buildObject(node: SceneNode): THREE.Object3D {
  if (node.type === 'group' || node.geometry.kind === 'group') {
    const group = new THREE.Group();
    group.name = node.name;
    group.userData.id = node.id;
    applyTransform(group, node);
    group.visible = node.visible;
    return group;
  }

  const geometry = buildGeometry(node.geometry);
  const material = buildMaterial(node);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.userData.id = node.id;
  mesh.name = node.name;
  mesh.userData.geometryKey = `${node.geometry.kind}:${JSON.stringify(node.geometry.params)}:${(node.geometry as any).assetId ?? ''}`;
  applyTransform(mesh, node);
  mesh.visible = node.visible;
  return mesh;
}

export function applyTransform(obj: THREE.Object3D, node: SceneNode): void {
  const { position, rotation, scale } = node.transform;
  obj.position.set(position[0], position[1], position[2]);
  obj.rotation.set(rotation[0], rotation[1], rotation[2]);
  obj.scale.set(scale[0], scale[1], scale[2]);
}

export function extractTransform(obj: THREE.Object3D): {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
} {
  return {
    position: [obj.position.x, obj.position.y, obj.position.z],
    rotation: [obj.rotation.x, obj.rotation.y, obj.rotation.z],
    scale: [obj.scale.x, obj.scale.y, obj.scale.z],
  };
}

export function disposeMesh(mesh: THREE.Mesh): void {
  const mat = mesh.material;
  if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
  else mat.dispose();
  // Geometry stays in cache
}
