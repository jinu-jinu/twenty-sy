import Video from '@/components/common/Video';
import { fillOpacityAni, videoHandler } from '@/utils/animation';
import { deviceOffset } from '@/utils/media';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

const Video3 = () => {
  const scroll = useScroll();
  const video1 = useRef<any>();
  const video2 = useRef<any>();
  const ymd1 = useRef<any>();
  const ymd2 = useRef<any>();
  const offset = deviceOffset();

  useFrame(() => {
    const scrollOffset2 = scroll.range(0.478 / 1, 0.01 / 1);

    videoHandler(video1.current, scrollOffset2);
    fillOpacityAni(ymd1.current, scrollOffset2);

    videoHandler(video2.current, scrollOffset2);
    fillOpacityAni(ymd2.current, scrollOffset2);
  });

  return (
    <group>
      <group position={[0.2 + offset * 2, 0.7, 0]}>
        <Video
          ref={video1}
          url={'/video/section1/pt4/pt4-04.mp4'}
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
          '22 09 28 "가요프로 첫 MC"
        </Text>
      </group>

      <group position={[-0.2 + -offset * 2, -0.7, 0]}>
        <Video
          ref={video2}
          url={'/video/section1/pt4/pt4-05.mp4'}
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
          '22 Fall "설윤아 엔젤"
        </Text>
      </group>
    </group>
  );
};

export default Video3;
