import { fillOpacityAni, fontSizeAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Typo2 = () => {
  const scroll = useScroll();
  const text1 = useRef<any>();
  const text2 = useRef<any>();
  const text3 = useRef<any>();
  const text4 = useRef<any>();
  const text5 = useRef<any>();
  const text6 = useRef<any>();

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.43 / 1, 0.002 / 1);
    const scrollOffset2 = scroll.range(0.431 / 1, 0.002 / 1);
    const scrollOffset3 = scroll.range(0.436 / 1, 0.002 / 1);
    const scrollOffset4 = scroll.range(0.437 / 1, 0.002 / 1);
    const scrollOffset5 = scroll.range(0.438 / 1, 0.002 / 1);
    const scrollOffset6 = scroll.range(0.442 / 1, 0.002 / 1);

    if (text1.current) {
      fillOpacityAni(text1.current, scrollOffset1);
      fontSizeAni(text1.current, scrollOffset1, 0, 0.1);
    }
    if (text2.current) {
      fillOpacityAni(text2.current, scrollOffset2);
      fontSizeAni(text2.current, scrollOffset2, 0, 0.1);
    }
    if (text3.current) {
      fillOpacityAni(text3.current, scrollOffset3);
      fontSizeAni(text3.current, scrollOffset3, 0, 0.1);
    }
    if (text4.current) {
      fillOpacityAni(text4.current, scrollOffset4);
      fontSizeAni(text4.current, scrollOffset4, 0, 0.1);
    }
    if (text5.current) {
      fillOpacityAni(text5.current, scrollOffset5);
      fontSizeAni(text5.current, scrollOffset5, 0, 0.1);
    }

    if (text6.current) {
      fillOpacityAni(text6.current, scrollOffset6);
      fontSizeAni(text6.current, scrollOffset6, 0, 0.3);
    }
  });

  return (
    <group>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0}
        position={[0, 0, 0.1]}
        letterSpacing={0.04}
        fillOpacity={0}
        anchorX={1}
        anchorY={-0.4}
        color={'#ea8e25'}
        ref={text1}
      >
        닭가슴살 쿠키
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0}
        position={[0, 0, 0.1]}
        letterSpacing={0.04}
        fillOpacity={0}
        anchorX={1}
        anchorY={-0.25}
        color={'#fbb855'}
        ref={text2}
      >
        윤아 위해 구웠지 야채 몰래 넣었지
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0}
        position={[0, 0, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#ea8e25'}
        anchorX={1}
        anchorY={-0.1}
        ref={text3}
      >
        떡볶인 없어 배고파도
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0}
        position={[0, 0, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fbb855'}
        anchorX={1}
        anchorY={0.05}
        ref={text4}
      >
        제로도 없어 목말라도
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0}
        position={[0, 0, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        anchorX={1}
        anchorY={0.2}
        color={'#ea8e25'}
        ref={text5}
      >
        퍽퍽한 살만 샐러드 맛만 느끼게 될 거 알잖아
      </Text>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0}
        position={[0, -0.55, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fc50a3'}
        ref={text6}
      >
        100DAY
      </Text>
    </group>
  );
};

export default Typo2;
