import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const SubTitle4 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref}>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0.08}
        position={[-0.6, 0.4, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
      >
        뿌앵윤아
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0.04}
        position={[-0.3, 0.39, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
      >
        (시즌2 하나요?)
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0.08}
        position={[0.6, 0.4, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
      >
        쭈굴윤아
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0.08}
        position={[-0.6, -0.37, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
      >
        설장군
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0.08}
        position={[0.6, -0.37, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
      >
        저승윤아
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0.08}
        position={[-0.6, -1.15, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
      >
        깝죽윤아
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0.08}
        position={[0.6, -1.15, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
      >
        킹받쮸아
      </Text>
    </group>
  );
});

export default SubTitle4;
