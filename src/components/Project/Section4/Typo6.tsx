import { GANGWON_B, PROMPT_B, PROMPT_R, PROMPT_SB } from '@/components/common/constant';
import { fillOpacityAni, fontSizeAni, opacityAni } from '@/utils/animation';
import { Image, Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Typo6 = () => {
  const scroll = useScroll();
  const text1 = useRef<any>();
  const text2 = useRef<any>();
  const image = useRef<any>();

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.542 / 1, 0.002 / 1);
    const scrollOffset2 = scroll.range(0.546 / 1, 0.002 / 1);
    const scrollOffset3 = scroll.range(0.55 / 1, 0.002 / 1);

    if (text1.current) {
      fillOpacityAni(text1.current, scrollOffset1);
      fontSizeAni(text1.current, scrollOffset1, 0, 0.4);
    }

    if (text2.current) {
      fillOpacityAni(text2.current, scrollOffset2);
      fontSizeAni(text2.current, scrollOffset2, 0, 0.2);
    }

    if (image.current) {
      opacityAni(image.current.material, scrollOffset3, 3);
    }
  });

  return (
    <group>
      <Image
        url={'/image/section1/pt3/pt3-20.jpg'}
        scale={[1.75, 1]}
        position={[0, -0.3, -0.1]}
        transparent
        opacity={0}
        ref={image}
      />
      <Text
        font={GANGWON_B}
        fontSize={0}
        position={[-0.15, 0.7, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
        ref={text1}
      >
        절레전래 동화가족
      </Text>
      <Text
        font={PROMPT_R}
        fontSize={0}
        position={[0.15, 0.4, 0]}
        fillOpacity={0}
        color={'#fff'}
        ref={text2}
      >
        NMIXX'S FIRST VARIETY SHOW
      </Text>
    </group>
  );
};

export default Typo6;
