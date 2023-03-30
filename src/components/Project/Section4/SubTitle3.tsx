import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const SubTitle3 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref}>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0}
        position={[0, 0, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#2bffb8'}
      >
        "민초? 뱉어줄게"
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0}
        position={[0.4, -0.15, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
      >
        - 사토토단 단장 설윤아
      </Text>
    </group>
  );
});

export default SubTitle3;