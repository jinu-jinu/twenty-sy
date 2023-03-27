import { opacityAni, posYAni } from '@/utils/animation';
import { Image, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image2 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.28 / 1, 0.01 / 1);

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
        scale={[1.5, 1]}
        transparent
        opacity={0}
        position={[-2, 0.2, -0.5]}
      />
      <Image
        url={'/image/section1/pt2/pt2-11.jpg'}
        scale={[1.2, 1]}
        transparent
        opacity={0}
        position={[0, 0, -1]}
      />
      <Image
        url={'/image/section1/pt2/pt2-10.jpg'}
        scale={[1, 1]}
        transparent
        opacity={0}
        position={[0.2, 1.4, -0.2]}
      />
      <Image
        url={'/image/section1/pt2/pt2-09.jpg'}
        scale={[1.7, 1]}
        transparent
        opacity={0}
        position={[2.4, -0.2, -1]}
      />
      <Image
        url={'/image/section1/pt2/pt2-13.jpg'}
        scale={[1.3, 1]}
        transparent
        opacity={0}
        position={[-0.2, -1.5, -0.5]}
      />
    </group>
  );
};

export default Image2;
