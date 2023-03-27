import { GANGWON_B } from '@/components/common/constant';
import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const SubTitle2 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <Text
      ref={ref}
      anchorX={0.33}
      font={GANGWON_B}
      fontSize={0.05}
      position={[0, -0.35, 2]}
      letterSpacing={0.05}
      fillOpacity={0}
      lineHeight={1.2}
      maxWidth={0.7}
    >
      Dancing and singing in front of the camera, you were cool and beautiful!
    </Text>
  );
});

export default SubTitle2;
