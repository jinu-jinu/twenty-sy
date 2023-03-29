import { useAspect } from '@react-three/drei';
import { lazy, Suspense, useLayoutEffect } from 'react';
import { state } from '../Store/store';
import Section1 from './Section1';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section2 from './Section2';
import Section3 from './Section3';

const Project = () => {
  const aspect = useAspect(1200, 800, 1);

  useLayoutEffect(() => {
    if (aspect[0] !== 0) state.aspect = aspect;
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <group>
      <Section1 />
      <Section2 />
      <Section3 />

      {/* <Suspense fallback={null}>
        <PreloadSection4 />
      </Suspense> */}
      {/* <Suspense fallback={null}>
        <PreloadSection5 />
      </Suspense> */}
    </group>
  );
};

export default Project;
