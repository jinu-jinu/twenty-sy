import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const ModelMoon = () => {
  const scroll = useScroll();
  const moon = useGLTF('/model/moon.glb');
  const moonRef = useRef<any>();

  useFrame(() => {
    const visible = scroll.visible(0.1 / 1, 0.02 / 1);

    if (moonRef.current)
      gsap.to(moonRef.current.scale, {
        x: visible ? 0.08 : 0,
        y: visible ? 0.08 : 0,
        z: visible ? 0.08 : 0,
        duration: 1,
      });
  });

  useLayoutEffect(() => {
    return () => {
      moonRef.current.geometry.dispose();
      moonRef.current.material.dispose();
    };
  }, []);

  return (
    <mesh scale={0.08} position={[0, 0.6, 1.5]} ref={moonRef}>
      <primitive object={moon.scene} />
    </mesh>
  );
};

export default ModelMoon;

useGLTF.preload('/model/moon.glb');
