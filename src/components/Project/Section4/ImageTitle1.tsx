import { GANGWON_B, PROMPT_R } from '@/components/common/constant';
import { Image, Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const ImageTitle1 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref}>
      <Text
        font={GANGWON_B}
        fontSize={0}
        position={[-0.15, 0.7, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
      >
        절레전래 동화가족
      </Text>
      <Text
        font={PROMPT_R}
        fontSize={0}
        position={[0.15, 0.4, 0]}
        fillOpacity={0}
        color={'#fff'}
      >
        NMIXX'S FIRST VARIETY SHOW
      </Text>
      <Image
        url={'/image/section4/s4-11.jpg'}
        scale={[1.75, 1]}
        position={[0, -0.3, -0.1]}
        transparent
        opacity={0}
      />
    </group>
  );
});

export default ImageTitle1;
