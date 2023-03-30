import { Text } from '@react-three/drei';

const Text1 = () => {
  return (
    <group position={[0, 0, 1]}>
      <Text
        font="/font/Prompt.ttf"
        position={[0, 0.15, 0]}
        fontSize={0.1}
        fillOpacity={0}
      >
        MOMENT#5
      </Text>
      <Text
        font="/font/Barlow.ttf"
        position={[0, -0.05, 0]}
        fontSize={0.3}
        fillOpacity={0}
      >
        YEAR END
      </Text>
    </group>
  );
};

export default Text1;
