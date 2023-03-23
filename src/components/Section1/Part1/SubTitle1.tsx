import { fillOpacityAni } from '@/utils/animation';
import { Text, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

const SubTitle1 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);
  const texture = useTexture('./image/gradations/dusk.webp');

  useFrame(() => {
    const scrollOffset = scroll.range(0.042 / 1, 0.01 / 1);

    if (group.current)
      group.current.children.forEach(c => {
        fillOpacityAni<Text>(c as unknown as Text, scrollOffset);
      });
  });
  return (
    <group position={[0, 0, 2.5]} ref={group}>
      <Text
        anchorX={0.3}
        font="./font/Gangwon.ttf"
        position={[0, 0.5, 0]}
        fontSize={0.04}
        letterSpacing={0.02}
        fillOpacity={0}
      >
        September 3, 2021
        <meshStandardMaterial map={texture} />
      </Text>
      <Text
        anchorX={0.3}
        font="./font/Prompt.ttf"
        fontSize={0.11}
        position={[0, 0.4, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
      >
        FULLMOON
        <meshStandardMaterial map={texture} />
      </Text>
    </group>
  );
};

export default SubTitle1;
