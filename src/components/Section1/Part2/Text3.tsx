import { fillOpacityAni } from '@/utils/animation';
import { Text, useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import gsap from 'gsap';

const Text3 = () => {
  const scroll = useScroll();
  const text = useRef<any>();
  const heartRef = useRef<any>();
  const heart = useGLTF('/model/heart.glb');

  useFrame(() => {
    const scrollOffset = scroll.range(0.21 / 1, 0.01 / 1);
    const visible = scroll.visible(0.215 / 1, 0.015 / 1);

    fillOpacityAni(text.current, scrollOffset);

    gsap.to(heartRef.current.scale, {
      x: visible ? 0.15 : 0,
      y: visible ? 0.15 : 0,
      z: visible ? 0.15 : 0,
      duration: 1,
    });
  });

  return (
    <>
      <Text
        letterSpacing={0.02}
        lineHeight={1.2}
        anchorX={0.45}
        font="/font/Gangwon.ttf"
        position={[0, 0, 2.5]}
        fontSize={0.1}
        fillOpacity={0}
        ref={text}
        maxWidth={1}
      >
        I'm happy to see you on stage, and I'm happy to hear your voice. I hope your
        future is filled with happiness!
      </Text>

      <mesh
        scale={0}
        position={[0.25, -0.4, 2.4]}
        rotation={[0, 0, Math.PI * -0.1]}
        ref={heartRef}
      >
        <primitive object={heart.scene} />
      </mesh>
    </>
  );
};

export default Text3;

useGLTF.preload('/model/heart.glb');
