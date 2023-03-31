import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image6 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} position={[-3, -2, -1]}>
      <Image
        url={'/image/section4/s4-21.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[0, 1.1, 0]}
      />
      <Image
        url={'/image/section4/s4-23.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[0, 0, 0]}
      />
      <Image
        url={'/image/section4/s4-24.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[1.85, 0, 0]}
      />
      <Image
        url={'/image/section4/s4-26.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[3.7, 0, 0]}
      />
    </group>
  );
});

export default Image6;
