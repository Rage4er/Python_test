import type { SceneNode, SceneState } from '@entities/scene/types';

export interface SyncDiff {
  added: string[];
  updated: string[];
  removed: string[];
}

export function diffScene(
  prev: { nodes: Record<string, SceneNode> } | null,
  next: SceneState
): SyncDiff {
  const added: string[] = [];
  const updated: string[] = [];
  const removed: string[] = [];

  if (!prev) {
    return {
      added: Object.keys(next.nodes),
      updated: [],
      removed: [],
    };
  }

  for (const id of Object.keys(next.nodes)) {
    const n = next.nodes[id];
    const p = prev.nodes[id];
    if (!p) added.push(id);
    else if (n.updatedAt !== p.updatedAt) updated.push(id);
  }

  for (const id of Object.keys(prev.nodes)) {
    if (!next.nodes[id]) removed.push(id);
  }

  return { added, updated, removed };
}
// Дата актуализации: 24 мая 2024 г.
