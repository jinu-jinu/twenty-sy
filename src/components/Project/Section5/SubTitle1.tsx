import { PROMPT_B } from '@/components/common/constant';
import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const SubTitle1 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} position={[0, -2.5, 0]} rotation={[Math.PI * -0.5, 0, 0]}>
      <Text
        font={PROMPT_B}
        fontSize={5}
        position={[0, 0, 0]}
        fillOpacity={0}
        color={'#fff'}
      >
        DICE
      </Text>
      <Text
        font={PROMPT_B}
        fontSize={5}
        position={[0, 4, 0]}
        fillOpacity={0}
        color={'#fff'}
      >
        NICE
      </Text>
      <Text
        font={PROMPT_B}
        fontSize={5}
        position={[0, 8, 0]}
        fillOpacity={0}
        color={'#fff'}
      >
        LIKE
      </Text>
      <Text
        font={PROMPT_B}
        fontSize={5}
        position={[0, 12, 0]}
        fillOpacity={0}
        color={'#fff'}
      >
        CO.OL
      </Text>
    </group>
  );
});

export default SubTitle1;
