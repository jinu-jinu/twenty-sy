import { ASPECT } from '@/components/common/constant';
import Video from '@/components/common/Video';
import { fillOpacityAni, videoHandler } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

const Video1 = () => {
  const scroll = useScroll();
  const video = useRef<any>();
  const ymd = useRef<any>();
  const [isPlay, setIsPlay] = useState(false);

  useFrame(() => {
    const scrollOffset = scroll.range(0.135 / 1, 0.01 / 1);
    const isVisible = scroll.visible(0.1 / 1, 0.065 / 1);

    setIsPlay(isVisible);

    if (video.current) videoHandler(video.current, scrollOffset);
    if (ymd.current) fillOpacityAni(ymd.current, scrollOffset);
  });

  return (
    <group>
      <Video
        isPlay={isPlay}
        ref={video}
        pos={[0, 0.2, 0]}
        url={'/video/section1/pt1/pt1-01.mp4'}
        scale={[1.5 * ASPECT, 1 * ASPECT, 1]}
      />
      <Text
        fillOpacity={0}
        ref={ymd}
        font="./font/Gangwon.ttf"
        fontSize={0.04}
        position={[0, -0.44, 0.05]}
        color="#ff6932"
        letterSpacing={0.2}
      >
        '21 09 03 "Full moon"
      </Text>
    </group>
  );
};

export default Video1;
