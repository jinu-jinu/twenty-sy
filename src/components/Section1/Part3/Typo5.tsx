import { fillOpacityAni, fontSizeAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Typo5 = () => {
  const scroll = useScroll();
  const text1 = useRef<any>();
  const text2 = useRef<any>();
  const text3 = useRef<any>();
  const text4 = useRef<any>();

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.36 / 1, 0.002 / 1);
    const scrollOffset2 = scroll.range(0.362 / 1, 0.002 / 1);
    const scrollOffset3 = scroll.range(0.363 / 1, 0.002 / 1);
    const scrollOffset4 = scroll.range(0.364 / 1, 0.002 / 1);

    if (text1.current) {
      fillOpacityAni(text1.current, scrollOffset1);
      fontSizeAni(text1.current, scrollOffset1, 0, 0.2);
    }

    if (text2.current) {
      fillOpacityAni(text2.current, scrollOffset2);
      fontSizeAni(text2.current, scrollOffset2, 0, 0.15);
    }

    if (text3.current) {
      fillOpacityAni(text3.current, scrollOffset3);
      fontSizeAni(text3.current, scrollOffset3, 0, 0.15);
    }

    if (text4.current) {
      fillOpacityAni(text4.current, scrollOffset4);
      fontSizeAni(text4.current, scrollOffset4, 0, 0.2);
    }
  });

  return (
    <group>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0}
        position={[-0.4, 0.85, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#455D7A'}
        ref={text1}
      >
        MAFIA
      </Text>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0}
        position={[-0.05, 0.3, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#959595'}
        ref={text2}
      >
        in
      </Text>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0}
        position={[-0.65, -0.45, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#e3e3e3'}
        ref={text3}
      >
        the
      </Text>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0}
        position={[0.5, -0.65, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#F95959'}
        ref={text4}
      >
        NMIXX
      </Text>
    </group>
  );
};

export default Typo5;
