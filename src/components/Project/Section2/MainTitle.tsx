import { BARLOW, PROMPT_B } from '@/components/common/constant';
import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const MainTitle = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref}>
      <Text fillOpacity={0} font={PROMPT_B} position={[0, 0.1, 0]} fontSize={0.1}>
        MOMENT#1
      </Text>
      <Text fillOpacity={0} font={BARLOW} position={[0, -0.1, 0]} fontSize={0.25}>
        Qualifying
      </Text>
    </group>
  );
});

export default MainTitle;
