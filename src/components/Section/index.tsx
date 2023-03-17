import CameraControl from '@/components/Camera/CameraControl';
import { lazy, Suspense } from 'react';
import Section1 from '../Section1';

const LazySection2 = lazy(() => import('../Section2'));

const Project = () => {
  return (
    <group>
      <CameraControl />
      <Section1 />
      {/* <Suspense fallback={null}>
        <LazySection2 />
      </Suspense> */}
    </group>
  );
};

export default Project;
