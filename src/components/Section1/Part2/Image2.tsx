import { opacityAni, posYAni } from '@/utils/animation';
import { Image, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image2 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.195 / 1, 0.01 / 1);

    if (group.current) {
      posYAni(group.current, scrollOffset ? 0 : 1, 3);

      group.current.children.forEach(c => {
        const material = (c as Mesh).material;
        opacityAni(material, scrollOffset, 3);
      });
    }
  });

  return (
    <group ref={group} position={[0, 1, 0]}>
      <Image
        url={'/image/section1/pt2/pt2-08.jpg'}
        scale={[1.8, 1.8]}
        transparent
        opacity={0}
        position={[-1.9, 1.1, 0]}
      />
      <Image
        url={'/image/section1/pt2/pt2-09.jpg'}
        scale={[1.8, 1]}
        transparent
        opacity={0}
      />
      <Image
        url={'/image/section1/pt2/pt2-10.jpg'}
        scale={[1.8, 1]}
        transparent
        opacity={0}
        position={[0, 1.1, 0]}
      />
      <Image
        url={'/image/section1/pt2/pt2-11.jpg'}
        scale={[1.8, 1]}
        transparent
        opacity={0}
        position={[1.9, 0.1, 0]}
      />
      <Image
        url={'/image/section1/pt2/pt2-12.jpg'}
        scale={[1.8, 1]}
        transparent
        opacity={0}
        position={[-1.9, -0.4, 0]}
      />
      <Image
        url={'/image/section1/pt2/pt2-13.jpg'}
        scale={[1.8, 1]}
        transparent
        opacity={0}
        position={[0, -1.1, 0]}
      />
    </group>
  );
};

export default Image2;
