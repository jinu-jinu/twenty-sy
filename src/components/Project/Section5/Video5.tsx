import Video from '@/components/common/Video';
import { videoHandler } from '@/utils/animation';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

const Video5 = () => {
  const scroll = useScroll();
  const video1 = useRef<any>();
  const video2 = useRef<any>();

  useFrame(() => {
    const scrollOffset = scroll.range(0.533 / 1, 0.01 / 1);

    videoHandler(video1.current, scrollOffset);
    videoHandler(video2.current, scrollOffset);
  });

  return (
    <group>
      <Video
        ref={video1}
        url={'/video/section1/pt4/pt4-06.mp4'}
        scale={[1.5 * 1.3, 1 * 1.3, 1]}
        pos={[1.05, 1.6, 0]}
      />
      <Video
        ref={video2}
        url={'/video/section1/pt4/pt4-07.mp4'}
        scale={[1.5 * 1.3, 1 * 1.3, 1]}
        pos={[-1.05, -1.6, 0]}
      />
    </group>
  );
};

export default Video5;
