import { state } from '@/components/Store/store';
import { useSnapshot } from 'valtio/react';

const Video1 = () => {
  const { aspect } = useSnapshot(state);

  return (
    <>
      {/* <Video
        elem={}
        ref={video}
        scale={[...aspect]}
        pos={[0, 0, -5]}
      /> */}
    </>
  );
};

export default Video1;
