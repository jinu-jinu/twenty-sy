import { fillOpacityAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Typo7 = () => {
  const scroll = useScroll();
  const text = useRef<any>();

  useFrame(() => {
    const scrollOffset = scroll.curve(0.568 / 1, 0.02 / 1);

    if (text.current) {
      fillOpacityAni(text.current, scrollOffset);
    }
  });

  return (
    <group>
      <Text
        font="./font/NotoSansKR.otf"
        fontSize={0.1}
        position={[0, -0.4, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
        ref={text}
      >
        어쩔라잌디스
      </Text>
    </group>
  );
};

export default Typo7;
