import { fillOpacityAni, opacityAni } from '@/utils/animation';
import { Image, Text, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image1 = () => {
  const scroll = useScroll();
  const group1 = useRef<Group>(null!);
  const group2 = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.042 / 1, 0.01 / 1);
    const scrollOffset2 = scroll.range(0.045 / 1, 0.01 / 1);

    if (group1.current)
      group1.current.children.forEach(c => {
        fillOpacityAni<Text>(c as unknown as Text, scrollOffset1);
      });

    if (group2.current)
      group2.current.children.forEach(c => {
        const material = (c as Mesh).material;
        opacityAni(material, scrollOffset2);
      });
  });

  const texture = useTexture('./image/gradations/dusk.webp');

  return (
    <group position={[0, 0, -5]}>
      <group position={[0, 0, 2.5]} ref={group1}>
        <Text
          anchorX={0.3}
          font="./font/Gangwon.ttf"
          position={[0, 0.5, 0]}
          fontSize={0.04}
          letterSpacing={0.02}
          fillOpacity={0}
        >
          September 3, 2021
          <meshStandardMaterial map={texture} />
        </Text>
        <Text
          anchorX={0.3}
          font="./font/Prompt.ttf"
          fontSize={0.11}
          position={[0, 0.4, 0]}
          letterSpacing={0.05}
          fillOpacity={0}
        >
          FULLMOON
          <meshStandardMaterial map={texture} />
        </Text>
      </group>

      <group ref={group2}>
        <Image
          url={'/image/section1/pt1/pt1-01.jpg'}
          scale={[1.5, 1]}
          position={[-2, 1, -1]}
          transparent
          opacity={0}
        />
        <Image
          url={'/image/section1/pt1/pt1-03.jpg'}
          scale={[1.5, 1]}
          position={[0, 0, 0]}
          transparent
          opacity={0}
        />
        <Image
          url={'/image/section1/pt1/pt1-02.jpg'}
          scale={[1.5, 1]}
          position={[1.5, -0.5, 1]}
          transparent
          opacity={0}
        />
        <Image
          url={'/image/section1/pt1/pt1-04.jpg'}
          scale={[1.5, 1]}
          position={[1.4, 1.4, -0.5]}
          transparent
          opacity={0}
        />
      </group>
    </group>
  );
};

export default Image1;
