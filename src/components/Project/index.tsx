import { useAspect } from '@react-three/drei';
import { lazy, Suspense, useLayoutEffect } from 'react';
import { state } from '../Store/store';
import Section1 from './Section1';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const section2 = import('./Section2');
const section3 = import('./Section3');
const section4 = import('./Section4');
const section5 = import('./Section5');

const Project = () => {
  const aspect = useAspect(1200, 800, 1);
  const PreloadSection2 = lazy(() => section2);
  const PreloadSection3 = lazy(() => section3);
  const PreloadSection4 = lazy(() => section4);
  const PreloadSection5 = lazy(() => section5);

  useLayoutEffect(() => {
    if (aspect[0] !== 0) state.aspect = aspect;
    gsap.registerPlugin(ScrollTrigger);

    // 크롬앱 스크롤바 문제 테스트
    scrollTo(0, 10);
  }, []);

  return (
    <group>
      <Section1 />
      <Suspense fallback={null}>
        <PreloadSection2 />
      </Suspense>

      {/* <Suspense fallback={null}>
        <PreloadSection3 />
      </Suspense> */}

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
