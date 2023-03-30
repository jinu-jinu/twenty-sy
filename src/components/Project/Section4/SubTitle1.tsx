import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const SubTitle1 = forwardRef((_, ref: ForwardedRef<any>) => {
  const word = `
  시
  카
  고
  `;
  return (
    <group ref={ref}>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0}
        position={[0, 0.2, 0.1]}
        letterSpacing={0.04}
        fillOpacity={0}
        anchorX={1}
        anchorY={-0.7}
        color={'#F6F7D7'}
      >
        KCON
      </Text>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0}
        position={[0.5, 0.15, 0.1]}
        letterSpacing={0.04}
        fillOpacity={0}
        anchorX={1}
        anchorY={-0.35}
        color={'#3EC1D3'}
      >
        2022
      </Text>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0}
        position={[-0.2, -0.37, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#FF9A00'}
      >
        LA
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0}
        position={[0.3, -0.13, 0.1]}
        fillOpacity={0}
        lineHeight={1}
        color={'#FF165D'}
      >
        {word}
      </Text>
    </group>
  );
});

export default SubTitle1;
