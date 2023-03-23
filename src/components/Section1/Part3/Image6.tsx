import { opacityAni } from '@/utils/animation';
import { Image, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image6 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.curve(0.374 / 1, 0.012 / 1);

    if (group.current) {
      group.current.children.forEach(c => {
        const material = (c as Mesh).material;
        opacityAni(material, scrollOffset, 3);
      });
    }
  });

  return (
    <group ref={group} scale={0.6}>
      <Image
        url={'/image/section1/pt3/pt3-20.jpg'}
        scale={[1.75, 1]}
        position={[1.5, 0, 0]}
        transparent
        opacity={0}
      />
      <Image
        url={'/image/section1/pt3/pt3-22.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[-0.35, 1.1, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-23.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[1.5, 1.1, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-24.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[-0.35, 0, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-25.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[-0.35, -1.1, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-26.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[1.5, -1.1, 0]}
      />
    </group>
  );
};

export default Image6;
