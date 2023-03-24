import { opacityAni, posXAni } from '@/utils/animation';
import { Image, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image1 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.245 / 1, 0.01 / 1);

    if (group.current) {
      posXAni(group.current, scrollOffset ? 0 : -1, 3);

      group.current.children.forEach(c => {
        const material = (c as Mesh).material;
        opacityAni(material, scrollOffset, 3);
      });
    }
  });

  return (
    <group>
      <group ref={group} position={[-1, 0, 0]}>
        <Image
          url={'/image/section1/pt2/pt2-01.jpg'}
          scale={[1.7, 1]}
          transparent
          opacity={0}
          position={[0, 0, 0]}
        />
        <Image
          url={'/image/section1/pt2/pt2-02.jpg'}
          scale={[1.7, 1]}
          transparent
          opacity={0}
          position={[-1.9, 0, 0]}
        />
        <Image
          url={'/image/section1/pt2/pt2-03.jpg'}
          scale={[1.7, 1]}
          transparent
          opacity={0}
          position={[-1.9, -1.2, 0]}
        />
        <Image
          url={'/image/section1/pt2/pt2-06.jpg'}
          scale={[1.7, 1]}
          transparent
          opacity={0}
          position={[0, 1.2, 0]}
        />
        <Image
          url={'/image/section1/pt2/pt2-07.jpg'}
          scale={[1.7, 1]}
          transparent
          opacity={0}
          position={[1.9, 1.2, 0]}
        />
        <Image
          url={'/image/section1/pt2/pt2-04.jpg'}
          scale={[1.7, 1]}
          transparent
          opacity={0}
          position={[1.9, 0, 0]}
        />
        <Image
          url={'/image/section1/pt2/pt2-05.jpg'}
          scale={[1.7, 1]}
          transparent
          opacity={0}
          position={[0, -1.2, 0]}
        />
      </group>
    </group>
  );
};

export default Image1;
