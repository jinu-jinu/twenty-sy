import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image2 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} position={[0, 1, 0]}>
      <Image
        url={'/image/section3/s3-05.jpg'}
        scale={[1.5, 1]}
        transparent
        opacity={1}
        position={[-2, 0.2, -0.5]}
      />
      <Image
        url={'/image/section3/s3-06.jpg'}
        scale={[1.2, 1]}
        transparent
        opacity={1}
        position={[0, 0, -1]}
      />
      <Image
        url={'/image/section3/s3-07.jpg'}
        scale={[1, 1]}
        transparent
        opacity={1}
        position={[0.2, 1.4, -0.2]}
      />
      <Image
        url={'/image/section3/s3-08.jpg'}
        scale={[1.7, 1]}
        transparent
        opacity={1}
        position={[2.4, -0.2, -1]}
      />
    </group>
  );
});

export default Image2;
