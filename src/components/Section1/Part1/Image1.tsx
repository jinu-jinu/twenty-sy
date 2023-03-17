import { opacityAni } from '@/utils/animation';
import { Image, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image1 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.109 / 1, 0.01 / 1);

    if (group.current)
      group.current.children.forEach(c => {
        const material = (c as Mesh).material;
        opacityAni<typeof material>(material, scrollOffset);
      });
  });

  return (
    <group ref={group}>
      <Image
        url={`/image/section1/pt1/pt1-01.webp`}
        transparent
        opacity={0}
        position={[-0.3, 1.2, 0]}
        scale={2}
      />
      <Image
        url={`/image/section1/pt1/pt1-02.webp`}
        transparent
        opacity={0}
        position={[0.3, -1.2, 0]}
        scale={2}
      />
    </group>
  );
};

export default Image1;
