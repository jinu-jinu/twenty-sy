import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image5 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} position={[3, 1, -1]}>
      <Image
        url={'/image/section4/s4-18.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[0, 1.1, 0]}
      />
      <Image
        url={'/image/section4/s4-19.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
      />
      <Image
        url={'/image/section4/s4-20.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[0, -1.1, 0]}
      />
    </group>
  );
});

export default Image5;
