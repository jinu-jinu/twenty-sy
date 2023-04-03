import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Image1 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <Image
      ref={ref}
      url={'/image/section5/s5-02.jpg'}
      scale={[1.5 * 2, 1.4 * 2]}
      transparent
      opacity={0}
      position={[-4.5, 0, -0.5]}
      rotation={[0, Math.PI * 0.4, 0]}
    />
  );
});

export default Image1;
