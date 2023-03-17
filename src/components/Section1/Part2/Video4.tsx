import Video from '@/components/common/Video';
import { fillOpacityAni, videoHandler } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Video4 = () => {
  const scroll = useScroll();
  const video1 = useRef<any>();
  const video2 = useRef<any>();
  const ymd1 = useRef<any>();
  const ymd2 = useRef<any>();

  useFrame(() => {
    const scrollOffset = scroll.range(0.218 / 1, 0.01 / 1);

    if (video1.current) videoHandler(video1.current, scrollOffset);
    if (ymd1.current) fillOpacityAni(ymd1.current, scrollOffset);

    if (video2.current) videoHandler(video2.current, scrollOffset);
    if (ymd2.current) fillOpacityAni(ymd2.current, scrollOffset);
  });

  return (
    <>
      <group position={[0, 0.7, 0]}>
        <Video
          ref={video1}
          url={'/video/section1/pt2/pt2-07.mp4'}
          scale={[1.5 * 1.2, 1 * 1.2, 1]}
        />
        <Text
          fillOpacity={0}
          ref={ymd1}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          color="#ff6932"
          letterSpacing={0.2}
          position={[-0.68, -0.65, 0]}
        >
          '22 03 04 "O.O"
        </Text>
      </group>

      <group position={[0, -0.7, 0]}>
        <Video
          ref={video2}
          url={'/video/section1/pt2/pt2-08.mp4'}
          scale={[1.5 * 1.2, 1 * 1.2, 1]}
        />
        <Text
          fillOpacity={0}
          ref={ymd2}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          color="#ff6932"
          letterSpacing={0.2}
          position={[0.65, -0.65, 0]}
        >
          '22 03 03 "엔딩요정"
        </Text>
      </group>
    </>
  );
};

export default Video4;
