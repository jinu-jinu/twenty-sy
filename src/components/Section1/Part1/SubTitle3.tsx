import { fillOpacityAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const SubTitle3 = () => {
  const scroll = useScroll();
  const text = useRef<any>();

  useFrame(() => {
    const scrollOffset = scroll.range(0.082 / 1, 0.01 / 1);
    if (text.current) fillOpacityAni(text.current, scrollOffset);
  });
  return (
    <Text
      anchorX={0.33}
      font="./font/Gangwon.ttf"
      fontSize={0.05}
      position={[0, -0.35, 2]}
      letterSpacing={0.05}
      fillOpacity={0}
      ref={text}
      lineHeight={1.2}
      maxWidth={0.7}
    >
      Dancing and singing in front of the camera, you were cool and beautiful!
    </Text>
  );
};

export default SubTitle3;
