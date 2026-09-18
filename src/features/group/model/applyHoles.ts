import * as THREE from 'three';

/**
 * Применяет hole-объекты к solid-объектам, вычитая их геометрии.
 * TODO: реализовать полноценную CSG логику для holes в V2
 * 
 * @param solidIds - ID объектов, которые являются "телом"
 * @param holeIds - ID объектов, которые нужно вычесть
 * @returns Map с модифицированными геометрями (или пустую Map, если не реализовано)
 */
export async function applyHolesToSolids(
  solidIds: string[],
  holeIds: string[]
): Promise<Map<string, THREE.BufferGeometry>> {
  // Заглушка: возвращаем пустую Map
  // В реальной реализации здесь будет CSG вычитание всех hole из каждого solid
  console.warn('applyHolesToSolids: функционал в разработке. Экспорт без вычитания holes.');
  return new Map();
}
