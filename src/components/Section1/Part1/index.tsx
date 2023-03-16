import { Suspense } from 'react';
import Text1 from './Text1';
import Video1 from './Video1';
import Video2 from './Video2';
import Video3 from './Video3';
import Image1 from './Image1';
import Text2 from './Text2';

const Part1 = () => {
  return (
    <group position={[0, 0, -11]} dispose={null}>
      <Text1 />
      <Video1 />
      <Video2 />
      <Video3 />

      <group position={[0, 0, -20]}>
        <Image1 />
        <Text2 />
      </group>
    </group>
  );
};

export default Part1;
