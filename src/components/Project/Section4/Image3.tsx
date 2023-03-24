import { opacityAni } from '@/utils/animation';
import { Image, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image3 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.458 / 1, 0.015 / 1);

    if (group.current) {
      group.current.children.forEach(c => {
        const material = (c as Mesh).material;
        opacityAni(material, scrollOffset, 3);
      });
    }
  });

  return (
    <group ref={group} scale={0.5}>
      <Image
        url={'/image/section1/pt3/pt3-09.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[-0.2, -0.55, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-10.jpg'}
        scale={[1, 1.25]}
        transparent
        opacity={0}
        position={[0.9, 0.7, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-11.jpg'}
        scale={[1.4 * 0.8, 1 * 0.8]}
        transparent
        opacity={0}
        position={[-0.4, 0.8, -0.5]}
      />
    </group>
  );
};

export default Image3;
