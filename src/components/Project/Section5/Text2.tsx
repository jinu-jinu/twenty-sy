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
  const vegetableRef = useRef<any>();
  const vegetable = useGLTF('/model/vegetable.glb');

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.475 / 1, 0.002 / 1);
    const scrollOffset2 = scroll.range(0.476 / 1, 0.002 / 1);
    const scrollOffset3 = scroll.range(0.477 / 1, 0.002 / 1);
    const scrollOffset4 = scroll.range(0.478 / 1, 0.002 / 1);
    const scrollOffset5 = scroll.range(0.479 / 1, 0.002 / 1);
    const visible = scroll.visible(0.48 / 1, 0.015 / 1);

    fillOpacityAni(text1.current, scrollOffset1);
    fillOpacityAni(text2.current, scrollOffset2);
    fillOpacityAni(text3.current, scrollOffset3);
    fillOpacityAni(text4.current, scrollOffset4);
    fillOpacityAni(text5.current, scrollOffset5);

    gsap.to(vegetableRef.current.scale, {
      x: visible ? 0.2 : 0,
      y: visible ? 0.2 : 0,
      z: visible ? 0.2 : 0,
      duration: 1,
    });
  });

  return (
    <group position={[0, 0, 2.5]}>
      <Text
        letterSpacing={0.02}
        font="/font/Gangwon.ttf"
        fontSize={0.1}
        fillOpacity={0}
        anchorX={0.3}
        anchorY={-0.25}
        ref={text1}
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
        ref={text2}
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
        ref={text3}
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
        ref={text4}
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
        ref={text5}
        color={'#4cfa02'}
      >
        풀은 잘 못 먹고
      </Text>

      <mesh
        scale={0}
        position={[-0.1, -0.35, -0.1]}
        rotation={[0, 0, Math.PI * 0.1]}
        ref={vegetableRef}
      >
        <primitive object={vegetable.scene} />
      </mesh>
    </group>
  );
};

export default Text2;

useGLTF.preload('/model/vegetable.glb');
