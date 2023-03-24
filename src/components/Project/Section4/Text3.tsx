import { fillOpacityAni } from '@/utils/animation';
import { Text, useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import gsap from 'gsap';

const Text3 = () => {
  const scroll = useScroll();
  const text1 = useRef<any>();
  const text2 = useRef<any>();
  const text3 = useRef<any>();
  const text4 = useRef<any>();
  const text5 = useRef<any>();
  const dogRef = useRef<any>();
  const dog = useGLTF('/model/dog.glb');

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.37 / 1, 0.002 / 1);
    const scrollOffset2 = scroll.range(0.372 / 1, 0.002 / 1);
    const scrollOffset3 = scroll.range(0.376 / 1, 0.002 / 1);
    const scrollOffset4 = scroll.range(0.378 / 1, 0.002 / 1);
    const scrollOffset5 = scroll.range(0.38 / 1, 0.002 / 1);
    const visible = scroll.visible(0.374 / 1, 0.022 / 1);

    fillOpacityAni(text1.current, scrollOffset1, 2);
    fillOpacityAni(text2.current, scrollOffset2, 2);
    fillOpacityAni(text3.current, scrollOffset3, 2);
    fillOpacityAni(text4.current, scrollOffset4, 2);
    fillOpacityAni(text5.current, scrollOffset5, 2);

    gsap.to(dogRef.current.scale, {
      x: visible ? 0.5 : 0,
      y: visible ? 0.5 : 0,
      z: visible ? 0.5 : 0,
      duration: 1,
    });
  });

  const sentence = `부러워ㅓㅇ엉 헤헷>_<`;

  return (
    <group position={[0, 0, 3]}>
      <Text
        letterSpacing={0.05}
        lineHeight={1.2}
        font="/font/Gangwon.ttf"
        fontSize={0.3}
        fillOpacity={0}
        anchorY={-0.6}
        color={'hotpink'}
        position={[0.4, 0, 0]}
        ref={text1}
      >
        설렌다
      </Text>
      <Text
        letterSpacing={0.05}
        lineHeight={1.2}
        font="/font/Gangwon.ttf"
        fontSize={0.15}
        fillOpacity={0}
        anchorX={0.9}
        anchorY={-0.2}
        ref={text2}
        position={[0, 0, -0.1]}
      >
        윤아네 강아지 너무 귀여워
      </Text>
      <Text
        letterSpacing={0.05}
        lineHeight={1.2}
        font="/font/Gangwon.ttf"
        fontSize={0.15}
        fillOpacity={0}
        anchorX={0.9}
        anchorY={0}
        ref={text3}
        position={[0, 0, -0.2]}
      >
        아기라서 그런가? 사랑스럽고
      </Text>

      <Text
        letterSpacing={0.05}
        lineHeight={1.2}
        font="/font/Gangwon.ttf"
        fontSize={0.15}
        fillOpacity={0}
        anchorX={0.9}
        anchorY={0.2}
        ref={text4}
        position={[0, 0, -0.3]}
      >
        바ㄹ바닥 말랑말랑 한거봐~
      </Text>
      <Text
        letterSpacing={0.05}
        lineHeight={1.2}
        font="/font/Gangwon.ttf"
        fontSize={0.15}
        fillOpacity={0}
        anchorX={0.9}
        anchorY={0.4}
        ref={text5}
        position={[0, 0, -0.4]}
      >
        {sentence}
      </Text>
      <mesh scale={0} position={[-0.6, 0.2, -0.5]} ref={dogRef}>
        <primitive object={dog.scene} />
      </mesh>
    </group>
  );
};

export default Text3;

useGLTF.preload('/model/dog.glb');
