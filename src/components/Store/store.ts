import { proxy } from 'valtio';

export const state: {
  progress: number;
  loadedVideoCount: number;
} = proxy({
  progress: 0,
  loadedVideoCount: 0,
});
