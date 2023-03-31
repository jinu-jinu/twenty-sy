import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image4 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} position={[-2, 1, -1]}>
      <Image
        url={'/image/section4/s4-15.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[-0.95, 1.1, 0]}
      />
      <Image
        url={'/image/section4/s4-16.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[0.95, 1.1, 0]}
      />
      <Image
        url={'/image/section4/s4-17.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[-0.95, 0, 0]}
      />
    </group>
  );
});

export default Image4;
