import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image8 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <Image
      ref={ref}
      url={'/image/section5/s5-19.webp'}
      scale={[1.4 * 2, 1.75 * 2]}
      transparent
      opacity={0}
      position={[4.5, 0, -12]}
      rotation={[0, Math.PI * -0.4, 0]}
    />
  );
});

export default Image8;
