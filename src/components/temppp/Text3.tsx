import { Text } from '@react-three/drei';

const Text3 = () => {
  return (
    <group>
      <Text fontSize={0} fillOpacity={0} font="/font/Prompt.ttf" position={[0, 0.15, 0]}>
        THANK YOU
      </Text>
      <Text
        fontSize={0}
        fillOpacity={0}
        font="/font/Prompt.ttf"
        position={[0, -0.15, 0]}
        color="#ff00f2"
      >
        Love You Like This
      </Text>
      <Text
        fontSize={0.12}
        fillOpacity={0}
        font="/font/Prompt.ttf"
        position={[0, 3.6, 0]}
      >
        THE MOMENTS
      </Text>
      <Text
        fontSize={0.12}
        fillOpacity={0}
        font="/font/Prompt.ttf"
        position={[0, -3.6, 0]}
      >
        TWENTY
      </Text>
    </group>
  );
};

export default Text3;
