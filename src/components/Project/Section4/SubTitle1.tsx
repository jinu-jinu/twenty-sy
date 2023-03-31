import { PROMPT_B } from '@/components/common/constant';
import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const SubTitle1 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} position={[-0.2, 0, 0]}>
      <Text
        font={PROMPT_B}
        fontSize={0.5}
        position={[0, 0, 0]}
        letterSpacing={0.04}
        fillOpacity={0}
        color={'#F6F7D7'}
      >
        KCON
      </Text>
      <Text
        font={PROMPT_B}
        fontSize={0.5}
        position={[-0.06, 0.06, -0.05]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#008cff'}
      >
        KCON
      </Text>
    </group>
  );
});

export default SubTitle1;
