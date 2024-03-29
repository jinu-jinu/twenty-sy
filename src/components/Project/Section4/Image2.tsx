import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image2 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} scale={0.6}>
      <Image
        url={'/image/section4/s4-08.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[2.5, 0.2, 0.1]}
      />
      <Image
        url={'/image/section4/s4-09.jpg'}
        scale={[1 * 2.8, 1.25 * 2.8]}
        transparent
        opacity={0}
        position={[2, 1.8, -0.5]}
      />
      <Image
        url={'/image/section4/s4-10.jpg'}
        scale={[1.4, 1]}
        transparent
        opacity={0}
        position={[3, 3, 0]}
      />
    </group>
  );
});

export default Image2;
