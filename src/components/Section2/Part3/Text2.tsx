import { Text, useScroll } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { fillOpacityAni } from '@/utils/animation';

const Text2 = () => {
  const text1 = useRef<any>();
  const text2 = useRef<any>();
  const scroll = useScroll();

  useFrame(() => {
    const scrollOffset1 = scroll.curve(0.929 / 1, 0.018 / 1);
    const scrollOffset2 = scroll.curve(0.931 / 1, 0.018 / 1);

    if (text1.current) fillOpacityAni(text1.current, scrollOffset1, 1);
    if (text2.current) fillOpacityAni(text2.current, scrollOffset2, 1);
  });

  return (
    <>
      <Text
        fontSize={0.4}
        fillOpacity={0}
        font="/font/Gangwon.ttf"
        anchorX={1}
        anchorY={-0.425}
        ref={text1}
      >
        데뷔 1주년을
      </Text>
      <Text
        fontSize={0.4}
        fillOpacity={0}
        font="/font/Gangwon.ttf"
        anchorX={1}
        anchorY={0.025}
        ref={text2}
      >
        축하합니다.
      </Text>
    </>
  );
};

export default Text2;
