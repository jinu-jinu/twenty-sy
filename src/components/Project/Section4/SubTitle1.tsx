import { fillOpacityAni } from '@/utils/animation';
import { Text, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

const SubTitle1 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);
  const texture = useTexture('./image/gradations/summer.webp');

  useFrame(() => {
    const scrollOffset = scroll.range(0.383 / 1, 0.01 / 1);

    group.current.children.forEach(c => {
      fillOpacityAni<Text>(c as unknown as Text, scrollOffset);
    });
  });

  return (
    <group rotation={[0, 0, Math.PI * 0.5]} ref={group}>
      <Text
        anchorX={0.1}
        font="./font/Gangwon.ttf"
        position={[0, 0.04, 0]}
        fontSize={0.04}
        letterSpacing={0.02}
        fillOpacity={1}
      >
        Summber of 2022
        <meshStandardMaterial map={texture} />
      </Text>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0.07}
        position={[0, -0.04, 0]}
        letterSpacing={0.04}
        fillOpacity={1}
      >
        VACATION
        <meshStandardMaterial map={texture} />
      </Text>
    </group>
  );
};

export default SubTitle1;
