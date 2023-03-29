import Video from '@/components/common/Video';
import { state } from '@/components/Store/store';
import { useSnapshot } from 'valtio/react';
import { ForwardedRef, forwardRef } from 'react';

const Video1 = forwardRef((_, ref: ForwardedRef<any>) => {
  const { aspect } = useSnapshot(state);

  return (
    <Video
      ref={ref}
      opacity={0}
      isPlay={true}
      url={'/video/section1/pt2/pt2-01.mp4'}
      scale={[...aspect]}
      pos={[0, 0, -5]}
    />
  );
});

export default Video1;
