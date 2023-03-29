import { ASPECT, GANGWON_B } from '@/components/common/constant';
import Video from '@/components/common/Video';
import { useVideos } from '@/components/Store/useVideo';
import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Video1 = forwardRef((_, ref: ForwardedRef<any>) => {
  const { video1 } = useVideos;

  return (
    <group ref={ref}>
      <Video elem={video1!} pos={[0, 0.2, 0]} scale={[1.5 * ASPECT, 1 * ASPECT, 1]} />
      <Text
        fillOpacity={0}
        font={GANGWON_B}
        fontSize={0.04}
        position={[0, -0.44, 0.05]}
        color="#ff6932"
        letterSpacing={0.2}
      >
        '21 09 03 "Full moon"
      </Text>
    </group>
  );
});

export default Video1;
