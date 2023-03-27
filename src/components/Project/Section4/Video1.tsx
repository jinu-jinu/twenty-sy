import Video from '@/components/common/Video';
import { state } from '@/components/Store/store';
import { videoHandler } from '@/utils/animation';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { useSnapshot } from 'valtio/react';

const Video1 = () => {
  const scroll = useScroll();
  const video = useRef<any>();
  const { aspect } = useSnapshot(state);
  const [isPlay, setIsPlay] = useState(false);

  useFrame(() => {
    const scrollOffset = scroll.curve(0.36 / 1, 0.03 / 1);
    const isVisible = scroll.visible(0.33 / 1, 0.065 / 1);

    setIsPlay(isVisible);

    videoHandler(video.current, scrollOffset);
  });

  return (
    <>
      <Video
        isPlay={isPlay}
        ref={video}
        url={'/video/section1/pt3/pt3-01.mp4'}
        scale={[...aspect]}
        pos={[0, 0, -5]}
      />
    </>
  );
};

export default Video1;
