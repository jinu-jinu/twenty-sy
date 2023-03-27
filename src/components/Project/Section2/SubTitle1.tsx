import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const SubTitle1 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <Text
      ref={ref}
      anchorX={0.55}
      font="./font/Gangwon.ttf"
      fontSize={0.1}
      position={[0, 0.3, 1]}
      letterSpacing={0.05}
      fillOpacity={0}
      maxWidth={1.4}
    >
      I first saw you on the night of the full moon.
    </Text>
  );
});

export default SubTitle1;
