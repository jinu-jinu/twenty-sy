import { opacityAni } from '@/utils/animation';
import { Image, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image4 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.49 / 1, 0.01 / 1);

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
        url={'/image/section1/pt3/pt3-12.jpg'}
        scale={[1.75 * 0.9, 1 * 0.9]}
        transparent
        opacity={0}
        position={[0.7, 0.8, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-13.jpg'}
        scale={[1.75 * 0.8, 1 * 0.8]}
        transparent
        opacity={0}
        position={[-0.4, -0.6, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-14.jpg'}
        scale={[1.75 * 0.8, 1 * 0.8]}
        transparent
        opacity={0}
        position={[-1, 0.9, -0.5]}
      />
    </group>
  );
};

export default Image4;
