import { fillOpacityAni, opacityAni, posXAni } from '@/utils/animation';
import { Image, Text, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image1 = () => {
  const scroll = useScroll();
  const group1 = useRef<Group>(null!);
  const group2 = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.17 / 1, 0.01 / 1);
    const scrollOffset2 = scroll.range(0.175 / 1, 0.01 / 1);

    if (group1.current)
      group1.current.children.forEach(c => {
        fillOpacityAni<Text>(c as unknown as Text, scrollOffset1);
      });

    if (group2.current) {
      posXAni(group2.current, scrollOffset2 ? 0 : -0.5, 3);

      group2.current.children.forEach(c => {
        const material = (c as Mesh).material;
        opacityAni(material, scrollOffset2, 3);
      });
    }
  });

  const sentence = `
  Congratulations
  on your debut!
  `;

  const texture = useTexture('./image/gradations/palette.png');

  return (
    <group position={[0, 0, -11]}>
      <group position={[0, -0.1, 2.5]} ref={group1}>
        <Text
          font="./font/Gangwon.ttf"
          position={[0, 0.07, 0]}
          fontSize={0.04}
          letterSpacing={0.02}
          fillOpacity={0}
        >
          February 22, 2022
          <meshStandardMaterial map={texture} />
        </Text>
        <Text
          lineHeight={1}
          font="./font/Gangwon.ttf"
          fontSize={0.1}
          position={[0, -0.07, 0]}
          letterSpacing={0.05}
          fillOpacity={0}
        >
          {sentence}

          <meshStandardMaterial map={texture} />
        </Text>
      </group>

      <group ref={group2} position={[-0.5, 0, 0]}>
        <Image
          url={'/image/section1/pt2/pt2-01.jpg'}
          scale={[1.7, 1]}
          transparent
          opacity={0}
          position={[0, 0, 0]}
        />
        <Image
          url={'/image/section1/pt2/pt2-02.jpg'}
          scale={[1.7, 1]}
          transparent
          opacity={0}
          position={[-1.8, 0, 0]}
        />
        <Image
          url={'/image/section1/pt2/pt2-03.jpg'}
          scale={[1.7, 1]}
          transparent
          opacity={0}
          position={[-1.8, -1.1, 0]}
        />
        <Image
          url={'/image/section1/pt2/pt2-04.jpg'}
          scale={[1.7, 1]}
          transparent
          opacity={0}
          position={[0, 1.1, 0]}
        />
        <Image
          url={'/image/section1/pt2/pt2-07.jpg'}
          scale={[1.7, 1]}
          transparent
          opacity={0}
          position={[1.8, 1.1, 0]}
        />
        <Image
          url={'/image/section1/pt2/pt2-06.jpg'}
          scale={[1.7, 1]}
          transparent
          opacity={0}
          position={[1.8, 0, 0]}
        />
        <Image
          url={'/image/section1/pt2/pt2-05.jpg'}
          scale={[1.7, 1]}
          transparent
          opacity={0}
          position={[0, -1.1, 0]}
        />
      </group>
    </group>
  );
};

export default Image1;
