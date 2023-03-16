import { Text, useScroll } from '@react-three/drei';
import { useRef } from 'react';
import { fillOpacityAni, fontSizeAni } from '@/utils/animation';

import { useFrame } from '@react-three/fiber';

const Text3 = () => {
  const text1 = useRef<any>();
  const text2 = useRef<any>();
  const text3 = useRef<any>();
  const text4 = useRef<any>();
  const scroll = useScroll();

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.99 / 1, 0.002 / 1);
    const scrollOffset2 = scroll.range(0.992 / 1, 0.002 / 1);
    const scrollOffset3 = scroll.range(0.994 / 1, 0.003 / 1);
    const scrollOffset4 = scroll.range(0.997 / 1, 0.003 / 1);

    if (text1.current) {
      fillOpacityAni(text1.current, scrollOffset1);
      fontSizeAni(text1.current, scrollOffset1, 0, 0.4);
    }

    if (text2.current) {
      fillOpacityAni(text2.current, scrollOffset2);
      fontSizeAni(text2.current, scrollOffset2, 0, 0.12);
    }

    if (text3.current) fillOpacityAni(text3.current, scrollOffset3);
    if (text4.current) fillOpacityAni(text4.current, scrollOffset4);
  });

  return (
    <group>
      <Text
        fontSize={0}
        fillOpacity={0}
        font="/font/Prompt.ttf"
        position={[0, 0.15, 0]}
        ref={text1}
      >
        THANK YOU
      </Text>
      <Text
        fontSize={0}
        fillOpacity={0}
        font="/font/Prompt.ttf"
        position={[0, -0.15, 0]}
        ref={text2}
        color="#ff00f2"
      >
        Love You Like This
      </Text>
      <Text
        fontSize={0.12}
        fillOpacity={0}
        font="/font/Prompt.ttf"
        position={[0, 3.6, 0]}
        ref={text3}
      >
        THE MOMENTS
      </Text>
      <Text
        fontSize={0.12}
        fillOpacity={0}
        font="/font/Prompt.ttf"
        position={[0, -3.6, 0]}
        ref={text4}
      >
        TWENTY
      </Text>
    </group>
  );
};

export default Text3;
