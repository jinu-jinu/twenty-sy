import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image1 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group>
      <group ref={ref} position={[-1, 0, 0]}>
        <Image
          url={'/image/section3/s3-01.jpg'}
          scale={[1, 1]}
          transparent
          opacity={1}
          position={[0.1, 0.1, 0]}
        />
        <Image
          url={'/image/section3/s3-02.jpg'}
          scale={[1.3, 1]}
          transparent
          opacity={1}
          position={[-2.3, 0.4, -0.5]}
        />
        <Image
          url={'/image/section3/s3-03.jpg'}
          scale={[1, 1]}
          transparent
          opacity={1}
          position={[-2, -1.2, -0.2]}
        />
        <Image
          url={'/image/section3/s3-04.jpg'}
          scale={[1.5, 1]}
          transparent
          opacity={1}
          position={[0.1, 2, -1]}
        />
      </group>
    </group>
  );
});

export default Image1;
