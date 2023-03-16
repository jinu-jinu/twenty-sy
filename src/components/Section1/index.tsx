import { useAspect } from '@react-three/drei';
import { state } from '../Store/store';
import Part0 from './Part0';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import Part5 from './Part5';

const Section1 = () => {
  const aspect = useAspect(1200, 800, 1);
  if (aspect[0] !== 0) state.aspect = aspect;

  return (
    <group>
      <Part0 />
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
    </group>
  );
};

export default Section1;
