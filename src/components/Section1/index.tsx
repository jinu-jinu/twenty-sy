import { useAspect } from '@react-three/drei';
import { lazy, Suspense } from 'react';
import { state } from '../Store/store';
import Part0 from './Part0';
import Part1 from './Part1';

const LazyPart2 = lazy(() => import('./Part2'));
const LazyPart3 = lazy(() => import('./Part3'));
const LazyPart4 = lazy(() => import('./Part4'));
const LazyPart5 = lazy(() => import('./Part5'));

const Section1 = () => {
  const aspect = useAspect(1200, 800, 1);
  if (aspect[0] !== 0) state.aspect = aspect;

  return (
    <group>
      <Part0 />
      <Part1 />
      <Suspense fallback={null}>
        <LazyPart2 />
      </Suspense>
      <Suspense fallback={null}>
        <LazyPart3 />
      </Suspense>
      <Suspense fallback={null}>
        <LazyPart4 />
      </Suspense>
      <Suspense fallback={null}>
        <LazyPart5 />
      </Suspense>
    </group>
  );
};

export default Section1;
