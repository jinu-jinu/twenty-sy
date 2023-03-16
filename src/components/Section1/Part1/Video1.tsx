import { ASPECT } from '@/components/common/constant';
import Video from '@/components/common/Video';
import { fillOpacityAni, videoHandler } from '@/utils/animation';
import { deviceOffset } from '@/utils/media';
import { Text, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Group } from 'three';

const Video1 = () => {
  const offset = deviceOffset();
  const scroll = useScroll();
  const group = useRef<Group>(null!);
  const video = useRef<any>();
  const ymd = useRef<any>();
  const [isPlay, setIsPlay] = useState(false);

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.042 / 1, 0.01 / 1);
    const scrollOffset2 = scroll.range(0.045 / 1, 0.01 / 1);
    const visible = scroll.visible(0.045 / 1, 0.021 / 1);

    group.current.children.forEach(c => {
      fillOpacityAni<Text>(c as unknown as Text, scrollOffset1);
    });

    videoHandler(video.current, scrollOffset2, visible, setIsPlay);
    fillOpacityAni(ymd.current, scrollOffset2);
  });

  const texture = useTexture('./image/gradations/dusk.webp');

  return (
    <group position={[0, 0, -5]}>
      <group position={[0, 0, 2.5]} ref={group}>
        <Text
          anchorX={0.3}
          font="./font/Gangwon.ttf"
          position={[0, 0.5, 0]}
          fontSize={0.04}
          letterSpacing={0.02}
          fillOpacity={0}
        >
          September 3, 2021
          <meshStandardMaterial map={texture} />
        </Text>
        <Text
          anchorX={0.3}
          font="./font/Prompt.ttf"
          fontSize={0.11}
          position={[0, 0.4, 0]}
          letterSpacing={0.05}
          fillOpacity={0}
        >
          FULLMOON
          <meshStandardMaterial map={texture} />
        </Text>
      </group>

      <group>
        <Video
          ref={video}
          isPlay={isPlay}
          pos={[offset * 2, 0, 0]}
          url={'/video/section1/pt1/pt1-02.mp4'}
          scale={[1.5 * ASPECT, 1 * ASPECT, 1]}
        />
        <Text
          fillOpacity={0}
          ref={ymd}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          position={[0.6 + offset * 2, -0.65, 0.05]}
          color="#ff6932"
          letterSpacing={0.2}
        >
          '21 09 03 "Full moon"
        </Text>
      </group>
    </group>
  );
};

export default Video1;
