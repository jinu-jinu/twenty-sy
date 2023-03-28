import { useGLTF } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const ModelHeart = forwardRef((_, ref: ForwardedRef<any>) => {
  const heart = useGLTF('/model/heart.glb');

  // useLayoutEffect(() => {
  //   return () => {
  //     if (heartRef.current) {
  //       heartRef.current.geometry.dispose();
  //       heartRef.current.material.dispose();
  //     }
  //   };
  // }, []);

  return (
    <mesh
      scale={0.3}
      position={[0.2, -0.4, 2.4]}
      rotation={[0, 0, Math.PI * -0.1]}
      ref={ref}
    >
      <primitive object={heart.scene} />
    </mesh>
  );
});

export default ModelHeart;

useGLTF.preload('/model/heart.glb');
