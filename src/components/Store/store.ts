import { proxy } from 'valtio';

export const state: {
  aspect: [number, number, number];
  progress: number;
  loadedVideoCount: number;
} = proxy({
  aspect: [1.5, 1, 1],
  progress: 0,
  loadedVideoCount: 0,
});
