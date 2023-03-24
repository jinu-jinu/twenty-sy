import { fillOpacityAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Typo6 = () => {
  const scroll = useScroll();
  const text = useRef<any>();

  useFrame(() => {
    const scrollOffset = scroll.curve(0.538 / 1, 0.032 / 1);

    if (text.current) {
      fillOpacityAni(text.current, scrollOffset);
    }
  });

  return (
    <group>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0.2}
        position={[0, 1.1, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
        ref={text}
      >
        의외로 게임에 진심인 편
      </Text>
    </group>
  );
};

export default Typo6;
