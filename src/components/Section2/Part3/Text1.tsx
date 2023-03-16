import { Text, useScroll } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { fillOpacityAni } from '@/utils/animation';

const Text1 = () => {
  const text1 = useRef<any>();
  const text2 = useRef<any>();
  const scroll = useScroll();

  useFrame(() => {
    const scrollOffset1 = scroll.curve(0.895 / 1, 0.012 / 1);
    const scrollOffset2 = scroll.curve(0.897 / 1, 0.012 / 1);

    if (text1.current) fillOpacityAni(text1.current, scrollOffset1, 1);
    if (text2.current) fillOpacityAni(text2.current, scrollOffset2, 1);
  });

  return (
    <>
      <Text
        fontSize={0.4}
        fillOpacity={0}
        font="/font/Gangwon.ttf"
        anchorX={0.8}
        anchorY={-0.4}
        ref={text1}
      >
        설윤이의
      </Text>
      <Text
        fontSize={0.4}
        fillOpacity={0}
        font="/font/Gangwon.ttf"
        anchorX={0.4}
        anchorY={0}
        ref={text2}
      >
        스무 살
      </Text>
    </>
  );
};

export default Text1;
