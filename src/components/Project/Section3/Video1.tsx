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
    const scrollOffset = scroll.curve(0.2 / 1, 0.03 / 1);
    const isVisible = scroll.visible(0.16 / 1, 0.075 / 1);

    setIsPlay(isVisible);

    if (video.current) videoHandler(video.current, scrollOffset);
  });

  return (
    <>
      <Video
        isPlay={isPlay}
        ref={video}
        url={'/video/section1/pt2/pt2-01.mp4'}
        scale={[...aspect]}
        pos={[0, 0, -5]}
      />
    </>
  );
};

export default Video1;
