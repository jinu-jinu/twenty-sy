import { PROMPT_B } from '@/utils/constant';
import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Text3 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref}>
      <Text fontSize={0.5} fillOpacity={0} font={PROMPT_B} position={[0, 0.2, 0]}>
        THANK YOU
      </Text>
      <Text
        fontSize={0.2}
        fillOpacity={0}
        font={PROMPT_B}
        position={[0, -0.2, 0]}
        color="#ff00f2"
      >
        Love You Like This
      </Text>
      <Text fontSize={0.15} fillOpacity={0} font={PROMPT_B} position={[0, 3.6, 0]}>
        THE MOMENTS
      </Text>
      <Text fontSize={0.15} fillOpacity={0} font={PROMPT_B} position={[0, -3.6, 0]}>
        SULLYOON
      </Text>
    </group>
  );
});

export default Text3;
