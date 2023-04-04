import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image1 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} position={[0, 0, -0.5]} scale={0.8}>
      <Image
        url={'/image/section3/s3-02.jpg'}
        scale={[1, 1]}
        transparent
        opacity={0}
        position={[-1.5, 1, 1]}
      />
      <Image
        url={'/image/section3/s3-03.jpg'}
        scale={[1.3, 1]}
        transparent
        opacity={0}
        position={[1.5, -1, 0.5]}
      />
      <Image
        url={'/image/section3/s3-04.jpg'}
        scale={[1, 1]}
        transparent
        opacity={0}
        position={[0, 0.7, 0]}
      />
      <Image
        url={'/image/section3/s3-05.jpg'}
        scale={[1.3, 1]}
        transparent
        opacity={0}
        position={[-1.7, -0.6, -1]}
      />
      <Image
        url={'/image/section3/s3-06.jpg'}
        scale={[1.3, 1]}
        transparent
        opacity={0}
        position={[1.3, 0.2, -2]}
      />
      <Image
        url={'/image/section3/s3-07.jpg'}
        scale={[1, 1]}
        transparent
        opacity={0}
        position={[-1.5, 0.8, -2.5]}
      />
      <Image
        url={'/image/section3/s3-08.jpg'}
        scale={[1.2, 1]}
        transparent
        opacity={0}
        position={[-1.5, -1, -3.5]}
      />
      <Image
        url={'/image/section3/s3-09.jpg'}
        scale={[1.3, 1]}
        transparent
        opacity={0}
        position={[1, 0, -4]}
      />
      <Image
        url={'/image/section3/s3-10.jpg'}
        scale={[1.1, 1]}
        transparent
        opacity={0}
        position={[-1.2, 0.8, -5]}
      />
      <Image
        url={'/image/section3/s3-11.jpg'}
        scale={[1, 1]}
        transparent
        opacity={0}
        position={[-1, -1, -6]}
      />
      <Image
        url={'/image/section3/s3-12.jpg'}
        scale={[1.1, 1]}
        transparent
        opacity={0}
        position={[1, 0.5, -6.5]}
      />
    </group>
  );
});

export default Image1;
