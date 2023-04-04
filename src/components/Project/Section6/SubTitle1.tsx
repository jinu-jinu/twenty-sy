import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const SubTitle1 = forwardRef((_, ref: ForwardedRef<any>) => {
  const sentence = `
  FUNCKY 
  GLITTER 
  CHRISTMAS
  `;

  return (
    <group position={[0, -0.05, 0]} ref={ref} scale={2}>
      <Text
        font="/font/Gangwon.ttf"
        position={[0, 0.27, 0]}
        fontSize={0.02}
        fillOpacity={0}
      >
        NMIXX 1st CHRISTMAS CAROL
      </Text>
      <Text
        font="/font/Prompt.ttf"
        position={[0, 0.1, 0]}
        fontSize={0.08}
        fillOpacity={0}
      >
        {sentence}
      </Text>
      <Text
        font="/font/Gangwon.ttf"
        position={[0, -0.05, 0.1]}
        fontSize={0.02}
        fillOpacity={0}
      >
        압도적인 믹싱감
      </Text>
      <Text
        font="/font/Gangwon.ttf"
        position={[0, -0.08, 0.1]}
        fontSize={0.02}
        fillOpacity={0}
      >
        보이스에 귀호강
      </Text>
      <Text
        font="/font/Gangwon.ttf"
        position={[0, -0.11, 0.1]}
        fontSize={0.02}
        fillOpacity={0}
        color={'#ff00dd'}
      >
        설윤이는 자러감
      </Text>
    </group>
  );
});

export default SubTitle1;
