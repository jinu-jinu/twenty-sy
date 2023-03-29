import Video from '@/components/common/Video';
import { state } from '@/components/Store/store';
import { useSnapshot } from 'valtio/react';
import { ForwardedRef, forwardRef } from 'react';
import { useVideos } from '@/components/Store/useVideo';

const Video1 = forwardRef((_, ref: ForwardedRef<any>) => {
  const { aspect } = useSnapshot(state);
  const { video2 } = useVideos;

  return (
    <Video ref={ref} elem={video2} opacity={0} scale={[...aspect]} pos={[0, 0, -5]} />
  );
});

export default Video1;
