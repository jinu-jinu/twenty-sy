import Video from '@/components/common/Video';
import { state } from '@/components/Store/store';
import { videoHandler } from '@/utils/animation';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useSnapshot } from 'valtio/react';

const Video1 = () => {
  const scroll = useScroll();
  const video = useRef<any>();
  const { aspect } = useSnapshot(state);

  useFrame(() => {
    const scrollOffset = scroll.range(0.255 / 1, 0.01 / 1);

    videoHandler(video.current, scrollOffset);
  });

  return (
    <>
      <Video
        ref={video}
        url={'/video/section1/pt3/pt3-01.mp4'}
        scale={[...aspect]}
        pos={[0, 0, -6]}
      />
    </>
  );
};

export default Video1;
