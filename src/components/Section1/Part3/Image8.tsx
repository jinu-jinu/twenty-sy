import { opacityAni } from '@/utils/animation';
import { Image, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Image8 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.387 / 1, 0.01 / 1);

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
        url={'/image/section1/pt3/pt3-32.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={1}
        position={[-1, 1.3, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-34.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={1}
        position={[1, 1.3, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-35.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={1}
        position={[-1, 0, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-36.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={1}
        position={[1, 0, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-37.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={1}
        position={[-1, -1.3, 0]}
      />
      <Image
        url={'/image/section1/pt3/pt3-38.jpg'}
        scale={[1.75, 1]}
        transparent
        opacity={1}
        position={[1, -1.3, 0]}
      />
    </group>
  );
};

export default Image8;
