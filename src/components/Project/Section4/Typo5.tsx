import { fillOpacityAni, fontSizeAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Typo5 = () => {
  const scroll = useScroll();
  const text1 = useRef<any>();
  const text2 = useRef<any>();
  const text3 = useRef<any>();

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.52 / 1, 0.002 / 1);
    const scrollOffset2 = scroll.range(0.522 / 1, 0.002 / 1);
    const scrollOffset3 = scroll.range(0.524 / 1, 0.002 / 1);

    if (text1.current) {
      fillOpacityAni(text1.current, scrollOffset1);
    }

    if (text2.current) {
      fillOpacityAni(text2.current, scrollOffset2);
    }

    if (text3.current) {
      fillOpacityAni(text3.current, scrollOffset3);
    }
  });

  return (
    <group>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0.25}
        position={[0, 1.1, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#e1e9fb'}
        ref={text3}
      >
        MAFIA
      </Text>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0.25}
        position={[0.03, 1.14, 0.05]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#5c7ef8'}
        ref={text2}
      >
        MAFIA
      </Text>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0.25}
        position={[0.06, 1.18, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#1055d5'}
        ref={text1}
      >
        MAFIA
      </Text>
    </group>
  );
};

export default Typo5;
