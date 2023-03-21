import { deviceOffset } from '@/utils/media';
import { Image, Text } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import { Mesh } from 'three';
import { fillOpacityAni, opacityAni } from '@/utils/animation';

const Part0 = () => {
  const offset = deviceOffset();
  const texts = useRef<any>();
  const images = useRef<any>();

  useLayoutEffect(() => {
    if (texts.current)
      texts.current.children.forEach((child: Text, i: number) => {
        fillOpacityAni(child, 2);
      });

    if (images.current)
      images.current.children.forEach((child: Mesh, i: number) => {
        opacityAni(child.material, 1, 5);
      });
  }, []);

  return (
    <>
      <group scale={1 + offset} position={[0, 0, -5]}>
        <group ref={texts}>
          <Text
            font={'/font/Prompt.ttf'}
            fillOpacity={0}
            position={[0, 0.15, 0]}
            fontSize={0.4}
          >
            THE MOMENTS
          </Text>
          <Text
            font={'/font/Prompt.ttf'}
            fillOpacity={0}
            position={[0, -0.15, 0]}
            fontSize={0.15}
          >
            2021#2022
          </Text>
        </group>

        <group ref={images}>
          <Image
            transparent
            opacity={0}
            url={`/image/section1/pt0/pt0-01.webp`}
            scale={[1 * 0.8, 1 * 0.8]}
            position={[-0.5, 1.4, 1.5]}
          />
          <Image
            transparent
            opacity={0}
            url={`/image/section1/pt0/pt0-02.webp`}
            scale={[1 * 1.1, 1.3 * 1.1]}
            position={[0.9, 1.3, 0]}
          />
          <Image
            transparent
            opacity={0}
            url={`/image/section1/pt0/pt0-03.webp`}
            scale={[1.4 * 2.5, 1 * 2.5]}
            position={[-1.7, 0.3, -2]}
          />
          <Image
            transparent
            opacity={0}
            url={`/image/section1/pt0/pt0-04.webp`}
            scale={[1 * 1.8, 1.3 * 1.8]}
            position={[1.4, -1.3, -1]}
          />
          <Image
            transparent
            opacity={0}
            url={`/image/section1/pt0/pt0-05.webp`}
            scale={[1 * 1.2, 1.3 * 1.2]}
            position={[-0.6, -1.5, 1]}
          />
        </group>
      </group>
    </>
  );
};

export default Part0;
