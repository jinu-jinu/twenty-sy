import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image3 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref}>
      <Image
        url={'/image/section6/s6-07.jpg'}
        scale={[1 * 1.2, 1.25 * 1.2]}
        transparent
        opacity={0}
        position={[-6.8, -2.5, 0]}
      />
      <Image
        url={'/image/section6/s6-08.jpg'}
        scale={[1.5 * 1.2, 1 * 1.2]}
        transparent
        opacity={0}
        position={[6.4, 2.9, 0]}
      />
      <Image
        url={'/image/section6/s6-09.jpg'}
        scale={[1 * 1.2, 1.25 * 1.2]}
        transparent
        opacity={0}
        position={[4.5, 0.5, 0]}
      />
      <Image
        url={'/image/section6/s6-10.jpg'}
        scale={[1.5 * 1.1, 1 * 1.1]}
        transparent
        opacity={0}
        position={[-2.8, -2, 0]}
      />
      <Image
        url={'/image/section6/s6-11.jpg'}
        scale={[1 * 1.2, 1.3 * 1.2]}
        transparent
        opacity={0}
        position={[6.2, -2.5, 0]}
      />
      <Image
        url={'/image/section6/s6-12.jpg'}
        scale={[1.5 * 1.2, 1 * 1.2]}
        transparent
        opacity={0}
        position={[2, 2, 0]}
      />
      <Image
        url={'/image/section6/s6-13.jpg'}
        scale={[1 * 1.2, 1 * 1.2]}
        transparent
        opacity={0}
        position={[0, -2.4, 0]}
      />
      <Image
        url={'/image/section6/s6-14.jpg'}
        scale={[1.3 * 1.2, 1 * 1.2]}
        transparent
        opacity={0}
        position={[3, -2, 0]}
      />
      <Image
        url={'/image/section6/s6-15.jpg'}
        scale={[1.3 * 1.1, 1 * 1.1]}
        transparent
        opacity={0}
        position={[-5, -0.3, 0]}
      />
      <Image
        url={'/image/section6/s6-16.jpg'}
        scale={[1.2 * 1.1, 1.2 * 1.1]}
        transparent
        opacity={0}
        position={[-1, 2.4, 0]}
      />
      <Image
        url={'/image/section6/s6-17.jpg'}
        scale={[1.2, 1.5]}
        transparent
        opacity={0}
        position={[-6.5, 2.7, 0]}
      />
      <Image
        url={'/image/section6/s6-18.jpg'}
        scale={[1.4 * 1.1, 1 * 1.1]}
        transparent
        opacity={0}
        position={[-3.7, 1.7, 0]}
      />
    </group>
  );
});

export default Image3;
