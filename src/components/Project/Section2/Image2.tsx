import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image2 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref}>
      <Image
        url={`/image/section1/pt1/pt1-09.webp`}
        transparent
        opacity={0}
        position={[-0.3, 1.2, 0]}
        scale={2}
      />
      <Image
        url={`/image/section1/pt1/pt1-10.webp`}
        transparent
        opacity={0}
        position={[0.3, -1.2, 0]}
        scale={2}
      />
    </group>
  );
});

export default Image2;
