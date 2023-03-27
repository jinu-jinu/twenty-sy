import { opacityAni } from '@/utils/animation';
import { Image, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image5 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.524 / 1, 0.001 / 1);

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
        scale={[1, 1]}
        transparent
        opacity={0}
        position={[-1.4, 1.4, -1]}
      />
      <Image
        url={'/image/section1/pt3/pt3-17.jpg'}
        scale={[1.6, 1]}
        transparent
        opacity={0}
        position={[1.5, 0.4, -0.2]}
      />
      <Image
        url={'/image/section1/pt3/pt3-19.jpg'}
        scale={[1.1 * 0.9, 1 * 0.9]}
        transparent
        opacity={0}
        position={[-1.6, -0.7, -0.5]}
      />
    </group>
  );
};

export default Image5;
