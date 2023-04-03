import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image2 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group position={[4.5, 0.3, -1]} ref={ref} rotation={[0, Math.PI * 0.05, 0]}>
      <Image
        url={'/image/section5/s5-03.jpg'}
        scale={[1.2 * 1.2, 1 * 1.2]}
        transparent
        opacity={0}
        position={[0, 0.7, 0]}
        rotation={[0, -Math.PI * 0.5, 0]}
      />
      <Image
        url={'/image/section5/s5-04.jpg'}
        scale={[1.2 * 1.2, 1 * 1.2]}
        transparent
        opacity={0}
        position={[0, -0.7, 0]}
        rotation={[0, -Math.PI * 0.5, 0]}
      />
      <Image
        url={'/image/section5/s5-05.jpg'}
        scale={[1.2 * 1.2, 1 * 1.2]}
        transparent
        opacity={0}
        position={[0, 0.7, 0 + -1.6]}
        rotation={[0, -Math.PI * 0.5, 0]}
      />
      <Image
        url={'/image/section5/s5-06.jpg'}
        scale={[1.2 * 1.2, 1 * 1.2]}
        transparent
        opacity={0}
        position={[-0.2, -0.7, 0 + -1.6]}
        rotation={[0, -Math.PI * 0.5, 0]}
      />
    </group>
  );
});

export default Image2;
