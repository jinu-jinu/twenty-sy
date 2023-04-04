import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image2 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref}>
      <Image
        url={'/image/section6/s6-04.jpg'}
        scale={[1.5 * 5, 1 * 5]}
        transparent
        opacity={0}
        position={[0, -0.2, -0.5]}
      />
      <Image
        url={'/image/section6/s6-05.jpg'}
        scale={[1 * 1.8, 1.25 * 1.8]}
        transparent
        opacity={0}
        position={[1.5, 1.8, -0.1]}
      />
      <Image
        url={'/image/section6/s6-06.jpg'}
        scale={[1.3 * 2.3, 1 * 2.3]}
        transparent
        opacity={0}
        position={[-2.4, -1.7, -0.1]}
      />
    </group>
  );
});

export default Image2;
