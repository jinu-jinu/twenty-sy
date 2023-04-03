import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image5 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} position={[-4.5, 0.1, -6.5]} rotation={[0, Math.PI * -0.05, 0]}>
      <Image
        url={'/image/section5/s5-12.jpg'}
        scale={[1 * 1.2, 1.2 * 1.2]}
        transparent
        opacity={0}
        position={[0, 1, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
      />
      <Image
        url={'/image/section5/s5-13.webp'}
        scale={[1 * 1.2, 1.3 * 1.2]}
        transparent
        opacity={0}
        position={[0, -0.7, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
      />
      <Image
        url={'/image/section5/s5-14.jpg'}
        scale={[1 * 1.2, 1.25 * 1.2]}
        transparent
        opacity={0}
        position={[0.2, -0.7, -1.2]}
        rotation={[0, Math.PI * 0.5, 0]}
      />
    </group>
  );
});

export default Image5;
