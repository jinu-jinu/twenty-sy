import Video from '@/components/common/Video';
import { fillOpacityAni, videoHandler } from '@/utils/animation';
import { deviceOffset } from '@/utils/media';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

const Video3 = () => {
  const offset = deviceOffset();
  const scroll = useScroll();
  const video1 = useRef<any>();
  const video2 = useRef<any>();
  const video3 = useRef<any>();
  const ymd1 = useRef<any>();
  const ymd2 = useRef<any>();
  const ymd3 = useRef<any>();

  useFrame(() => {
    const scrollOffset = scroll.range(0.308 / 1, 0.01 / 1);

    videoHandler(video1.current, scrollOffset);
    fillOpacityAni(ymd1.current, scrollOffset);

    videoHandler(video2.current, scrollOffset);
    fillOpacityAni(ymd2.current, scrollOffset);

    videoHandler(video3.current, scrollOffset);
    fillOpacityAni(ymd3.current, scrollOffset);
  });

  return (
    <>
      <group position={[offset * 2, 1.2, 0]}>
        <Video ref={video1} url={'/video/section1/pt3/pt3-06.mp4'} scale={[1.5, 1, 1]} />
        <Text
          fillOpacity={0}
          ref={ymd1}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          position={[0, -0.55, 0]}
          color="#ff6932"
          letterSpacing={0.2}
        >
          '22 07 31 "Kiss"
        </Text>
      </group>

      <group>
        <Video ref={video2} url={'/video/section1/pt3/pt3-03.mp4'} scale={[1.5, 1, 1]} />
        <Text
          fillOpacity={0}
          ref={ymd2}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          position={[0, -0.55, 0]}
          color="#ff6932"
          letterSpacing={0.2}
        >
          '22 08 "절레전래동화가족"
        </Text>
      </group>

      <group position={[offset * 2, -1.2, 0]}>
        <Video ref={video3} url={'/video/section1/pt3/pt3-02.mp4'} scale={[1.5, 1, 1]} />
        <Text
          fillOpacity={0}
          ref={ymd3}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          position={[0, -0.55, 0]}
          color="#ff6932"
          letterSpacing={0.2}
        >
          '22 07 "PICK NMIXX"
        </Text>
      </group>
    </>
  );
};

export default Video3;
