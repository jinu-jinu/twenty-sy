import Video from '@/components/common/Video';
import { fillOpacityAni, videoHandler } from '@/utils/animation';
import { deviceOffset } from '@/utils/media';
import { Text, useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Group } from 'three';
import gsap from 'gsap';

const Video2 = () => {
  const offset = deviceOffset();
  const scroll = useScroll();
  const text = useRef<any>();
  const video1 = useRef<any>();
  const video2 = useRef<any>();
  const ymd1 = useRef<any>();
  const ymd2 = useRef<any>();
  const trophyRef = useRef<any>();
  const trophy = useGLTF('/model/trophy.glb');

  useFrame((state, delta) => {
    const scrollOffset1 = scroll.range(0.602 / 1, 0.01 / 1);
    const scrollOffset = scroll.range(0.609 / 1, 0.01 / 1);
    const visible = scroll.visible(0.609 / 1, 0.021 / 1);

    fillOpacityAni(text.current, scrollOffset1);

    videoHandler(video1.current, scrollOffset);
    fillOpacityAni(ymd1.current, scrollOffset);

    videoHandler(video2.current, scrollOffset);
    fillOpacityAni(ymd2.current, scrollOffset);

    gsap.to(trophyRef.current.scale, {
      x: visible ? 0.3 : 0,
      y: visible ? 0.3 : 0,
      z: visible ? 0.3 : 0,
      duration: 1,
    });
    trophyRef.current.rotation.y += delta;
  });

  return (
    <group position={[0, 0, -9]}>
      <group position={[0, 0, 2.5]}>
        <Text
          lineHeight={1.2}
          font="./font/Gangwon.ttf"
          position={[0, 0, 0]}
          fontSize={0.05}
          letterSpacing={0.02}
          fillOpacity={0}
          maxWidth={0.6}
          ref={text}
        >
          "I was really happy that NMIXX won the award. Next year, let's go for the Triple
          Crown!"
        </Text>

        <mesh
          scale={0}
          position={[0.2, -0.2, -0.5]}
          rotation={[0, 0, Math.PI * -0.1]}
          ref={trophyRef}
        >
          <primitive object={trophy.scene} />
        </mesh>
      </group>

      <group position={[-0.2 + -offset * 2, 0.6, 0]}>
        <Video ref={video1} url={'/video/section1/pt5/pt5-02.mp4'} scale={[1.5, 1, 1]} />
        <Text
          fillOpacity={0}
          ref={ymd1}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          position={[0, -0.55, 0]}
          color="#ff6932"
          letterSpacing={0.2}
        >
          '22 11 29 "설또귀"
        </Text>
      </group>

      <group position={[0.2 + offset * 2, -0.6, 0]}>
        <Video ref={video2} url={'/video/section1/pt5/pt5-03.mp4'} scale={[1.5, 1, 1]} />
        <Text
          fillOpacity={0}
          ref={ymd2}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          position={[0, -0.55, 0]}
          color="#ff6932"
          letterSpacing={0.2}
        >
          '22 11 29 "2022 MAMA AWARDS"
        </Text>
      </group>
    </group>
  );
};

export default Video2;

useGLTF.preload('/model/trophy.glb');
