import { opacityAni } from '@/utils/animation';
import { Image, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image2 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.316 / 1, 0.002 / 1);

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
        url={'/image/section1/pt3/pt3-06.jpg'}
        scale={[1, 1.25]}
        transparent
        opacity={0}
        position={[0.6, 1.3, -0.5]}
      />
      <Image
        url={'/image/section1/pt3/pt3-07.jpg'}
        scale={[1, 1]}
        transparent
        opacity={0}
        position={[-0.7, 1.6, 0]}
        rotation={[0, 0, Math.PI * 0.1]}
      />
      <Image
        url={'/image/section1/pt3/pt3-08.jpg'}
        scale={[1, 1.25]}
        transparent
        opacity={0}
        position={[1.8, 0.4, -0.2]}
        rotation={[0, 0, Math.PI * -0.1]}
      />
    </group>
  );
};

export default Image2;
