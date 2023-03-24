import { opacityAni } from '@/utils/animation';
import { Image, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image1 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.397 / 1, 0.015 / 1);

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
        url={'/image/section1/pt3/pt3-01.jpg'}
        scale={[1, 1.3]}
        transparent
        opacity={0}
        position={[1.6, -0.6, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-02.jpg'}
        scale={[1, 1.2]}
        transparent
        opacity={0}
        position={[0.2, -1.6, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-03.jpg'}
        scale={[1.75 * 0.8, 1 * 0.8]}
        transparent
        opacity={0}
        position={[-1.5, -1.4, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-04.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[-0.6, 0.1, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-05.jpg'}
        scale={[1.75 * 0.8, 1 * 0.8]}
        transparent
        opacity={0}
        position={[1.6, 0.9, 0]}
      />
    </group>
  );
};

export default Image1;
