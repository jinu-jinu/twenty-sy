import { useGLTF } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const ModelMoon = forwardRef((_, ref: ForwardedRef<any>) => {
  const moon = useGLTF('/model/moon.glb');

  return (
    <mesh scale={0} position={[0, 0.6, 1.5]} ref={ref}>
      <primitive object={moon.scene} />
    </mesh>
  );
});

export default ModelMoon;

useGLTF.preload('/model/moon.glb');
