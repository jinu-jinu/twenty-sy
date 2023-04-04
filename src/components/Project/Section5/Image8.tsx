import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image8 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <Image
      ref={ref}
      url={'/image/section5/s5-19.webp'}
      scale={[1.4 * 2, 1.6 * 2]}
      transparent
      opacity={0}
      position={[2.5, 0, -11.5]}
      rotation={[0, Math.PI * -0.1, 0]}
    />
  );
});

export default Image8;
