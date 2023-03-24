import Video from '@/components/common/Video';
import { fillOpacityAni, videoHandler } from '@/utils/animation';
import { deviceOffset } from '@/utils/media';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

const Video3 = () => {
  const scroll = useScroll();
  const video2 = useRef<any>();
  const video3 = useRef<any>();
  const ymd2 = useRef<any>();
  const ymd3 = useRef<any>();
  const offset = deviceOffset();

  useFrame(() => {
    const scrollOffset = scroll.range(0.629 / 1, 0.01 / 1);

    videoHandler(video2.current, scrollOffset);
    fillOpacityAni(ymd2.current, scrollOffset);

    videoHandler(video3.current, scrollOffset);
    fillOpacityAni(ymd3.current, scrollOffset);
  });

  return (
    <>
      <group position={[0.2 + offset * 2, 0.6, 0]}>
        <Video ref={video2} url={'/video/section1/pt5/pt5-05.mp4'} scale={[1.5, 1, 1]} />
        <Text
          fillOpacity={0}
          ref={ymd2}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          position={[0, -0.55, 0]}
          color="#ff6932"
          letterSpacing={0.2}
        >
          '22 11 23 "Funky Glitter Christmas"
        </Text>
      </group>

      <group position={[-0.2 + -offset * 2, -0.6, 0]}>
        <Video ref={video3} url={'/video/section1/pt5/pt5-06.mp4'} scale={[1.5, 1, 1]} />
        <Text
          fillOpacity={0}
          ref={ymd3}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          position={[0, -0.55, 0]}
          color="#ff6932"
          letterSpacing={0.2}
        >
          '22 12 29 "M COUNTDOWN Hot Rookie Stage"
        </Text>
      </group>
    </>
  );
};

export default Video3;
