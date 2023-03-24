import { fillOpacityAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

const MainTitle = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.342 / 1, 0.01 / 1);

    group.current.children.forEach(c => {
      fillOpacityAni<Text>(c as unknown as Text, scrollOffset);
    });
  });

  return (
    <group ref={group}>
      <Text
        font="/font/Prompt.ttf"
        position={[0, 0.15, 0]}
        fontSize={0.1}
        fillOpacity={0}
      >
        MOMENT#3
      </Text>
      <Text
        font="/font/Barlow.ttf"
        position={[0, -0.05, 0]}
        fontSize={0.3}
        fillOpacity={0}
      >
        Summer
      </Text>
    </group>
  );
};

export default MainTitle;
