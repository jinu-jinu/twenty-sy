import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image2 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} scale={0.5}>
      <Image
        url={'/image/section4/s4-08.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[2.7, 0.4, 0]}
      />
      <Image
        url={'/image/section4/s4-09.jpg'}
        scale={[1, 1.25]}
        transparent
        opacity={0}
        position={[2, 3, 0]}
      />
      <Image
        url={'/image/section4/s4-10.jpg'}
        scale={[1.4, 1]}
        transparent
        opacity={0}
        position={[4.3, 2, 0]}
      />
    </group>
  );
});

export default Image2;
