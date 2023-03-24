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

const Part2 = () => {
  const scroll = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useFrame(() => {
    const scrollOffset = scroll.range(0.19 / 1, 0.01 / 1);
  });

  return (
    <group position={[0, 0, -36]}>
      <MainTitle />
      <Video1 />

      <group position={[0, 0, -11]}>
        <SubTitle1 />
        <Image1 />
      </group>

      <group position={[0, 0, -16]}>
        <SubTitle2 />
        <Image2 />
      </group>

      <group position={[0, 0, -21]}>
        <SubTitle3 />
        <ModelHeart />
        <Video2 />
        <Image3 />
      </group>
    </group>
  );
};

export default Part2;
