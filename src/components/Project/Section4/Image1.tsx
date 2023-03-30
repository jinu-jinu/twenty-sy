import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image1 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} scale={0.5}>
      <Image
        url={'/image/section4/s4-01.jpg'}
        scale={[1, 1.3]}
        transparent
        opacity={0}
        position={[1.6, -0.6, 0]}
      />
      <Image
        url={'/image/section4/s4-02.jpg'}
        scale={[1, 1.2]}
        transparent
        opacity={0}
        position={[0.2, -1.6, 0]}
      />
      <Image
        url={'/image/section4/s4-03.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[-0.6, 0.1, 0]}
      />
      <Image
        url={'/image/section4/s4-04.jpg'}
        scale={[1.75 * 0.8, 1 * 0.8]}
        transparent
        opacity={0}
        position={[1.6, 0.9, 0]}
      />
    </group>
  );
});

export default Image1;
