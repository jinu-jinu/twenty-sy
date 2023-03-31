import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image3 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} scale={0.5}>
      <Image
        url={'/image/section4/s4-11.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[-1, -2.2, 0]}
      />
      <Image
        url={'/image/section4/s4-12.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[1.5, -2.5, 0]}
      />
      <Image
        url={'/image/section4/s4-13.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[3.5, -2, 0]}
      />
    </group>
  );
});

export default Image3;
