import { opacityAni } from '@/utils/animation';
import { Image, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image1 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset2 = scroll.range(0.383 / 1, 0.01 / 1);

    group.current.children.forEach(c => {
      const material = (c as Mesh).material;
      opacityAni<typeof material>(material, scrollOffset2);
    });
  });

  return (
    <group ref={group}>
      <Image
        url={`/image/section1/pt3/pt3-01.webp`}
        transparent
        opacity={0}
        position={[-0.55, 1.8, 0]}
        scale={[1, 1.3]}
      />
      <Image
        url={`/image/section1/pt3/pt3-02.webp`}
        transparent
        opacity={0}
        position={[-0.55, 0.5, 0]}
      />

      <Image
        url={`/image/section1/pt3/pt3-04.webp`}
        transparent
        opacity={0}
        position={[0.55, 0.65, 0]}
        scale={[1, 1.3]}
      />
      <Image
        url={`/image/section1/pt3/pt3-03.webp`}
        transparent
        opacity={0}
        position={[0.55, 1.95, 0]}
      />

      <Image
        url={`/image/section1/pt3/pt3-05.webp`}
        transparent
        opacity={0}
        position={[-0.55, -1.95, 0]}
        scale={[1, 1.3]}
      />
      <Image
        url={`/image/section1/pt3/pt3-09.webp`}
        transparent
        opacity={0}
        position={[-0.55, -0.65, 0]}
      />
      <Image
        url={`/image/section1/pt3/pt3-07.webp`}
        transparent
        opacity={0}
        position={[0.55, -0.8, 0]}
        scale={[1, 1.3]}
      />
      <Image
        url={`/image/section1/pt3/pt3-08.webp`}
        transparent
        opacity={0}
        position={[0.55, -2.1, 0]}
      />
    </group>
  );
};

export default Image1;
