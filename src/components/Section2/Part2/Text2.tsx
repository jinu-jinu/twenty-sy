import { Image, Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import gsap from 'gsap';

const Text2 = () => {
  const scroll = useScroll();
  const text1 = useRef<any>();
  const text2 = useRef<any>();
  const img1 = useRef<any>();
  const img2 = useRef<any>();

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.815 / 1, 0.01 / 1);
    const scrollOffset2 = scroll.range(0.82 / 1, 0.01 / 1);

    const visible = scroll.visible(0.822 / 1, 1);
    const visible2 = scroll.visible(0.824 / 1, 1);

    gsap.to(text1.current, {
      duration: 1,
      fillOpacity: 0 + scrollOffset1,
    });
    gsap.to(text1.current.rotation, {
      duration: 1,
      z: Math.PI * (0.5 - scrollOffset1 * 0.5),
    });

    gsap.to(img1.current.material, {
      opacity: visible ? 1 : 0,
      duration: 1,
    });
    gsap.to(img1.current.position, {
      y: visible ? 0.4 : -0.4,
      duration: 1,
    });

    gsap.to(img2.current.material, {
      opacity: visible2 ? 1 : 0,
      duration: 1,
      delay: 0.3,
    });
    gsap.to(img2.current.position, {
      y: visible2 ? -0.45 : 0.45,
      duration: 1,
      delay: 0.3,
    });

    gsap.to(text2.current, {
      duration: 1,
      fillOpacity: 0 + scrollOffset2,
    });
    gsap.to(text2.current.rotation, {
      duration: 1,
      z: Math.PI * (-0.5 + scrollOffset2 * 0.5),
    });
  });

  return (
    <>
      <Text
        fillOpacity={0}
        font="./font/Gangwon.ttf"
        color={'#fff'}
        position={[0.05, 0.1, 4]}
        rotation={[0, Math.PI * 0.1, Math.PI * 0.5]}
        ref={text1}
        fontSize={0.2}
      >
        사슴처럼
      </Text>
      <Image
        url={`/image/section2/part2/deer1.webp`}
        transparent
        opacity={0}
        position={[-0.05, -0.4, 3.5]}
        scale={0.5}
        ref={img1}
      />
      <Text
        fillOpacity={0}
        font="./font/Gangwon.ttf"
        color={'#fff'}
        position={[0, -0.1, 2.4]}
        rotation={[0, Math.PI * -0.1, Math.PI * -0.5]}
        ref={text2}
        fontSize={0.2}
      >
        예쁜
      </Text>
      <Image
        url={`/image/section2/part2/deer2.webp`}
        transparent
        opacity={0}
        position={[0.1, 0.45, 2]}
        rotation={[0, 0, Math.PI * 0.1]}
        scale={0.6}
        ref={img2}
      />
    </>
  );
};

export default Text2;
