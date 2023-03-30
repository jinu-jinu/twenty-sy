import { Text } from '@react-three/drei';

const MainTitle = () => {
  return (
    <group rotation={[0, 0, -Math.PI * 0.5]}>
      <Text
        font="/font/Prompt.ttf"
        position={[0, 0.15, 0]}
        fontSize={0.1}
        fillOpacity={0}
      >
        MOMENT#4
      </Text>
      <Text
        font="/font/Barlow.ttf"
        position={[0, -0.05, 0]}
        fontSize={0.3}
        fillOpacity={0}
      >
        COMEBACK
      </Text>
    </group>
  );
};

export default MainTitle;
