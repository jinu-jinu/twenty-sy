import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import Image1 from './Image1';
import Image2 from './Image2';
import Image3 from './Image3';
import Text1 from './Text1';
import Text2 from './Text2';
import Text3 from './Text3';

const Part3 = () => {
  const scroll = useScroll();
  const [isVisible1, setIsVisible1] = useState(false);

  useFrame(() => {
    const visible1 = scroll.visible(0.97 / 1, 1);

    setIsVisible1(visible1);
  });

  return (
    <group position={[0, 0, -220]}>
      <group>
        <Text1 />
        <group position={[0, 0, -3]}>
          <Image1 />
        </group>
      </group>

      <group position={[0, 0, -9]}>
        <Text2 />
        <group position={[0, 0, -3]}>
          <Image2 />
        </group>
      </group>

      <group position={[0, 0, -25.5]}>
        <Image3 />
        <Text3 />
      </group>
    </group>
  );
};

export default Part3;
