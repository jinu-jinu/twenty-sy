import { Text, useTexture } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const SubTitle1 = forwardRef((_, ref: ForwardedRef<any>) => {
  const texture = useTexture('./image/gradations/palette.png');

  const sentence = `
  Congratulations
  on your debut!
  `;

  return (
    <group position={[0, 0, 3.5]} ref={ref}>
      <Text
        font="./font/Gangwon.ttf"
        position={[0, 0.1, 0]}
        fontSize={0.04}
        letterSpacing={0.02}
        fillOpacity={1}
      >
        February 22, 2022
        <meshStandardMaterial map={texture} />
      </Text>
      <Text
        lineHeight={1}
        font="./font/Gangwon.ttf"
        fontSize={0.1}
        position={[0, -0.04, 0]}
        letterSpacing={0.05}
        fillOpacity={1}
      >
        {sentence}

        <meshStandardMaterial map={texture} />
      </Text>
    </group>
  );
});

export default SubTitle1;
