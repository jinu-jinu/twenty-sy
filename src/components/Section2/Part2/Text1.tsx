import Video from '@/components/common/Video';
import { videoHandler } from '@/utils/animation';
import { Image, Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import gsap from 'gsap';

const Text1 = () => {
  const scroll = useScroll();
  const text1 = useRef<any>();
  const text2 = useRef<any>();
  const img = useRef<any>();
  const video = useRef<any>();

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.755 / 1, 0.01 / 1);
    const scrollOffset2 = scroll.range(0.775 / 1, 0.01 / 1);
    const scrollOffset3 = scroll.range(0.78 / 1, 0.01 / 1);

    const visible1 = scroll.visible(0.765 / 1, 1);

    gsap.to(text1.current, {
      duration: 1,
      fillOpacity: 0 + scrollOffset1,
    });
    gsap.to(text1.current.rotation, {
      duration: 1,
      y: Math.PI * (0.5 - scrollOffset1 * 0.3),
    });

    gsap.to(img.current.material, {
      opacity: visible1 ? 1 : 0,
      duration: 1,
    });
    gsap.to(img.current.position, {
      y: visible1 ? 0.6 : 0,
      duration: 1,
    });

    gsap.to(text2.current, {
      duration: 1,
      fillOpacity: 0 + scrollOffset2,
    });
    gsap.to(text2.current.rotation, {
      duration: 1,
      y: Math.PI * (-0.5 + scrollOffset2 * 0.4),
    });

    videoHandler(video.current, scrollOffset3);
  });

  return (
    <group>
      <Text
        fillOpacity={0}
        font="./font/Gangwon.ttf"
        color={'#fff'}
        position={[0.1, 0, 6]}
        rotation={[0, Math.PI * 0.5, 0]}
        ref={text1}
        fontSize={0.5}
      >
        토끼처럼
      </Text>
      <Image
        url={`/image/section2/part2/rabbit.webp`}
        transparent
        opacity={0}
        position={[-0.2, 0, 5.9]}
        rotation={[0, Math.PI * 0.1, 0]}
        scale={0.8}
        ref={img}
      />
      <Text
        fillOpacity={0}
        font="./font/Gangwon.ttf"
        color={'#fff'}
        position={[-0.04, -0.1, 2.5]}
        rotation={[0, -Math.PI * 0.5, 0]}
        ref={text2}
        fontSize={0.2}
      >
        귀엽고
      </Text>
      <Video
        ref={video}
        pos={[0, 0.2, 2]}
        scale={[1.5 / 2, 1 / 2, 1]}
        url={'/image/section2/part2/rabbit.mp4'}
      />
    </group>
  );
};

export default Text1;
