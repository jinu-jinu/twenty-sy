import { opacityAni } from '@/utils/animation';
import { Image, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image5 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.356 / 1, 0.01 / 1);

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
        url={'/image/section1/pt3/pt3-15.jpg'}
        scale={[1 * 0.8, 1 * 0.8]}
        transparent
        opacity={0}
        position={[-0.7, 1.2, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-16.jpg'}
        scale={[1.25 * 0.9, 1 * 0.9]}
        transparent
        opacity={0}
        position={[0.7, 0.7, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-17.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[-1, 0, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-18.jpg'}
        scale={[1.4, 1]}
        transparent
        opacity={0}
        position={[1, -0.5, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-19.jpg'}
        scale={[1 * 0.9, 1 * 0.9]}
        transparent
        opacity={0}
        position={[-0.4, -1.2, 0]}
      />
    </group>
  );
};

export default Image5;
