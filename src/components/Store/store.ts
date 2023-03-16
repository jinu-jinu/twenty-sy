import { proxy } from 'valtio';

export const state: {
  aspect: [number, number, number];
} = proxy({
  aspect: [1.5, 1, 1],
});
