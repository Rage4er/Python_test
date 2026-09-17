import type { SceneState } from '@entities/scene/types';

export interface Command {
  id: string;
  timestamp: number;
  label: string;
  apply(state: SceneState): SceneState;
  revert(state: SceneState): SceneState;
}
