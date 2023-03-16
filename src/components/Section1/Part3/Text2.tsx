import { fillOpacityAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Text2 = () => {
  const scroll = useScroll();
  const text1 = useRef<any>();
  const text2 = useRef<any>();
  const text3 = useRef<any>();
  const text4 = useRef<any>();

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.3 / 1, 0.01 / 1);
    const scrollOffset2 = scroll.range(0.31 / 1, 0.001 / 1);
    const scrollOffset3 = scroll.range(0.311 / 1, 0.001 / 1);
    const scrollOffset4 = scroll.range(0.312 / 1, 0.001 / 1);

    fillOpacityAni(text1.current, scrollOffset1);
    fillOpacityAni(text2.current, scrollOffset2);
    fillOpacityAni(text3.current, scrollOffset3);
    fillOpacityAni(text4.current, scrollOffset4);
  });

  const sentence1 = `
  기
  좌
  르
  르
  한
  치
  회
  `;

  const sentence2 = `
  이
  스
  크
  림
  `;

  return (
    <group position={[0, 0, 2.5]}>
      <Text
        font="/font/Gangwon.ttf"
        fontSize={0.1}
        fillOpacity={0}
        letterSpacing={0.02}
        lineHeight={1.2}
        ref={text1}
      >
        여름하면 설윤아!
      </Text>
      <Text
        font="/font/Gangwon.ttf"
        fontSize={0.05}
        fillOpacity={0}
        position={[0.085, -0.074, 0]}
        ref={text2}
        color={'#11ff00'}
      >
        빙
      </Text>
      <Text
        font="/font/Gangwon.ttf"
        fontSize={0.05}
        fillOpacity={0}
        position={[0.16, -0.228, 0]}
        ref={text3}
        color={'#fd005d'}
      >
        {sentence1}
      </Text>
      <Text
        font="/font/Gangwon.ttf"
        fontSize={0.05}
        fillOpacity={0}
        position={[0.25, -0.15, 0]}
        ref={text4}
        color={'#006aff'}
      >
        {sentence2}
      </Text>
    </group>
  );
};

export default Text2;
