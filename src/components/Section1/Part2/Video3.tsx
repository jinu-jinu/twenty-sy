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
  const ymd1 = useRef<any>();
  const ymd2 = useRef<any>();

  useFrame(() => {
    const scrollOffset = scroll.range(0.196 / 1, 0.01 / 1);

    if (video1.current) videoHandler(video1.current, scrollOffset);
    if (ymd1.current) fillOpacityAni(ymd1.current, scrollOffset);

    if (video2.current) videoHandler(video2.current, scrollOffset);
    if (ymd2.current) fillOpacityAni(ymd2.current, scrollOffset);
  });

  return (
    <group>
      <group position={[offset * 2, 0.7, 0.3]}>
        <Video
          ref={video1}
          url={'/video/section1/pt2/pt2-06.mp4'}
          scale={[1.5 * 1.2, 1 * 1.2, 1]}
          pos={[0.1, 0, 0]}
        />
        <Text
          fillOpacity={0}
          ref={ymd1}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          position={[0.1, -0.65, 0.05]}
          color="#ff6932"
          letterSpacing={0.2}
        >
          '22 03 03 "Debut stage"
        </Text>
      </group>

      <group position={[-offset * 2, -0.7, -0.3]}>
        <Video
          ref={video2}
          url={'/video/section1/pt2/pt2-05.mp4'}
          scale={[1.5 * 1.2, 1 * 1.2, 1]}
          pos={[-0.2, 0, 0]}
        />
        <Text
          fillOpacity={0}
          ref={ymd2}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          position={[-0.2, -0.63, 0.05]}
          color="#ff6932"
          letterSpacing={0.2}
        >
          '22 03 01 "Tank"
        </Text>
      </group>
    </group>
  );
};

export default Video3;
