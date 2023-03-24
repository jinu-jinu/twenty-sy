import { fillOpacityAni, fontSizeAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Typo3 = () => {
  const scroll = useScroll();
  const text1 = useRef<any>();
  const text2 = useRef<any>();

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.466 / 1, 0.002 / 1);
    const scrollOffset2 = scroll.range(0.464 / 1, 0.002 / 1);

    if (text1.current) {
      fillOpacityAni(text1.current, scrollOffset1);
    }

    if (text2.current) {
      fillOpacityAni(text2.current, scrollOffset2);
    }
  });

  return (
    <group>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0.3}
        position={[0, 0, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
        ref={text1}
      >
        MODEL
      </Text>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0.3}
        position={[0.04, 0.03, 0.05]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#ff03b8'}
        ref={text2}
      >
        MODEL
      </Text>
    </group>
  );
};

export default Typo3;
