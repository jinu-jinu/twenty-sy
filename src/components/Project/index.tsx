import { useAspect } from '@react-three/drei';
import { lazy, Suspense, useLayoutEffect } from 'react';
import { state } from '../Store/store';
import Section1 from './Section1';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const section2 = import('./Section2');

const Project = () => {
  const aspect = useAspect(1200, 800, 1);
  const PreloadSection2 = lazy(() => section2);

  useLayoutEffect(() => {
    if (aspect[0] !== 0) state.aspect = aspect;
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <group>
      <Section1 />
      <Suspense fallback={null}>
        <PreloadSection2 />
      </Suspense>
    </group>
  );
};

export default Project;
