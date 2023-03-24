import { fillOpacityAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const SubTitle2 = () => {
  const scroll = useScroll();
  const text = useRef<any>();

  useFrame(() => {
    const scrollOffset = scroll.range(0.095 / 1, 0.01 / 1);
    if (text.current) fillOpacityAni(text.current, scrollOffset);
  });
  return (
    <Text
      anchorX={0.55}
      font="./font/Gangwon.ttf"
      fontSize={0.1}
      position={[0, 0.3, 1]}
      letterSpacing={0.05}
      fillOpacity={0}
      ref={text}
      maxWidth={1.4}
    >
      I first saw you on the night of the full moon.
    </Text>
  );
};

export default SubTitle2;
