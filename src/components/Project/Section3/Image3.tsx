import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image3 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group scale={0.7} ref={ref}>
      <Image
        url={'/image/section3/s3-13.jpg'}
        scale={[1.2, 1]}
        transparent
        opacity={0}
        position={[3.5, 0.3, -0.5]}
      />
      <Image
        url={'/image/section3/s3-14.jpg'}
        scale={[1.3, 1]}
        transparent
        opacity={0}
        position={[-1.5, -2.2, -1]}
      />
      <Image
        url={'/image/section3/s3-15.jpg'}
        scale={[1.3, 1]}
        transparent
        opacity={0}
        position={[-2.5, 1.3, 0]}
      />
      <Image
        url={'/image/section3/s3-16.jpg'}
        scale={[1.2, 1]}
        transparent
        opacity={0}
        position={[2, 2.5, -2]}
      />
      <Image
        url={'/image/section3/s3-17.jpg'}
        scale={[1.2, 1]}
        transparent
        opacity={0}
        position={[-5, -0.5, -1.5]}
      />
      <Image
        url={'/image/section3/s3-18.jpg'}
        scale={[1.4, 1]}
        transparent
        opacity={0}
        position={[0, 0, 0.5]}
      />
      <Image
        url={'/image/section3/s3-19.jpg'}
        scale={[1.3, 1]}
        transparent
        opacity={0}
        position={[2.5, -1.5, 0]}
      />
    </group>
  );
});

export default Image3;
