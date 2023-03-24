import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const ModelHeart = () => {
  const scroll = useScroll();
  const heartRef = useRef<any>();
  const heart = useGLTF('/model/heart.glb');

  useFrame(() => {
    const visible = scroll.visible(0.215 / 1, 0.015 / 1);

    if (heartRef.current)
      gsap.to(heartRef.current.scale, {
        x: visible ? 0.15 : 0,
        y: visible ? 0.15 : 0,
        z: visible ? 0.15 : 0,
        duration: 1,
      });
  });

  useLayoutEffect(() => {
    return () => {
      if (heartRef.current) {
        heartRef.current.geometry.dispose();
        heartRef.current.material.dispose();
      }
    };
  }, []);

  return (
    <mesh
      scale={0}
      position={[0.25, -0.4, 2.4]}
      rotation={[0, 0, Math.PI * -0.1]}
      ref={heartRef}
    >
      <primitive object={heart.scene} />
    </mesh>
  );
};

export default ModelHeart;
useGLTF.preload('/model/heart.glb');
