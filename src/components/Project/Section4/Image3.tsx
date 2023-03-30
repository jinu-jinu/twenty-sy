import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image3 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} scale={0.5}>
      <Image
        url={'/image/section4/s4-08.jpg'}
        scale={[1.75 * 0.9, 1 * 0.9]}
        transparent
        opacity={0}
        position={[0.7, 0.8, 0]}
      />
      <Image
        url={'/image/section4/s4-09.jpg'}
        scale={[1.75 * 0.8, 1 * 0.8]}
        transparent
        opacity={0}
        position={[-0.4, -0.6, 0]}
      />
      <Image
        url={'/image/section4/s4-10.jpg'}
        scale={[1.75 * 0.8, 1 * 0.8]}
        transparent
        opacity={0}
        position={[-1, 0.9, -0.5]}
      />
    </group>
  );
});

export default Image3;
