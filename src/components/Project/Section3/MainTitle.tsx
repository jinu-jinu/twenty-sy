import { BARLOW, PROMPT_B } from '@/utils/constant';
import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const MainTitle = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group rotation={[0, 0, Math.PI * 0.5]} ref={ref}>
      <Text font={PROMPT_B} position={[0, 0.15, 0]} fontSize={0.1} fillOpacity={0}>
        MOMENT#2
      </Text>
      <Text font={BARLOW} position={[0, -0.05, 0]} fontSize={0.3} fillOpacity={0}>
        DEBUT
      </Text>
    </group>
  );
});

export default MainTitle;
