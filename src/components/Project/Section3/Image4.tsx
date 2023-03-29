import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image4 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group scale={0.5} ref={ref}>
      <Image
        url={'/image/section3/s3-12.jpg'}
        scale={[1, 1.25]}
        transparent
        opacity={0}
        position={[0.6, 1.3, -0.5]}
      />
      <Image
        url={'/image/section3/s3-13.jpg'}
        scale={[1, 1]}
        transparent
        opacity={0}
        position={[-0.7, 1.6, 0]}
        rotation={[0, 0, Math.PI * 0.1]}
      />
      <Image
        url={'/image/section3/s3-14.jpg'}
        scale={[1, 1.25]}
        transparent
        opacity={0}
        position={[1.8, 0.4, -0.2]}
        rotation={[0, 0, Math.PI * -0.1]}
      />
    </group>
  );
});

export default Image4;
