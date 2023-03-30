import { Text } from '@react-three/drei';

const Text4 = () => {
  return (
    <group position={[0, 0, 5]}>
      <Text
        letterSpacing={0.02}
        font="/font/Prompt.ttf"
        fontSize={0}
        fillOpacity={0}
        position={[-0.13, 0.1, 0]}
        anchorY={-0.05}
        color={'hotpink'}
      >
        CO.OL
      </Text>
      <Text
        letterSpacing={0.02}
        font="/font/Gangwon.ttf"
        fontSize={0.1}
        fillOpacity={0}
        anchorY={0}
        position={[0.28, 0.1, 0]}
      >
        하고
      </Text>
      <Text
        letterSpacing={0.02}
        font="/font/Prompt.ttf"
        fontSize={0}
        fillOpacity={0}
        position={[-0.23, -0.1, 0]}
        anchorY={-0.05}
        color={'cornflowerblue'}
      >
        DICE
      </Text>
      <Text
        letterSpacing={0.02}
        font="/font/Gangwon.ttf"
        fontSize={0.1}
        fillOpacity={0}
        anchorY={0}
        position={[0.23, -0.1, 0]}
      >
        했던 가을
      </Text>
    </group>
  );
};

export default Text4;
