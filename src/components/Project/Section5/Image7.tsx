import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image7 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} position={[-3, 0, -10]} rotation={[0, 0, 0]}>
      <Image
        url={'/image/section5/s5-17.jpg'}
        scale={[1.5 * 1.2, 1.4 * 1.2]}
        transparent
        opacity={0}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
      <Image
        url={'/image/section5/s5-18.jpg'}
        scale={[1.4 * 1.2, 1.5 * 1.2]}
        transparent
        opacity={0}
        position={[1, 0, -2.5]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
});

export default Image7;
