import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image4 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} scale={0.6}>
      <Image
        url={'/image/section4/s4-20.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[-1, 1.3, 0]}
      />
      <Image
        url={'/image/section4/s4-21.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[1, 1.3, 0]}
      />
      <Image
        url={'/image/section4/s4-22.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[-1, 0, 0]}
      />
      <Image
        url={'/image/section4/s4-23.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[1, 0, 0]}
      />
      <Image
        url={'/image/section4/s4-24.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[-1, -1.3, 0]}
      />
      <Image
        url={'/image/section4/s4-25.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[1, -1.3, 0]}
      />
    </group>
  );
});

export default Image4;
