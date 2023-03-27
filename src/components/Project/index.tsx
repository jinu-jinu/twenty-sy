import { useAspect } from '@react-three/drei';
import { useLayoutEffect } from 'react';
import { state } from '../Store/store';
import Section1 from './Section1';
import Section2 from './Section2';

const Project = () => {
  const aspect = useAspect(1200, 800, 1);

  useLayoutEffect(() => {
    if (aspect[0] !== 0) state.aspect = aspect;
  }, []);

  return (
    <group>
      <Section1 />
      <Section2 />
    </group>
  );
};

export default Project;
