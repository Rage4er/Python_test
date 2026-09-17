export type PrimitiveType = 'box' | 'sphere' | 'cylinder' | 'cone' | 'torus';
export type NodeType = PrimitiveType | 'group' | 'mesh';
export type BooleanOp = 'union' | 'subtract' | 'intersect' | null;

export interface Transform {
  position: [number, number, number];
  rotation: [number, number, number]; // Euler XYZ, radians
  scale: [number, number, number];
}

export interface GeometrySpec {
  kind: PrimitiveType | 'group' | 'custom';
  params: Record<string, number>;
  assetId?: string;
}

export interface MaterialSpec {
  color: string;
  opacity: number;
  isHole: boolean;
}

export interface SceneNode {
  id: string;
  type: NodeType;
  name: string;
  transform: Transform;
  geometry: GeometrySpec;
  material: MaterialSpec;
  booleanOp: BooleanOp;
  parentId: string | null;
  childrenIds: string[];
  visible: boolean;
  locked: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface SceneState {
  nodes: Record<string, SceneNode>;
  rootIds: string[];
  selection: string[];
}
