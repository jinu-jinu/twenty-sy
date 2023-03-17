import { ASPECT } from '@/components/common/constant';
import Video from '@/components/common/Video';
import { fillOpacityAni, videoHandler } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Video3 = () => {
  const scroll = useScroll();
  const text = useRef<any>();
  const video = useRef<any>();
  const ymd = useRef<any>();

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.082 / 1, 0.01 / 1);
    const scrollOffset2 = scroll.range(0.087 / 1, 0.01 / 1);

    if (text.current) fillOpacityAni(text.current, scrollOffset1);
    if (video.current) videoHandler(video.current, scrollOffset2);
    if (ymd.current) fillOpacityAni(ymd.current, scrollOffset2);
  });

  return (
    <group position={[0, 0, -15]}>
      <Text
        anchorX={0.33}
        font="./font/Gangwon.ttf"
        fontSize={0.05}
        position={[0, -0.3, 2.5]}
        letterSpacing={0.05}
        fillOpacity={0}
        ref={text}
        lineHeight={1.2}
        maxWidth={0.7}
      >
        Dancing and singing in front of the camera, you were cool and beautiful!
      </Text>

      <Video
        ref={video}
        pos={[0, 0.2, 0]}
        url={'/video/section1/pt1/pt1-01.mp4'}
        scale={[1.5 * ASPECT, 1 * ASPECT, 1]}
      />
      <Text
        fillOpacity={0}
        ref={ymd}
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
};

export default Video3;
