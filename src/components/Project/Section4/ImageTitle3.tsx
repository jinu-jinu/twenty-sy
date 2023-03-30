import { Image, Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image7 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref}>
      <Text
        font="./font/NotoSansKR.otf"
        fontSize={0.1}
        position={[0, -0.4, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
      >
        어쩔라잌디스
      </Text>

      <Image
        url={'/image/section1/pt3/pt3-27.jpg'}
        scale={[1.75 * 0.6, 1 * 0.6]}
        transparent
        opacity={0}
        position={[0, 1.1, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-28.jpg'}
        scale={[1.75 * 0.6, 1 * 0.6]}
        transparent
        opacity={0}
      />
      <Image
        url={'/image/section1/pt3/pt3-29.jpg'}
        scale={[1.75 * 0.6, 1 * 0.6]}
        transparent
        opacity={0}
        position={[0, -1.3, 0]}
      />
    </group>
  );
});

export default Image7;
