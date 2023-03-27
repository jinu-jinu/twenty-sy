import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const MainTitle = forwardRef((props, mainTitle: any) => {
  return (
    <group ref={mainTitle}>
      <Text fillOpacity={0} font="/font/Prompt.ttf" position={[0, 0.1, 0]} fontSize={0.1}>
        MOMENT#1
      </Text>
      <Text
        fillOpacity={0}
        font="/font/Barlow.ttf"
        position={[0, -0.1, 0]}
        fontSize={0.25}
      >
        Qualifying
      </Text>
    </group>
  );
});

export default MainTitle;
