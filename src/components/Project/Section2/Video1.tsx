import { ASPECT } from '@/components/common/constant';
import Video from '@/components/common/Video';
import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Video1 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref}>
      <Video
        isPlay={true}
        pos={[0, 0.2, 0]}
        url={'/video/section1/pt1/pt1-01.mp4'}
        scale={[1.5 * ASPECT, 1 * ASPECT, 1]}
      />
      <Text
        fillOpacity={0}
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
});

export default Video1;
