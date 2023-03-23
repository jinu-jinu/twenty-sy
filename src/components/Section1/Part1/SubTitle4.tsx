import { fillOpacityAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const SubTitle4 = () => {
  const scroll = useScroll();
  const text = useRef<any>();

  useFrame(() => {
    const scrollOffset = scroll.range(0.102 / 1, 0.01 / 1);

    if (text.current) fillOpacityAni(text.current, scrollOffset);
  });

  return (
    <Text
      font="./font/Gangwon.ttf"
      fontSize={0.06}
      position={[0, 0, 3]}
      lineHeight={1.2}
      letterSpacing={0.05}
      ref={text}
      fillOpacity={0}
      maxWidth={0.8}
    >
      Your passion and effort toward your dream are beautiful and admirable.
    </Text>
  );
};

export default SubTitle4;
