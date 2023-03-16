import { fillOpacityAni } from '@/utils/animation';
import { Text, useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import gsap from 'gsap';

const Text2 = () => {
  const scroll = useScroll();
  const text1 = useRef<any>();
  const text2 = useRef<any>();
  const text3 = useRef<any>();
  const text4 = useRef<any>();
  const text5 = useRef<any>();
  const ballRef = useRef<any>();
  const bellRef = useRef<any>();
  const ball = useGLTF('/model/ball.glb');
  const bell = useGLTF('/model/bell.glb');

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.626 / 1, 0.002 / 1);
    const scrollOffset2 = scroll.range(0.628 / 1, 0.002 / 1);
    const scrollOffset3 = scroll.range(0.63 / 1, 0.002 / 1);
    const visible1 = scroll.visible(0.627 / 1, 0.015 / 1);
    const visible2 = scroll.visible(0.631 / 1, 0.015 / 1);

    fillOpacityAni(text1.current, scrollOffset1);
    fillOpacityAni(text2.current, scrollOffset2);
    fillOpacityAni(text3.current, scrollOffset3);
    fillOpacityAni(text4.current, scrollOffset3);
    fillOpacityAni(text5.current, scrollOffset3);

    gsap.to(bellRef.current.scale, {
      x: visible1 ? 0.08 : 0,
      y: visible1 ? 0.08 : 0,
      z: visible1 ? 0.08 : 0,
      duration: 1,
    });
    gsap.to(ballRef.current.scale, {
      x: visible2 ? 0.08 : 0,
      y: visible2 ? 0.08 : 0,
      z: visible2 ? 0.08 : 0,
      duration: 1,
    });
  });

  const sentence = `
  FUNCKY 
  GLITTER 
  CHRISTMAS
  `;

  return (
    <group position={[0, 0, 2.5]}>
      <mesh
        scale={0.08}
        position={[-0.25, -0.25, -0.1]}
        rotation={[Math.PI * -0.1, 0, Math.PI * 0.35]}
        ref={ballRef}
      >
        <primitive object={ball.scene} />
      </mesh>
      <mesh
        scale={0.08}
        position={[0.25, 0.25, 0.1]}
        rotation={[0, 0, Math.PI * -0.1]}
        ref={bellRef}
      >
        <primitive object={bell.scene} />
      </mesh>

      <Text
        font="/font/Gangwon.ttf"
        position={[0, 0.27, 0]}
        fontSize={0.02}
        fillOpacity={0}
        ref={text1}
      >
        NMIXX 1st Christmas carol
      </Text>
      <Text
        font="/font/Prompt.ttf"
        position={[0, 0.1, 0]}
        fontSize={0.08}
        fillOpacity={0}
        ref={text2}
      >
        {sentence}
      </Text>
      <Text
        font="/font/Gangwon.ttf"
        position={[0, -0.05, 0.2]}
        fontSize={0.02}
        fillOpacity={0}
        ref={text3}
      >
        압도적인 믹싱감
      </Text>
      <Text
        font="/font/Gangwon.ttf"
        position={[0, -0.08, 0.2]}
        fontSize={0.02}
        fillOpacity={0}
        ref={text4}
      >
        보이스에 귀호강
      </Text>
      <Text
        font="/font/Gangwon.ttf"
        position={[0, -0.11, 0.2]}
        fontSize={0.02}
        fillOpacity={0}
        ref={text5}
        color={'#ff00dd'}
      >
        설윤이는 자러감
      </Text>
    </group>
  );
};

export default Text2;

useGLTF.preload(['/model/ball.glb', '/model/bell.glb']);
