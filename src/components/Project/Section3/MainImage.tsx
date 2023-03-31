import { Image } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const MainImage = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <Image
      ref={ref}
      url={'/image/section3/s3-01.jpg'}
      scale={[12, 8]}
      transparent
      opacity={0}
      position={[0, 0, -5]}
    />
  );
});

export default MainImage;
