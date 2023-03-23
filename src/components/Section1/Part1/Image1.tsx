import { opacityAni } from '@/utils/animation';
import { Image, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image1 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.045 / 1, 0.01 / 1);

    if (group.current)
      group.current.children.forEach(c => {
        const material = (c as Mesh).material;
        opacityAni(material, scrollOffset);
      });
  });

  return (
    <group ref={group}>
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
  );
};

export default Image1;
