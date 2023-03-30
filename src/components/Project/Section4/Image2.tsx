import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image2 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} scale={0.5}>
      <Image
        url={'/image/section4/s4-05.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[-0.2, -0.55, 0]}
      />
      <Image
        url={'/image/section4/s4-06.jpg'}
        scale={[1, 1.25]}
        transparent
        opacity={0}
        position={[0.9, 0.7, 0]}
      />
      <Image
        url={'/image/section4/s4-07.jpg'}
        scale={[1.4 * 0.8, 1 * 0.8]}
        transparent
        opacity={0}
        position={[-0.4, 0.8, -0.5]}
      />
    </group>
  );
});

export default Image2;
