import { GANGWON_B } from '@/utils/constant';
import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const SubTitle2 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <Text
      ref={ref}
      anchorX={0.6}
      font={GANGWON_B}
      fontSize={0.1}
      position={[0, -0.35, 1.5]}
      letterSpacing={0.05}
      fillOpacity={0}
      lineHeight={1.2}
      maxWidth={1.4}
    >
      Dancing and singing in front of the camera, you were cool and beautiful!
    </Text>
  );
});

export default SubTitle2;
