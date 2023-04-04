import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image1 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} scale={0.3}>
      <Image
        url={'/image/section6/s6-02.jpg'}
        scale={[1, 1.5]}
        transparent
        opacity={0}
        position={[2, 1.3, -0.5]}
        rotation={[0, 0, Math.PI * -0.1]}
      />
      <Image
        url={'/image/section6/s6-03.jpg'}
        scale={[1, 1.5]}
        transparent
        opacity={0}
        position={[-1.8, -1.3, 0.5]}
        rotation={[0, 0, Math.PI * 0.1]}
      />
    </group>
  );
});

export default Image1;
