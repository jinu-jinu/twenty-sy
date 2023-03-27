import { deviceOffset } from '@/utils/media';
import { Image, Text } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import { PROMPT_B, PROMPT_R } from '@/components/common/constant';
import gsap from 'gsap';
import { Group, Mesh } from 'three';

const Section1 = () => {
  const offset = deviceOffset();
  const tl = useRef<gsap.core.Timeline>(null!);
  const [title, images] = [useRef<Group>(null!), useRef<Group>(null!)];

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    title.current.children.forEach(c => {
      tl.current.to(c, {
        fillOpacity: 1,
        duration: 1,
      });
    });

    images.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 2,
        },
        'images'
      );
    });
  }, []);

  return (
    <group position={[0, 0, -5]}>
      <group ref={title} scale={1 + offset * 3}>
        <Text
          font={PROMPT_B}
          fillOpacity={0}
          position={[0, 0.15, 0]}
          letterSpacing={0.04}
          fontSize={0.4}
        >
          THE MOMENTS
        </Text>
        <Text
          font={PROMPT_R}
          fillOpacity={0}
          position={[0, -0.1, 0]}
          letterSpacing={0.02}
          fontSize={0.12}
          color={'#fff'}
        >
          from 2021 to 2022
        </Text>
      </group>

      <group ref={images}>
        <Image
          transparent
          opacity={0}
          url={`/image/section1/s1-01.webp`}
          scale={[1.3, 1.3]}
          position={[-3.5, 2.2, 0]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/s1-02.webp`}
          scale={[1 * 1.3, 1.25 * 1.3]}
          position={[4, -3.2, -1]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/s1-03.webp`}
          scale={[1.5 * 1.3, 1 * 1.3]}
          position={[-0.3, 1.5, -0.5]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/s1-04.webp`}
          scale={[1 * 1.2, 1.25 * 1.2]}
          position={[0.5, -1.5, 0]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/s1-05.webp`}
          scale={[1 * 1.4, 1.5 * 1.4]}
          position={[3.6, 3, -1.5]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/s1-06.webp`}
          scale={[1, 1.25]}
          position={[-6, 2.6, 0.5]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/s1-07.webp`}
          scale={[1 * 1.4, 1.25 * 1.4]}
          position={[-7, 0.2, -1]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/s1-08.webp`}
          scale={[1 * 1.5, 1.25 * 1.5]}
          position={[-4, -3, -2]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/s1-09.webp`}
          scale={[1 * 1.3, 1.25 * 1.3]}
          position={[-6.8, -2.8, -0.5]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/s1-10.webp`}
          scale={[1 * 1.4, 1.25 * 1.4]}
          position={[7, -2.5, -0.5]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/s1-11.webp`}
          scale={[1, 1.25]}
          position={[5, -1.2, -1.5]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/s1-12.webp`}
          scale={[1 * 1.3, 1.25 * 1.3]}
          position={[7.8, 3.3, -1]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/s1-13.webp`}
          scale={[1 * 1.2, 1.25 * 1.2]}
          position={[5.3, 1, -0.5]}
        />
        <Image
          transparent
          opacity={0}
          url={`/image/section1/s1-14.jpg`}
          scale={[1, 1.25]}
          position={[-4.5, 0, -1.5]}
        />
      </group>
    </group>
  );
};

export default Section1;
