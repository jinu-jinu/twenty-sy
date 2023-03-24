import { deviceOffset } from '@/utils/media';
import { Image, Text } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import { Mesh } from 'three';
import { fillOpacityAni, opacityAni } from '@/utils/animation';

const Section1 = () => {
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
    <group position={[0, 0, -5]}>
      <group ref={texts} scale={1 + offset * 3}>
        <Text
          font={'/font/Prompt.ttf'}
          fillOpacity={0}
          position={[0, 0.15, 0]}
          letterSpacing={0.04}
          fontSize={0.4}
        >
          THE MOMENTS
        </Text>
        <Text
          font={'/font/NotoSansKR.otf'}
          fillOpacity={0}
          position={[0, -0.2, 0]}
          letterSpacing={0.02}
          fontSize={0.15}
          color={'#fff'}
        >
          함께라 더 빛났던 순간
        </Text>
      </group>

      <group ref={images}>
        <Image
          transparent
          opacity={0}
          url={`/image/section1/pt0/pt0-01.webp`}
          scale={[1.3, 1.3]}
          position={[-3.5, 2.2, 0]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/pt0/pt0-02.webp`}
          scale={[1 * 1.3, 1.25 * 1.3]}
          position={[4, -3.2, -1]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/pt0/pt0-03.webp`}
          scale={[1.5 * 1.3, 1 * 1.3]}
          position={[-0.3, 1.5, -0.5]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/pt0/pt0-04.webp`}
          scale={[1 * 1.2, 1.25 * 1.2]}
          position={[0.5, -1.5, 0]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/pt0/pt0-05.webp`}
          scale={[1 * 1.4, 1.5 * 1.4]}
          position={[3.5, 3, -1.5]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/pt0/pt0-06.webp`}
          scale={[1, 1.25]}
          position={[-6, 2.6, 0.5]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/pt0/pt0-07.webp`}
          scale={[1 * 1.4, 1.25 * 1.4]}
          position={[-7, 0.2, -1]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/pt0/pt0-08.webp`}
          scale={[1 * 1.5, 1.25 * 1.5]}
          position={[-4, -3, -2]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/pt0/pt0-09.webp`}
          scale={[1 * 1.3, 1.25 * 1.3]}
          position={[-6.8, -2.8, -0.5]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/pt0/pt0-10.webp`}
          scale={[1 * 1.4, 1.25 * 1.4]}
          position={[7, -2.5, -0.5]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/pt0/pt0-11.webp`}
          scale={[1, 1.25]}
          position={[5, -1.2, -1.5]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/pt0/pt0-12.webp`}
          scale={[1 * 1.3, 1.25 * 1.3]}
          position={[7.8, 3.3, -1]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/pt0/pt0-13.webp`}
          scale={[1 * 1.2, 1.25 * 1.2]}
          position={[5.3, 1, -0.5]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/pt0/pt0-14.jpg`}
          scale={[1, 1.25]}
          position={[-4.5, 0, -1.5]}
        />
      </group>
    </group>
  );
};

export default Section1;
