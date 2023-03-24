import { fillOpacityAni, fontSizeAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Typo1 = () => {
  const scroll = useScroll();
  const text1 = useRef<any>();
  const text2 = useRef<any>();
  const text3 = useRef<any>();
  const text4 = useRef<any>();

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.405 / 1, 0.002 / 1);
    const scrollOffset2 = scroll.range(0.407 / 1, 0.002 / 1);
    const scrollOffset3 = scroll.range(0.409 / 1, 0.002 / 1);
    const scrollOffset4 = scroll.range(0.411 / 1, 0.002 / 1);

    fillOpacityAni(text1.current, scrollOffset1);
    fontSizeAni(text1.current, scrollOffset1, 0, 0.4);
    fillOpacityAni(text2.current, scrollOffset2);
    fontSizeAni(text2.current, scrollOffset2, 0, 0.1);
    fillOpacityAni(text3.current, scrollOffset3);
    fontSizeAni(text3.current, scrollOffset3, 0, 0.3);
    fillOpacityAni(text4.current, scrollOffset4);
    fontSizeAni(text4.current, scrollOffset4, 0, 0.2);
  });

  const word = `
  시
  카
  고
  `;
  return (
    <group>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0}
        position={[0, 0.2, 0.1]}
        letterSpacing={0.04}
        fillOpacity={0}
        anchorX={1}
        anchorY={-0.7}
        color={'#F6F7D7'}
        ref={text1}
      >
        KCON
      </Text>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0}
        position={[0.5, 0.15, 0.1]}
        letterSpacing={0.04}
        fillOpacity={0}
        anchorX={1}
        anchorY={-0.35}
        color={'#3EC1D3'}
        ref={text2}
      >
        2022
      </Text>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0}
        position={[-0.2, -0.37, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#FF9A00'}
        ref={text3}
      >
        LA
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0}
        position={[0.3, -0.13, 0.1]}
        fillOpacity={0}
        lineHeight={1}
        color={'#FF165D'}
        ref={text4}
      >
        {word}
      </Text>
    </group>
  );
};

export default Typo1;
