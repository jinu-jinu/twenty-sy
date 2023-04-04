import { deviceOffset } from '@/utils/media';
import { Text } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import { PROMPT_B, PROMPT_SB } from '@/components/common/constant';
import gsap from 'gsap';
import { Group } from 'three';

const Section1 = () => {
  const offset = deviceOffset();
  const tl = useRef<gsap.core.Timeline>(null!);
  const title = useRef<Group>(null!);

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    title.current.children.forEach((c, i) => {
      tl.current.to(c, {
        fillOpacity: 1,
        duration: 1 - i * 0.5,
      });
    });
  }, []);

  return (
    <group position={[0, 0, -5]}>
      <group ref={title} scale={1 + offset * 3}>
        <Text
          font={PROMPT_B}
          fillOpacity={0}
          position={[0, 0.15, 0]}
          letterSpacing={0.04}
          fontSize={0.4}
        >
          THE MOMENTS
        </Text>
        <Text
          font={PROMPT_SB}
          fillOpacity={0}
          position={[0, -0.1, 0]}
          letterSpacing={0.02}
          fontSize={0.1}
          color={'#fff'}
        >
          2021.09 - 2022.12
        </Text>
      </group>
    </group>
  );
};

export default Section1;
