import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image4 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} position={[4.5, -0.1, -5]} rotation={[0, Math.PI * 0.15, 0]}>
      <Image
        url={'/image/section5/s5-09.jpg'}
        scale={[1 * 1.2, 1 * 1.2]}
        transparent
        opacity={0}
        position={[0, 0.7, 0]}
        rotation={[0, Math.PI * -0.5, 0]}
      />
      <Image
        url={'/image/section5/s5-10.jpg'}
        scale={[1 * 1.2, 1 * 1.2]}
        transparent
        opacity={0}
        position={[-0.2, -0.7, 0]}
        rotation={[0, Math.PI * -0.5, 0]}
      />
      <Image
        url={'/image/section5/s5-11.jpg'}
        scale={[1 * 1.2, 1 * 1.2]}
        transparent
        opacity={0}
        position={[-0.2, 0.7, -1.4]}
        rotation={[0, Math.PI * -0.5, 0]}
      />
    </group>
  );
});

export default Image4;
