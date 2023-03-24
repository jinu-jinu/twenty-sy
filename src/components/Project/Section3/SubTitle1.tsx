import { fillOpacityAni } from '@/utils/animation';
import { Text, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

const SubTitle1 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);
  const texture = useTexture('./image/gradations/palette.png');

  const sentence = `
  Congratulations
  on your debut!
  `;

  useFrame(() => {
    const scrollOffset = scroll.range(0.23 / 1, 0.01 / 1);

    if (group.current)
      group.current.children.forEach(c => {
        fillOpacityAni<Text>(c as unknown as Text, scrollOffset);
      });
  });

  return (
    <group position={[0, 0, 3.5]} ref={group}>
      <Text
        font="./font/Gangwon.ttf"
        position={[0, 0.1, 0]}
        fontSize={0.04}
        letterSpacing={0.02}
        fillOpacity={0}
      >
        February 22, 2022
        <meshStandardMaterial map={texture} />
      </Text>
      <Text
        lineHeight={1}
        font="./font/Gangwon.ttf"
        fontSize={0.1}
        position={[0, -0.04, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
      >
        {sentence}

        <meshStandardMaterial map={texture} />
      </Text>
    </group>
  );
};

export default SubTitle1;
