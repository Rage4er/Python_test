// Расширение типов three.js: three-mesh-bvh навешивает свойства на BufferGeometry
import 'three-mesh-bvh';

declare module 'three' {
  interface BufferGeometry {
    boundsTree?: import('three-mesh-bvh').MeshBVH;
    disposeBoundsTree?: () => void;
    computeBoundsTree?: (options?: any) => void;
  }
}
