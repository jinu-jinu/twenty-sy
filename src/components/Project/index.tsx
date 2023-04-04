import { lazy, Suspense } from 'react';
import Section1 from './Section1';

const section2 = import('./Section2');
const section3 = import('./Section3');
const section4 = import('./Section4');
const section5 = import('./Section5');
const section6 = import('./Section6');

const Project = () => {
  const PreloadSection2 = lazy(() => section2);
  const PreloadSection3 = lazy(() => section3);
  const PreloadSection4 = lazy(() => section4);
  const PreloadSection5 = lazy(() => section5);
  const PreloadSection6 = lazy(() => section6);

  return (
    <group>
      <Section1 />
      <Suspense fallback={null}>
        <PreloadSection2 />
      </Suspense>
      <Suspense fallback={null}>
        <PreloadSection3 />
      </Suspense>
      <Suspense fallback={null}>
        <PreloadSection4 />
      </Suspense>
      <Suspense fallback={null}>
        <PreloadSection5 />
      </Suspense>
      <Suspense fallback={null}>
        <PreloadSection6 />
      </Suspense>
    </group>
  );
};

export default Project;
