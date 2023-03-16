import Video from '@/components/common/Video';
import { fillOpacityAni, videoHandler } from '@/utils/animation';
import { deviceOffset } from '@/utils/media';
import { Text, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Group } from 'three';

const Video2 = () => {
  const offset = deviceOffset();
  const scroll = useScroll();
  const group = useRef<Group>(null!);
  const video1 = useRef<any>();
  const video2 = useRef<any>();
  const ymd1 = useRef<any>();
  const ymd2 = useRef<any>();
  const [isPlay, setIsPlay] = useState(false);

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.284 / 1, 0.01 / 1);
    const scrollOffset2 = scroll.range(0.288 / 1, 0.01 / 1);
    const visible = scroll.visible(0.288 / 1, 0.02 / 1);

    group.current.children.forEach(c => {
      fillOpacityAni<Text>(c as unknown as Text, scrollOffset1);
    });

    videoHandler(video1.current, scrollOffset2, visible, setIsPlay);
    fillOpacityAni(ymd1.current, scrollOffset2);

    videoHandler(video2.current, scrollOffset2, visible, setIsPlay);
    fillOpacityAni(ymd2.current, scrollOffset2);
  });

  const texture = useTexture('./image/gradations/summer.webp');

  return (
    <group position={[0, 0, -11]}>
      <group rotation={[0, 0, Math.PI * 0.5]} position={[0, 0, 2.5]} ref={group}>
        <Text
          anchorX={0.1}
          font="./font/Gangwon.ttf"
          position={[0, 0.04, 0]}
          fontSize={0.04}
          letterSpacing={0.02}
          fillOpacity={0}
        >
          Summber of 2022
          <meshStandardMaterial map={texture} />
        </Text>
        <Text
          font="./font/Prompt.ttf"
          fontSize={0.07}
          position={[0, -0.04, 0]}
          letterSpacing={0.04}
          fillOpacity={0}
        >
          VACATION
          <meshStandardMaterial map={texture} />
        </Text>
      </group>

      <group position={[-offset * 2, 0.7, 0]}>
        <Video
          isPlay={isPlay}
          ref={video1}
          url={'/video/section1/pt3/pt3-01.mp4'}
          scale={[1.5 * 1.2, 1 * 1.2, 1]}
          pos={[-0.2, 0, 0]}
        />
        <Text
          fillOpacity={0}
          ref={ymd1}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          position={[-0.2, -0.65, 0.05]}
          color="#ff6932"
          letterSpacing={0.2}
        >
          '22 06 18 "NMIXX at Venice beach"
        </Text>
      </group>

      <group position={[offset * 2, -0.7, 0]}>
        <Video
          isPlay={isPlay}
          ref={video2}
          url={'/video/section1/pt3/pt3-04.mp4'}
          scale={[1.5 * 1.2, 1 * 1.2, 1]}
          pos={[0.2, 0, 0]}
        />
        <Text
          fillOpacity={0}
          ref={ymd2}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          position={[0.2, -0.63, 0.05]}
          color="#ff6932"
          letterSpacing={0.2}
        >
          '22 08 21 "KCON LA"
        </Text>
      </group>
    </group>
  );
};

export default Video2;
