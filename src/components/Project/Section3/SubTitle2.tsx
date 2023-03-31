import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';
const SubTitle2 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <Text
      ref={ref}
      letterSpacing={0.02}
      lineHeight={1.2}
      anchorX={0.45}
      font="/font/Gangwon.ttf"
      position={[0, 0, 2.5]}
      fontSize={0.1}
      fillOpacity={0}
      maxWidth={1}
    >
      I'm happy to see you on stage, and I'm happy to hear your voice. I hope your future
      is filled with happiness!
    </Text>
  );
});

export default SubTitle2;
