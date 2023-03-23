import { opacityAni } from '@/utils/animation';
import { Image, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image7 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.curve(0.382 / 1, 0.012 / 1);

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
        url={'/image/section1/pt3/pt3-27.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[0, 1.1, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-28.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
      />
      <Image
        url={'/image/section1/pt3/pt3-29.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={0}
        position={[0, -1.3, 0]}
      />
    </group>
  );
};

export default Image7;
