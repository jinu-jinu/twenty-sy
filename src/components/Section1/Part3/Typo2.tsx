import { fillOpacityAni, fontSizeAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

const Typo2 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);
  const text = useRef<any>();

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.314 / 1, 0.01 / 1);
    const scrollOffset2 = scroll.range(0.318 / 1, 0.002 / 1);

    if (group.current)
      group.current.children.forEach(c => {
        fillOpacityAni<Text>(c as unknown as Text, scrollOffset1);
      });

    if (text.current) {
      fillOpacityAni(text.current, scrollOffset2);
      fontSizeAni(text.current, scrollOffset2, 0, 0.3);
    }
  });

  return (
    <group>
      <group ref={group}>
        <Text
          font="./font/Gangwon.ttf"
          fontSize={0}
          position={[0, 0, 0.1]}
          letterSpacing={0.04}
          fillOpacity={0}
          anchorX={1}
          anchorY={-0.4}
          color={'#ea8e25'}
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
        >
          퍽퍽한 살만 샐러드 맛만 느끼게 될 거 알잖아
        </Text>
      </group>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0}
        position={[0, -0.55, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fc50a3'}
        ref={text}
      >
        100DAY
      </Text>
    </group>
  );
};

export default Typo2;
