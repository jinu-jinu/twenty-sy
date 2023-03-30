import { Image, Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const ImageTitle2 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref}>
      <Text
        font="./font/NotoSansKR.otf"
        fontSize={0.1}
        position={[0.55, 0, 0]}
        letterSpacing={0.05}
        fillOpacity={1}
        color={'#fff'}
      >
        게임에 진심인 편
      </Text>
      <Image
        url={'/image/section1/pt3/pt3-22.jpg'}
        scale={[1.75 * 0.6, 1 * 0.6]}
        transparent
        opacity={0}
        position={[-0.95, 1.1, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-23.jpg'}
        scale={[1.75 * 0.6, 1 * 0.6]}
        transparent
        opacity={0}
        position={[0.95, 1.1, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-24.jpg'}
        scale={[1.75 * 0.6, 1 * 0.6]}
        transparent
        opacity={0}
        position={[-0.95, 0, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-25.jpg'}
        scale={[1.75 * 0.6, 1 * 0.6]}
        transparent
        opacity={0}
        position={[-0.95, -1.1, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-26.jpg'}
        scale={[1.75 * 0.6, 1 * 0.6]}
        transparent
        opacity={0}
        position={[0.95, -1.1, 0]}
      />
    </group>
  );
});

export default ImageTitle2;
