import Image1 from './Image1';
import Image2 from './Image2';
import Image3 from './Image3';
import Video1 from './Video1';
import MainTitle from './MainTitle';
import SubTitle1 from './SubTitle1';
import SubTitle2 from './SubTitle2';
import SubTitle3 from './SubTitle3';
import SubTitle4 from './SubTitle4';
import ModelMoon from './ModelMoon';
import { useScroll } from '@react-three/drei';
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Section2 = () => {
  const scroll = useScroll();
  const [isVisible1, setIsVisible1] = useState(false);

  useFrame(() => {
    const trigger1 = scroll.visible(0.12 / 1, 0.05 / 1);

    setIsVisible1(trigger1);
  });

  return (
    <group position={[0, 0, -10]}>
      <MainTitle />

      <group position={[0, 0, -5]}>
        <SubTitle1 />
        <Image1 />
      </group>

      <group position={[0, 0, -10]}>
        <SubTitle2 />
        <ModelMoon />
        <Image2 />
      </group>

      <group position={[0, 0, -15]}>
        <SubTitle3 />
        {isVisible1 && <Video1 />}
      </group>

      <group position={[0, 0, -20]}>
        <Image3 />
        <SubTitle4 />
      </group>
    </group>
  );
};

export default Section2;
