import { PROMPT_SB } from '@/utils/constant';
import { Image, Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const ImageTitle1 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} scale={1.5}>
      <Text
        font={PROMPT_SB}
        fontSize={0}
        position={[0, 0.6, 0.1]}
        fillOpacity={0}
        color={'#fff'}
      >
        NMIXX'S FIRST VARIETY SHOW
      </Text>
      <Image
        url={'/image/section4/s4-14.jpg'}
        scale={[1.75, 1]}
        position={[0, 0, 0]}
        transparent
        opacity={0}
      />
    </group>
  );
});

export default ImageTitle1;
