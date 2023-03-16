import Text1 from './Text1';
import Text2 from './Text2';
import Text3 from './Text3';
import Video1 from './Video1';
import Video2 from './Video2';
import Video3 from './Video3';
import Video4 from './Video4';
import { Suspense } from 'react';

const Part2 = () => {
  return (
    <Suspense fallback={null}>
      <group position={[0, 0, -36]}>
        <Text1 />
        <Video1 />
        <Video2 />

        <group position={[0, 0, -16]}>
          <Text2 />
          <Video3 />
        </group>

        <group position={[0, 0, -21]}>
          <Text3 />
          <Video4 />
        </group>
      </group>
    </Suspense>
  );
};

export default Part2;
