import Video from '@/components/common/Video';
import { fillOpacityAni, videoHandler } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

const Video2 = () => {
  const scroll = useScroll();
  const video = useRef<any>();
  const ymd = useRef<any>();
  const [isPlay, setIsPlay] = useState(false);

  useFrame(() => {
    const scrollOffset = scroll.range(0.318 / 1, 0.01 / 1);
    const isVisible = scroll.visible(0.28 / 1, 0.065 / 1);

    setIsPlay(isVisible);

    if (video.current) videoHandler(video.current, scrollOffset);
    if (ymd.current) fillOpacityAni(ymd.current, scrollOffset);
  });

  return (
    <>
      <group>
        <Video
          isPlay={isPlay}
          ref={video}
          url={'/video/section1/pt2/pt2-02.mp4'}
          scale={[1.5 * 1.2, 1 * 1.2, 1]}
        />
        <Text
          fillOpacity={0}
          ref={ymd}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          color="#ff6932"
          letterSpacing={0.2}
          position={[0, -0.65, 0]}
        >
          '22 03 04 "O.O"
        </Text>
      </group>
    </>
  );
};

export default Video2;
