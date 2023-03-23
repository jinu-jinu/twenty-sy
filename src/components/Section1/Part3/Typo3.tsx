import { fillOpacityAni, fontSizeAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Typo3 = () => {
  const scroll = useScroll();
  const text = useRef<any>();

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.335 / 1, 0.002 / 1);

    if (text.current) {
      fillOpacityAni(text.current, scrollOffset1);
      fontSizeAni(text.current, scrollOffset1, 0, 0.3);
    }
  });

  return (
    <group>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0}
        position={[0, 0, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
        ref={text}
      >
        MODEL
      </Text>
    </group>
  );
};

export default Typo3;
