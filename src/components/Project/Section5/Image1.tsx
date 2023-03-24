import { opacityAni } from '@/utils/animation';
import { Image, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image1 = () => {
  const scroll = useScroll();
  const group1 = useRef<Group>(null!);
  const group2 = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.528 / 1, 0.01 / 1);
    const scrollOffset2 = scroll.range(0.535 / 1, 0.01 / 1);

    group1.current.children.forEach(c => {
      const material = (c as Mesh).material;
      opacityAni<typeof material>(material, scrollOffset1);
    });

    group2.current.children.forEach(c => {
      const material = (c as Mesh).material;
      opacityAni<typeof material>(material, scrollOffset2);
    });
  });

  return (
    <group>
      <group ref={group1}>
        <Image
          url={`/image/section1/pt4/pt4-05.webp`}
          transparent
          opacity={0}
          position={[-1.7, 0, 0]}
          scale={1.5}
        />
        <Image
          url={`/image/section1/pt4/pt4-02.webp`}
          transparent
          opacity={0}
          position={[0, 0, 0]}
          scale={1.5}
        />
        <Image
          url={`/image/section1/pt4/pt4-03.webp`}
          transparent
          opacity={0}
          position={[1.7, 0, 0]}
          scale={1.5}
        />
      </group>

      <group ref={group2}>
        <Image
          url={`/image/section1/pt4/pt4-01.webp`}
          transparent
          opacity={0}
          position={[-0.85, 1.85, 0]}
          scale={[1 * 1.4, 1.3 * 1.4]}
        />

        <Image
          url={`/image/section1/pt4/pt4-04.webp`}
          transparent
          opacity={0}
          position={[0.85, -1.85, 0]}
          scale={[1 * 1.4, 1.3 * 1.4]}
        />
      </group>
    </group>
  );
};

export default Image1;
