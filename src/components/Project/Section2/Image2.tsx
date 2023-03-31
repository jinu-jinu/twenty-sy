import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image2 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref}>
      <Image
        url={'/image/section2/s2-02.jpg'}
        scale={[1.5, 1]}
        position={[0, 0, -1]}
        transparent
        opacity={0}
      />
      <Image
        url={'/image/section2/s2-04.jpg'}
        scale={[1.5, 1]}
        position={[1.5, 0.7, 0]}
        transparent
        opacity={0}
      />
    </group>
  );
});

export default Image2;
