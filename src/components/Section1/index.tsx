import { useAspect, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { lazy, Suspense, useState } from 'react';
import { state } from '../Store/store';
import Part0 from './Part0';
import Part1 from './Part1';

const LazyPart2 = lazy(() => import('./Part2'));
const LazyPart3 = lazy(() => import('./Part3'));
const LazyPart4 = lazy(() => import('./Part4'));
const LazyPart5 = lazy(() => import('./Part5'));

const Section1 = () => {
  const scroll = useScroll();
  const aspect = useAspect(1200, 800, 1);
  if (aspect[0] !== 0) state.aspect = aspect;

  const [visiblePt2, setVisiblePt2] = useState(false);
  const [visiblePt3, setVisiblePt3] = useState(false);
  const [visiblePt4, setVisiblePt4] = useState(false);
  const [visiblePt5, setVisiblePt5] = useState(false);

  useFrame(() => {
    const triggerPt2 = scroll.visible(0.1 / 1, 0.15 / 1);
    const triggerPt3 = scroll.visible(0.2 / 1, 0.21 / 1);
    const triggerPt4 = scroll.visible(0.37 / 1, 0.21 / 1);
    const triggerPt5 = scroll.visible(0.51 / 1, 0.17 / 1);

    setVisiblePt2(triggerPt2);
    setVisiblePt3(triggerPt3);
    setVisiblePt4(triggerPt4);
    setVisiblePt5(triggerPt5);
  });

  return (
    <group>
      <Part0 />
      <Part1 />

      {/* {visiblePt2 && (
        <Suspense fallback={null}>
          <LazyPart2 />
        </Suspense>
      )}
      {visiblePt3 && (
        <Suspense fallback={null}>
          <LazyPart3 />
        </Suspense>
      )}
      {visiblePt4 && (
        <Suspense fallback={null}>
          <LazyPart4 />
        </Suspense>
      )}
      {visiblePt5 && (
        <Suspense fallback={null}>
          <LazyPart5 />
        </Suspense>
      )} */}
    </group>
  );
};

export default Section1;
