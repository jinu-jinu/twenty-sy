import { fillOpacityAni } from '@/utils/animation';
import { Text, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

const Text3 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.646 / 1, 0.01 / 1);

    group.current.children.forEach(c => {
      fillOpacityAni<Text>(c as unknown as Text, scrollOffset);
    });
  });

  const texture = useTexture('./image/gradations/winter.webp');

  return (
    <group ref={group} position={[0, 0, 2.5]}>
      <Text
        lineHeight={1.2}
        letterSpacing={0.05}
        font="/font/Gangwon.ttf"
        fontSize={0.08}
        fillOpacity={0}
        maxWidth={1.2}
      >
        You did a great job until the debut, comeback, and the end of the year. 2022 was
        even more special because we were with NMIXX. I will support you foooorever and
        everrrrrrrrr. see you in 2023!
        <meshStandardMaterial map={texture} />
      </Text>
    </group>
  );
};

export default Text3;
