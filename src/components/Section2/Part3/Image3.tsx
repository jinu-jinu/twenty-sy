import { Image, useScroll } from '@react-three/drei';
import { useRef, useState } from 'react';
import { Group, Mesh } from 'three';
import { opacityAni } from '@/utils/animation';
import { useFrame } from '@react-three/fiber';

const Image3 = () => {
  const scroll = useScroll();
  const [trigger, setTrigger] = useState(true);
  const group = useRef<Group>(null!);
  const positions: [number, number, number][] = [
    [1, 1.7, 0],
    [-2.5, -1.5, 0],
    [-5.5, 0, 0],
    [-1.5, 1.1, 0],
    [0.5, -1.2, 0],
    [3, -0.5, 0],
    [5, -2, 0],
    [5, 2, 0],
    [-5, 2, 0],
    [-5, -2, 0],
    [6, 0, 0],
    [-3, 2.7, 0],
    [2.7, -2.7, 0],
    [-7, -2.7, 0],
    [3, 2.7, 0],
    [6.8, 2.9, 0],
    [-6.8, 2.9, 0],
  ];
  const scales: [number, number][] = [
    [1.2, 1.5],
    [1.2, 1.5],
    [1, 1],
    [1.5, 1],
    [1, 1.25],
    [1, 1],
    [1, 1],
    [1, 1.3],
    [1, 1.3],
    [1.3, 1.5],
    [1.3, 1.6],
    [1.3, 1.5],
    [1.4, 1.4],
    [1.2, 1.5],
    [1.7, 1.2],
    [1.2, 1.2],
    [1.5, 1.2],
  ];

  const imageInfos = Array.from({ length: 17 }, (_, i) => {
    const url = i + 1 < 10 ? `ed-0${i + 1}` : `ed-${i + 1}`;
    return { position: positions[i], scale: scales[i], url };
  });

  const ImageGenerator = (
    url: string,
    [pX, pY, pZ]: [number, number, number],
    [sX, sY]: [number, number]
  ) => {
    return (
      <Image
        key={url}
        url={`/image/section2/part3/ed/${url}.webp`}
        transparent
        opacity={0}
        position={[pX, pY, pZ]}
        scale={[sX, sY]}
      />
    );
  };

  useFrame(() => {
    const visible = scroll.visible(0.97 / 1, 1);

    if (!visible) {
      group.current.children.forEach(child => {
        const material = (child as Mesh).material;
        opacityAni(material, 0, 1);
      });
      setTrigger(true);
    }

    if (trigger && visible) {
      setTrigger(false);

      group.current.children.forEach((child, i) => {
        const material = (child as Mesh).material;
        setTimeout(() => {
          opacityAni(material, 1, 3);
        }, 500 + 500 * i);
      });
    }
  });

  return (
    <group ref={group}>
      {imageInfos.map(({ position, scale, url }) => ImageGenerator(url, position, scale))}
    </group>
  );
};

export default Image3;
