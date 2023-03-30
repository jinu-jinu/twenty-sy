import { Text, useGLTF } from '@react-three/drei';
import { useRef } from 'react';

const Text2 = () => {
  const ball = useGLTF('/model/ball.glb');
  const bell = useGLTF('/model/bell.glb');

  const sentence = `
  FUNCKY 
  GLITTER 
  CHRISTMAS
  `;

  // scale 0.08

  return (
    <group position={[0, 0, 2.5]}>
      <mesh
        scale={0.08}
        position={[-0.25, -0.25, -0.1]}
        rotation={[Math.PI * -0.1, 0, Math.PI * 0.35]}
      >
        <primitive object={ball.scene} />
      </mesh>
      <mesh scale={0.08} position={[0.25, 0.25, 0.1]} rotation={[0, 0, Math.PI * -0.1]}>
        <primitive object={bell.scene} />
      </mesh>

      <Text
        font="/font/Gangwon.ttf"
        position={[0, 0.27, 0]}
        fontSize={0.02}
        fillOpacity={0}
      >
        NMIXX 1st Christmas carol
      </Text>
      <Text
        font="/font/Prompt.ttf"
        position={[0, 0.1, 0]}
        fontSize={0.08}
        fillOpacity={0}
      >
        {sentence}
      </Text>
      <Text
        font="/font/Gangwon.ttf"
        position={[0, -0.05, 0.2]}
        fontSize={0.02}
        fillOpacity={0}
      >
        압도적인 믹싱감
      </Text>
      <Text
        font="/font/Gangwon.ttf"
        position={[0, -0.08, 0.2]}
        fontSize={0.02}
        fillOpacity={0}
      >
        보이스에 귀호강
      </Text>
      <Text
        font="/font/Gangwon.ttf"
        position={[0, -0.11, 0.2]}
        fontSize={0.02}
        fillOpacity={0}
        color={'#ff00dd'}
      >
        설윤이는 자러감
      </Text>
    </group>
  );
};

export default Text2;

useGLTF.preload(['/model/ball.glb', '/model/bell.glb']);
