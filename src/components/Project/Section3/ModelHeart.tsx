import { useGLTF } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const ModelHeart = forwardRef((_, ref: ForwardedRef<any>) => {
  const heart = useGLTF('/model/heart.glb');

  return (
    <mesh
      scale={0}
      position={[0.2, -0.4, 2.9]}
      rotation={[0, 0, Math.PI * -0.1]}
      ref={ref}
    >
      <primitive object={heart.scene} />
    </mesh>
  );
});

export default ModelHeart;

useGLTF.preload('/model/heart.glb');
