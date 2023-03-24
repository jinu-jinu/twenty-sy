import { fillOpacityAni, fontSizeAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Text4 = () => {
  const scroll = useScroll();
  const text1 = useRef<any>();
  const text2 = useRef<any>();
  const text3 = useRef<any>();
  const text4 = useRef<any>();

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.52 / 1, 0.002 / 1);
    const scrollOffset2 = scroll.range(0.522 / 1, 0.002 / 1);
    const scrollOffset3 = scroll.range(0.525 / 1, 0.002 / 1);
    const scrollOffset4 = scroll.range(0.528 / 1, 0.002 / 1);

    fillOpacityAni(text1.current, scrollOffset1);
    fontSizeAni(text1.current, scrollOffset1, 0, 0.2);

    fillOpacityAni(text2.current, scrollOffset2);

    fillOpacityAni(text3.current, scrollOffset3);

    fontSizeAni(text3.current, scrollOffset3, 0, 0.2);
    fillOpacityAni(text4.current, scrollOffset4);
  });

  return (
    <group position={[0, 0, 5]}>
      <Text
        letterSpacing={0.02}
        font="/font/Prompt.ttf"
        fontSize={0}
        fillOpacity={0}
        position={[-0.13, 0.1, 0]}
        anchorY={-0.05}
        color={'hotpink'}
        ref={text1}
      >
        CO.OL
      </Text>
      <Text
        letterSpacing={0.02}
        font="/font/Gangwon.ttf"
        fontSize={0.1}
        fillOpacity={0}
        anchorY={0}
        position={[0.28, 0.1, 0]}
        ref={text2}
      >
        하고
      </Text>
      <Text
        letterSpacing={0.02}
        font="/font/Prompt.ttf"
        fontSize={0}
        fillOpacity={0}
        position={[-0.23, -0.1, 0]}
        anchorY={-0.05}
        color={'cornflowerblue'}
        ref={text3}
      >
        DICE
      </Text>
      <Text
        letterSpacing={0.02}
        font="/font/Gangwon.ttf"
        fontSize={0.1}
        fillOpacity={0}
        anchorY={0}
        position={[0.23, -0.1, 0]}
        ref={text4}
      >
        했던 가을
      </Text>
    </group>
  );
};

export default Text4;
