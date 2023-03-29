import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image3 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group scale={0.7} ref={ref}>
      <Image
        url={'/image/section3/s3-09.jpg'}
        scale={[1.5, 1]}
        transparent
        opacity={0}
        position={[2.7, 0, -0.5]}
      />
      <Image
        url={'/image/section3/s3-10.jpg'}
        scale={[1.5, 1]}
        transparent
        opacity={0}
        position={[-1.5, -2.2, -1]}
      />
      <Image
        url={'/image/section3/s3-11.jpg'}
        scale={[1.5, 1]}
        transparent
        opacity={0}
        position={[-2.5, 1.3, 0]}
      />
    </group>
  );
});

export default Image3;
