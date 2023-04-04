import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const SubTitle3 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref} position={[0.5, -0.5, 0]}>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0.3}
        position={[0, 0, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#3ac697'}
      >
        "민초? 뱉어줄게"
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0.07}
        position={[0.6, -0.3, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
      >
        - 사토단 단장 설윤아
      </Text>
    </group>
  );
});

export default SubTitle3;
