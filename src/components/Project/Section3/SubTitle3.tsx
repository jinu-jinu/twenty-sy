import { fillOpacityAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const SubTitle3 = () => {
  const scroll = useScroll();
  const text = useRef<any>();

  useFrame(() => {
    const scrollOffset = scroll.range(0.308 / 1, 0.01 / 1);

    if (text.current) fillOpacityAni(text.current, scrollOffset);
  });

  return (
    <group>
      <Text
        letterSpacing={0.02}
        lineHeight={1.2}
        anchorX={0.45}
        font="/font/Gangwon.ttf"
        position={[0, 0, 2.5]}
        fontSize={0.1}
        fillOpacity={0}
        ref={text}
        maxWidth={1}
      >
        I'm happy to see you on stage, and I'm happy to hear your voice. I hope your
        future is filled with happiness!
      </Text>
    </group>
  );
};

export default SubTitle3;
