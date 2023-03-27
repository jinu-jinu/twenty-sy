import { useAspect } from '@react-three/drei';
import { lazy, Suspense, useLayoutEffect } from 'react';
import { state } from '../Store/store';
import Section1 from './Section1';

const section2 = import('./Section2');
const section3 = import('./Section3');

const Project = () => {
  const aspect = useAspect(1200, 800, 1);
  const PreloadSection2 = lazy(() => section2);
  const PreloadSection3 = lazy(() => section3);

  useLayoutEffect(() => {
    if (aspect[0] !== 0) state.aspect = aspect;
  }, []);

  return (
    <group>
      <Section1 />
      <Suspense fallback={null}>
        <PreloadSection2 />
      </Suspense>
      <Suspense fallback={null}>
        <PreloadSection3 />
      </Suspense>
      {/* <Section4 />
      <Section5 /> */}
    </group>
  );
};

export default Project;
