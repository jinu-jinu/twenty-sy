import { proxy } from 'valtio';

export const state: {
  aspect: [number, number, number];
  isResourceLoaded: boolean;
  video1: any;
} = proxy({
  aspect: [1.5, 1, 1],
  isResourceLoaded: false,
  video1: document.createElement('div'),
});
