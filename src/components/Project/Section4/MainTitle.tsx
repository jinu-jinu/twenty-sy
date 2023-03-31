import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const MainTitle = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref}>
      <Text
        font="/font/Prompt.ttf"
        position={[0, 0.15, 0]}
        fontSize={0.1}
        fillOpacity={0}
      >
        MOMENT#3
      </Text>
      <Text
        font="/font/Barlow.ttf"
        position={[0, -0.05, 0]}
        fontSize={0.3}
        fillOpacity={0}
      >
        Summer
      </Text>
    </group>
  );
});

export default MainTitle;
