import { fillOpacityAni, fontSizeAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Typo4 = () => {
  const scroll = useScroll();
  const text1 = useRef<any>();
  const text2 = useRef<any>();

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.35 / 1, 0.002 / 1);
    const scrollOffset2 = scroll.range(0.352 / 1, 0.002 / 1);

    if (text1.current) {
      fillOpacityAni(text1.current, scrollOffset1);
      fontSizeAni(text1.current, scrollOffset1, 0, 0.2);
    }

    if (text2.current) {
      fillOpacityAni(text2.current, scrollOffset2);
      fontSizeAni(text2.current, scrollOffset2, 0, 0.05);
    }
  });

  return (
    <group>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0}
        position={[0, 0, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#2bffb8'}
        ref={text1}
      >
        "민초? 뱉어줄게"
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0}
        position={[0.4, -0.15, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
        ref={text2}
      >
        - 사토토단 단장 설윤아
      </Text>
    </group>
  );
};

export default Typo4;
