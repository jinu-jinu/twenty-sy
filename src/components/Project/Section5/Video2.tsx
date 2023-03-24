import Video from '@/components/common/Video';
import { fillOpacityAni, videoHandler } from '@/utils/animation';
import { deviceOffset } from '@/utils/media';
import { Text, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Group } from 'three';

const Video2 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);
  const video1 = useRef<any>();
  const video2 = useRef<any>();
  const ymd1 = useRef<any>();
  const ymd2 = useRef<any>();
  const offset = deviceOffset();

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.45 / 1, 0.01 / 1);
    const scrollOffset2 = scroll.range(0.458 / 1, 0.01 / 1);

    group.current.children.forEach(c => {
      fillOpacityAni<Text>(c as unknown as Text, scrollOffset1);
    });

    videoHandler(video1.current, scrollOffset2);
    videoHandler(video2.current, scrollOffset2);

    fillOpacityAni(ymd1.current, scrollOffset2);
    fillOpacityAni(ymd2.current, scrollOffset2);
  });

  const texture = useTexture('./image/gradations/skintone.png');

  return (
    <group position={[0, 0, -11]}>
      <group position={[0, 0, 3]} ref={group}>
        <Text
          anchorX={0.1}
          font="./font/Gangwon.ttf"
          position={[0, 0.05, 0]}
          fontSize={0.04}
          letterSpacing={0.02}
          fillOpacity={0}
        >
          September 19, 2022
          <meshStandardMaterial map={texture} />
        </Text>
        <Text
          anchorX={0.3}
          font="./font/Prompt.ttf"
          fontSize={0.07}
          position={[0, -0.05, 0]}
          letterSpacing={0.02}
          fillOpacity={0}
        >
          NMIXX IS BACK
          <meshStandardMaterial map={texture} />
        </Text>
      </group>

      <group position={[-0.2 + -offset * 2, 0.7, 0]}>
        <Video
          ref={video1}
          url={'/video/section1/pt4/pt4-02.mp4'}
          scale={[1.5 * 1.2, 1 * 1.2, 1]}
          pos={[0, 0, 0]}
        />
        <Text
          fillOpacity={0}
          ref={ymd1}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          position={[0, -0.65, 0.05]}
          color="#ff6932"
          letterSpacing={0.2}
        >
          '22 09 19 "The 2nd Single ENTWURF"
        </Text>
      </group>

      <group position={[0.2 + offset * 2, -0.7, 0]}>
        <Video
          ref={video2}
          url={'/video/section1/pt4/pt4-03.mp4'}
          scale={[1.5 * 1.2, 1 * 1.2, 1]}
          pos={[0, 0, 0]}
        />
        <Text
          fillOpacity={0}
          ref={ymd2}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          position={[0, -0.63, 0.05]}
          color="#ff6932"
          letterSpacing={0.2}
        >
          '22 10 21 "DICE"
        </Text>
      </group>
    </group>
  );
};

export default Video2;
