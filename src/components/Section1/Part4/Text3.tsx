import { fillOpacityAni } from '@/utils/animation';
import { Float, Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Text3 = () => {
  const scroll = useScroll();
  const text = useRef<any>();

  useFrame(() => {
    const scrollOffset = scroll.range(0.494 / 1, 0.01 / 1);

    fillOpacityAni(text.current, scrollOffset);
  });

  const sentence = `
    "기나긴 밤 반복된 
      bad dreams
        조용히 널 비추는 햇빛
        눈부신 sight
      마주 본 우리
    또 다른 빛을 내는 걸"
  `;

  return (
    <Float speed={1.5} floatIntensity={1} rotationIntensity={0.3}>
      <Text
        letterSpacing={0.02}
        font="/font/Gangwon.ttf"
        lineHeight={1.3}
        position={[0, 0, 3]}
        fontSize={0.05}
        fillOpacity={0}
        ref={text}
      >
        {sentence}
      </Text>
    </Float>
  );
};

export default Text3;
