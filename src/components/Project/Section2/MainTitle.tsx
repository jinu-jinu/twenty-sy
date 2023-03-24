import { fillOpacityAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

const MainTitle = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.03 / 1, 0.02 / 1);

    if (group.current)
      group.current.children.forEach(c => {
        fillOpacityAni<Text>(c as unknown as Text, scrollOffset);
      });
  });

  return (
    <group ref={group}>
      <Text fillOpacity={0} font="/font/Prompt.ttf" position={[0, 0.1, 0]} fontSize={0.1}>
        MOMENT#1
      </Text>
      <Text
        fillOpacity={0}
        font="/font/Barlow.ttf"
        position={[0, -0.1, 0]}
        fontSize={0.25}
      >
        Qualifying
      </Text>
    </group>
  );
};

export default MainTitle;
