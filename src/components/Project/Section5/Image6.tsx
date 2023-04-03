import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image6 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} position={[4.5, -0.4, -8]} rotation={[0, Math.PI * 0.1, 0]}>
      <Image
        url={'/image/section5/s5-15.jpg'}
        scale={[1 * 1.2, 1 * 1.2]}
        transparent
        opacity={0}
        position={[0, 0.7, 0]}
        rotation={[0, Math.PI * -0.5, 0]}
      />
      <Image
        url={'/image/section5/s5-16.jpg'}
        scale={[1 * 1.2, 1 * 1.2]}
        transparent
        opacity={0}
        position={[-0.2, -0.7, 0]}
        rotation={[0, Math.PI * -0.5, 0]}
      />
    </group>
  );
});

export default Image6;
