import { fillOpacityAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

const Text2 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.19 / 1, 0.01 / 1);

    group.current.children.forEach(c => {
      fillOpacityAni<Text>(c as unknown as Text, scrollOffset);
    });
  });

  return (
    <group position={[0, 0.1, 3]} ref={group}>
      <Text
        anchorX={0.4}
        font="./font/Gangwon.ttf"
        position={[0, 0.07, 0]}
        fontSize={0.1}
        letterSpacing={0.02}
        fillOpacity={0}
        rotation={[0, Math.PI * 0.2, 0]}
      >
        원하는 대로 상상한 대로
      </Text>
      <Text
        anchorX={0.41}
        font="./font/Gangwon.ttf"
        position={[0, -0.07, 0]}
        fontSize={0.15}
        letterSpacing={0.02}
        fillOpacity={0}
        rotation={[0, Math.PI * 0.24, 0]}
      >
        진짜 시작은 지금부터
      </Text>
    </group>
  );
};

export default Text2;
