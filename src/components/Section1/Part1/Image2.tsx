import { fillOpacityAni, opacityAni } from '@/utils/animation';
import { Image, Text, useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Group, Mesh } from 'three';

const Image2 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);
  const text = useRef<any>();
  const moon = useGLTF('/model/moon.glb');
  const moonRef = useRef<any>();

  useFrame(() => {
    const scrollOffset = scroll.range(0.067 / 1, 0.01 / 1);
    const visible = scroll.visible(0.067 / 1, 0.02 / 1);

    if (text.current) fillOpacityAni(text.current, scrollOffset);

    if (moonRef.current)
      gsap.to(moonRef.current.scale, {
        x: visible ? 0.08 : 0,
        y: visible ? 0.08 : 0,
        z: visible ? 0.08 : 0,
        duration: 1,
      });

    if (group.current)
      group.current.children.forEach(c => {
        const material = (c as Mesh).material;
        opacityAni(material, scrollOffset);
      });
  });

  useLayoutEffect(() => {
    return () => {
      moonRef.current.geometry.dispose();
      moonRef.current.material.dispose();
    };
  }, []);

  return (
    <group position={[0, 0, -10]}>
      <Text
        anchorX={0.55}
        font="./font/Gangwon.ttf"
        fontSize={0.1}
        position={[0, 0.3, 1]}
        letterSpacing={0.05}
        fillOpacity={0}
        ref={text}
        maxWidth={1.4}
      >
        I first saw you on the night of the full moon.
      </Text>

      <mesh scale={0.08} position={[0, 0.6, 1.5]} ref={moonRef}>
        <primitive object={moon.scene} />
      </mesh>

      <group ref={group}>
        <Image
          url={'/image/section1/pt1/pt1-05.jpg'}
          scale={[1.5, 1]}
          position={[0, -0.6, 0]}
          transparent
          opacity={1}
        />
        <Image
          url={'/image/section1/pt1/pt1-06.jpg'}
          scale={[1.5, 1]}
          position={[2, 0.5, -1]}
          transparent
          opacity={1}
        />
        <Image
          url={'/image/section1/pt1/pt1-07.jpg'}
          scale={[1.5, 1]}
          position={[-2, 0.7, -0.5]}
          transparent
          opacity={1}
        />
        <Image
          url={'/image/section1/pt1/pt1-08.jpg'}
          scale={[1.5, 1]}
          position={[-1.8, -1, 0.5]}
          transparent
          opacity={1}
        />
      </group>
    </group>
  );
};

export default Image2;

useGLTF.preload('/model/moon.glb');
