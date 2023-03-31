import { Text, useTexture } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const SubTitle1 = forwardRef((_, ref: ForwardedRef<any>) => {
  const texture = useTexture('./image/gradations/palette.png');

  return (
    <group position={[0, 0, 1.5]} ref={ref}>
      <Text
        font="./font/Gangwon.ttf"
        position={[-0.1, 0.06, 0]}
        fontSize={0}
        letterSpacing={0.02}
        fillOpacity={0}
      >
        Congraturation
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        position={[0.1, -0.06, 0]}
        fontSize={0}
        letterSpacing={0.02}
        fillOpacity={0}
      >
        on your Debut!
      </Text>
    </group>
  );
});

export default SubTitle1;
