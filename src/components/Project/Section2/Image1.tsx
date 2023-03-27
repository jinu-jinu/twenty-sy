import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image1 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} position={[0, 0, -1]}>
      <Image
        url={'/image/section1/pt1/pt1-05.jpg'}
        scale={[1.5, 1]}
        position={[0, -0.6, 0]}
        transparent
        opacity={0}
      />
      <Image
        url={'/image/section1/pt1/pt1-03.jpg'}
        scale={[1.5, 1]}
        position={[2, 0.5, -1]}
        transparent
        opacity={0}
      />
      <Image
        url={'/image/section1/pt1/pt1-07.jpg'}
        scale={[1.5, 1]}
        position={[-2, 0.7, -0.5]}
        transparent
        opacity={0}
      />
      <Image
        url={'/image/section1/pt1/pt1-08.jpg'}
        scale={[1.5, 1]}
        position={[-1.8, -1, 0.5]}
        transparent
        opacity={0}
      />
    </group>
  );
});

export default Image1;
