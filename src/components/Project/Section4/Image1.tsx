import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image1 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} scale={0.6}>
      <Image
        url={'/image/section4/s4-05.jpg'}
        scale={[1 * 0.8, 1.25 * 0.8]}
        transparent
        opacity={0}
        position={[1, -1, 0.2]}
      />
      <Image
        url={'/image/section4/s4-06.jpg'}
        scale={[1.75 * 2.5, 1 * 2.5]}
        transparent
        opacity={0}
        position={[-1, 0, -0.5]}
      />
      <Image
        url={'/image/section4/s4-07.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[-2.5, -1, 0.1]}
      />
    </group>
  );
});

export default Image1;
