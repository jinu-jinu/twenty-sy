import Video from '@/components/common/Video';
import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const Video2 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <>
      <group ref={ref}>
        <Video
          opacity={1}
          isPlay={true}
          url={'/video/section1/pt2/pt2-02.mp4'}
          scale={[1.5 * 1.2, 1 * 1.2, 1]}
        />
        <Text
          fillOpacity={1}
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
});

export default Video2;
