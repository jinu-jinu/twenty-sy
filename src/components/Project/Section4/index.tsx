import MainTitle from './MainTitle';
import SubTitle1 from './SubTitle1';
import Video1 from './Video1';
import Image1 from './Image1';
import Image2 from './Image2';
import Image3 from './Image3';
import Image4 from './Image4';
import Image5 from './Image5';
import Image6 from './Image6';
import Image7 from './Image7';
import Image8 from './Image8';
import Typo1 from './Typo1';
import Typo2 from './Typo2';
import Typo3 from './Typo3';
import Typo4 from './Typo4';
import Typo5 from './Typo5';
import Typo6 from './Typo6';
import Typo7 from './Typo7';
import Typo8 from './Typo8';
import { useScroll } from '@react-three/drei';
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Section4 = () => {
  const scroll = useScroll();
  const [isVisible1, setIsVisible1] = useState(false);

  useFrame(() => {
    const trigger1 = scroll.visible(0.335 / 1, 0.06 / 1);

    setIsVisible1(trigger1);
  });
  return (
    <>
      <group position={[0, 0, -56]}>
        <MainTitle />
        {isVisible1 && <Video1 />}

        <group position={[0, 0, -6]}>
          <SubTitle1 />
        </group>

        <group position={[0, 0.15, -10]}>
          <Typo1 />
          <Image1 />
        </group>

        <group position={[0, -0.15, -15]}>
          <Typo2 />
          <Image2 />
        </group>

        <group position={[0, -0.3, -19]}>
          <Typo3 />
          <Image3 />
        </group>

        <group position={[0, 0.2, -23]}>
          <Typo4 />
          <Image4 />
        </group>

        <group position={[0, -0.2, -27]}>
          <Typo5 />
          <Image5 />
        </group>

        <group position={[0, -0.15, -32]}>
          <Typo6 />
          <Image6 />
        </group>

        <group position={[0, 0, -35]}>
          <Typo7 />
          <Image7 />
        </group>

        <group position={[0, 0, -39]}>
          <Typo8 />
          <Image8 />
        </group>
      </group>
    </>
  );
};

export default Section4;
