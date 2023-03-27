import { GANGWON_B } from '@/components/common/constant';
import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const SubTitle3 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <Text
      ref={ref}
      font={GANGWON_B}
      fontSize={0.06}
      position={[0, 0, 3]}
      lineHeight={1.2}
      letterSpacing={0.05}
      fillOpacity={0}
      maxWidth={0.8}
    >
      Your passion and effort toward your dream are beautiful and admirable.
    </Text>
  );
});

export default SubTitle3;
