import MainTitle from './MainTitle';
import SubTitle1 from './SubTitle1';
import SubTitle2 from './SubTitle2';
import SubTitle3 from './SubTitle3';
import Video1 from './Video1';
import Video2 from './Video2';
import Image1 from './Image1';
import Image2 from './Image2';
import Image3 from './Image3';
import ModelHeart from './ModelHeart';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

const Section3 = () => {
  const scroll = useScroll();

  const [visible1, setVisible1] = useState(false);

  useFrame(() => {
    const trigger1 = scroll.visible(0.15 / 1, 0.2 / 1);

    setVisible1(trigger1);
  });

  if (!visible1)
    return (
      <mesh>
        <boxGeometry />
      </mesh>
    );

  return (
    <group position={[0, 0, -33]}>
      <MainTitle />
      <Video1 />

      <group position={[0, 0, -9]}>
        <SubTitle1 />
        <Image1 />
      </group>

      <group position={[0, 0, -15]}>
        <SubTitle2 />
        <Image2 />
      </group>

      <group position={[0, 0, -20]}>
        <SubTitle3 />
        <ModelHeart />
        <Video2 />
        <Image3 />
      </group>
    </group>
  );
};

export default Section3;
