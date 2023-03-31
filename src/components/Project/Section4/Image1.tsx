import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image1 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} scale={0.5}>
      <Image
        url={'/image/section4/s4-05.jpg'}
        scale={[1, 1.25]}
        transparent
        opacity={0}
        position={[-1.6, 1.6, 0]}
      />
      <Image
        url={'/image/section4/s4-06.jpg'}
        scale={[1.75 * 1.4, 1 * 1.4]}
        transparent
        opacity={0}
        position={[-3.6, 1, 0]}
      />
      <Image
        url={'/image/section4/s4-07.jpg'}
        scale={[1.75 * 1.2, 1 * 1.2]}
        transparent
        opacity={0}
        position={[-3.3, -0.6, 0]}
      />
    </group>
  );
});

export default Image1;
