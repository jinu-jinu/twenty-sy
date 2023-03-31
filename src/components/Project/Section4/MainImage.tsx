import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const MainImage = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref}>
      <Image
        url={'/image/section4/s4-01.jpg'}
        scale={[12, 8]}
        transparent
        opacity={0}
        position={[0, 0, -4]}
      />
      <Image
        url={'/image/section4/s4-02.jpg'}
        scale={[12, 8]}
        transparent
        opacity={0}
        position={[0, 0, -5]}
      />
      <Image
        url={'/image/section4/s4-03.jpg'}
        scale={[12, 8]}
        transparent
        opacity={0}
        position={[0, 0, -7]}
      />
      <Image
        url={'/image/section4/s4-04.jpg'}
        scale={[12, 8]}
        transparent
        opacity={0}
        position={[0, 0, -9]}
      />
    </group>
  );
});

export default MainImage;
