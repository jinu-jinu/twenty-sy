import Video from '@/components/common/Video';
import { fillOpacityAni, videoHandler } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

const Video4 = () => {
  const scroll = useScroll();
  const video = useRef<any>();
  const ymd = useRef<any>();

  useFrame(() => {
    const scrollOffset = scroll.range(0.655 / 1, 0.01 / 1);

    videoHandler(video.current, scrollOffset);
    fillOpacityAni(ymd.current, scrollOffset);
  });

  return (
    <group>
      <Video ref={video} url={'/video/section1/pt5/pt5-08.mp4'} scale={[1.5, 1, 1]} />
      <Text
        fillOpacity={1}
        ref={ymd}
        font="./font/Gangwon.ttf"
        fontSize={0.04}
        position={[0, -0.55, 0]}
        color="#ff6932"
        letterSpacing={0.2}
      >
        '22 12 "Year-end special performance"
      </Text>
    </group>
  );
};

export default Video4;
