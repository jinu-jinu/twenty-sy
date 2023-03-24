import { opacityAni } from '@/utils/animation';
import { Image, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image3 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.315 / 1, 0.01 / 1);

    if (group.current)
      group.current.children.forEach(c => {
        const material = (c as Mesh).material;
        opacityAni(material, scrollOffset);
      });
  });

  return (
    <group scale={0.7} ref={group}>
      <Image
        url={'/image/section1/pt2/pt2-16.jpg'}
        scale={[1.5, 1]}
        transparent
        opacity={0}
        position={[2.7, 0, -0.5]}
      />
      <Image
        url={'/image/section1/pt2/pt2-14.jpg'}
        scale={[1.5, 1]}
        transparent
        opacity={0}
        position={[-1.5, -2.2, -1]}
      />
      <Image
        url={'/image/section1/pt2/pt2-15.jpg'}
        scale={[1.5, 1]}
        transparent
        opacity={0}
        position={[-2.5, 1.3, 0]}
      />
    </group>
  );
};

export default Image3;
