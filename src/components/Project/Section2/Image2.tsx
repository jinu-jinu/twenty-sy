import { opacityAni } from '@/utils/animation';
import { Image, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image2 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.1 / 1, 0.01 / 1);

    if (group.current)
      group.current.children.forEach(c => {
        const material = (c as Mesh).material;
        opacityAni(material, scrollOffset);
      });
  });

  return (
    <group ref={group}>
      <Image
        url={'/image/section1/pt1/pt1-05.jpg'}
        scale={[1.5, 1]}
        position={[0, -0.6, 0]}
        transparent
        opacity={0}
      />
      <Image
        url={'/image/section1/pt1/pt1-06.jpg'}
        scale={[1.5, 1]}
        position={[2, 0.5, -1]}
        transparent
        opacity={0}
      />
      <Image
        url={'/image/section1/pt1/pt1-07.jpg'}
        scale={[1.5, 1]}
        position={[-2, 0.7, -0.5]}
        transparent
        opacity={0}
      />
      <Image
        url={'/image/section1/pt1/pt1-08.jpg'}
        scale={[1.5, 1]}
        position={[-1.8, -1, 0.5]}
        transparent
        opacity={0}
      />
    </group>
  );
};

export default Image2;
