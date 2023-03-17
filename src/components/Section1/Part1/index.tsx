import Text1 from './Text1';
import Image1 from './Image1';
import Image2 from './Image2';
import Video1 from './Video1';
import Image3 from './Image3';
import Text2 from './Text2';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

const Part1 = () => {
  const scroll = useScroll();
  const [visibleV, setVisibleV] = useState(false);

  useFrame(() => {
    const triggerV = scroll.visible(0.08 / 1, 0.03 / 1);

    setVisibleV(triggerV);
  });

  return (
    <group position={[0, 0, -11]}>
      <Text1 />
      <Image1 />
      <Image2 />
      {visibleV && <Video1 />}

      <group position={[0, 0, -20]}>
        <Image3 />
        <Text2 />
      </group>
    </group>
  );
};

export default Part1;
