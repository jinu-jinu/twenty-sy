import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const SubTitle2 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} position={[0.7, 0.7, 0]}>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0.5}
        position={[0, 0, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
      >
        MODEL
      </Text>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0.5}
        position={[0.06, 0.06, -0.05]}
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
