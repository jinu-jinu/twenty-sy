import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const SubTitle2 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref}>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0.3}
        position={[0, 0, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
      >
        MODEL
      </Text>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0.3}
        position={[0.04, 0.03, 0.05]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#ff03b8'}
      >
        MODEL
      </Text>
    </group>
  );
});

export default SubTitle2;
