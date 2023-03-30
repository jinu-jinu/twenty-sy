import { Text, useGLTF } from '@react-three/drei';

const Text2 = () => {
  const vegetable = useGLTF('/model/vegetable.glb');

  // scale 0.2

  return (
    <group position={[0, 0, 2.5]}>
      <Text
        letterSpacing={0.02}
        font="/font/Gangwon.ttf"
        fontSize={0.1}
        fillOpacity={0}
        anchorX={0.3}
        anchorY={-0.25}
      >
        윤아는
      </Text>
      <Text
        letterSpacing={0.02}
        font="/font/Gangwon.ttf"
        fontSize={0.1}
        fillOpacity={0}
        anchorX={0.3}
        anchorY={-0.15}
      >
        춤도 잘추고
      </Text>
      <Text
        letterSpacing={0.02}
        font="/font/Gangwon.ttf"
        fontSize={0.1}
        fillOpacity={0}
        anchorX={0.3}
        anchorY={-0.05}
      >
        MC도 잘보고
      </Text>
      <Text
        letterSpacing={0.02}
        font="/font/Gangwon.ttf"
        fontSize={0.1}
        fillOpacity={0}
        anchorX={0.3}
        anchorY={0.05}
      >
        노래도 잘하고
      </Text>
      <Text
        letterSpacing={0.02}
        font="/font/Gangwon.ttf"
        fontSize={0.1}
        fillOpacity={0}
        anchorX={0.3}
        anchorY={0.15}
        color={'#4cfa02'}
      >
        풀은 잘 못 먹고
      </Text>

      <mesh scale={0} position={[-0.1, -0.35, -0.1]} rotation={[0, 0, Math.PI * 0.1]}>
        <primitive object={vegetable.scene} />
      </mesh>
    </group>
  );
};

export default Text2;

useGLTF.preload('/model/vegetable.glb');
