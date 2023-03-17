import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import Text1 from './Text1';
import Text2 from './Text2';
import Text3 from './Text3';
import Video1 from './Video1';
import Video2 from './Video2';
import Video3 from './Video3';
import Video4 from './Video4';

const Part2 = () => {
  const scroll = useScroll();
  const [visibleV1, setVisibleV1] = useState(false);
  const [visibleV2, setVisibleV2] = useState(false);
  const [visibleV3, setVisibleV3] = useState(false);
  const [visibleV4, setVisibleV4] = useState(false);

  useFrame(() => {
    const triggerV1 = scroll.visible(0.14 / 1, 0.04 / 1);
    const triggerV2 = scroll.visible(0.17 / 1, 0.03 / 1);
    const triggerV3 = scroll.visible(0.19 / 1, 0.03 / 1);
    const triggerV4 = scroll.visible(0.21 / 1, 0.03 / 1);

    setVisibleV1(triggerV1);
    setVisibleV2(triggerV2);
    setVisibleV3(triggerV3);
    setVisibleV4(triggerV4);
  });

  return (
    <group position={[0, 0, -36]}>
      <Text1 />
      {visibleV1 && <Video1 />}
      {visibleV2 && <Video2 />}

      <group position={[0, 0, -16]}>
        <Text2 />
        {visibleV3 && <Video3 />}
      </group>

      <group position={[0, 0, -21]}>
        <Text3 />
        {visibleV4 && <Video4 />}
      </group>
    </group>
  );
};

export default Part2;
