import Text1 from './Text1';
import Video1 from './Video1';
import Video2 from './Video2';
import Video3 from './Video3';
import Image1 from './Image1';
import Text2 from './Text2';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

const Part1 = () => {
  const scroll = useScroll();
  const [visibleV1, setVisibleV1] = useState(false);
  const [visibleV2, setVisibleV2] = useState(false);
  const [visibleV3, setVisibleV3] = useState(false);

  useFrame(() => {
    const triggerV1 = scroll.visible(0.04 / 1, 0.03 / 1);
    const triggerV2 = scroll.visible(0.06 / 1, 0.03 / 1);
    const triggerV3 = scroll.visible(0.08 / 1, 0.03 / 1);

    setVisibleV1(triggerV1);
    setVisibleV2(triggerV2);
    setVisibleV3(triggerV3);
  });

  return (
    <group position={[0, 0, -11]}>
      <Text1 />
      {visibleV1 && <Video1 />}
      {visibleV2 && <Video2 />}
      {visibleV3 && <Video3 />}

      <group position={[0, 0, -20]}>
        <Image1 />
        <Text2 />
      </group>
    </group>
  );
};

export default Part1;
