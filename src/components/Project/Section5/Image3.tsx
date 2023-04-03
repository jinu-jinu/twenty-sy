import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image3 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} position={[-4.5, -0.5, -3.5]} rotation={[0, Math.PI * -0.1, 0]}>
      <Image
        url={'/image/section5/s5-07.webp'}
        scale={[1 * 1.2, 1 * 1.2]}
        transparent
        opacity={0}
        position={[0.2, 1, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
      />
      <Image
        url={'/image/section5/s5-08.jpg'}
        scale={[1 * 1.2, 1.25 * 1.2]}
        transparent
        opacity={0}
        position={[0, -0.6, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
      />
    </group>
  );
});

export default Image3;
