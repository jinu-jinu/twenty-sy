import Video from '@/components/common/Video';
import { fillOpacityAni, videoHandler } from '@/utils/animation';
import { deviceOffset } from '@/utils/media';
import { Text, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

const Video2 = () => {
  const offset = deviceOffset();
  const scroll = useScroll();
  const group = useRef<Group>(null!);
  const video1 = useRef<any>();
  const video2 = useRef<any>();
  const ymd1 = useRef<any>();
  const ymd2 = useRef<any>();

  useFrame(() => {
    const scrollOffset1 = scroll.range(0.17 / 1, 0.01 / 1);
    const scrollOffset2 = scroll.range(0.175 / 1, 0.01 / 1);

    if (group.current)
      group.current.children.forEach(c => {
        fillOpacityAni<Text>(c as unknown as Text, scrollOffset1);
      });

    if (video1.current) videoHandler(video1.current, scrollOffset2);
    if (ymd1.current) fillOpacityAni(ymd1.current, scrollOffset2);

    if (video2.current) videoHandler(video2.current, scrollOffset2);
    if (ymd2.current) fillOpacityAni(ymd2.current, scrollOffset2);
  });

  const sentence = `
  Congratulations
  on your debut!
  `;

  const texture = useTexture('./image/gradations/palette.png');

  return (
    <group position={[0, 0, -11]}>
      <group position={[0, -0.1, 2.5]} ref={group}>
        <Text
          font="./font/Gangwon.ttf"
          position={[0, 0.07, 0]}
          fontSize={0.04}
          letterSpacing={0.02}
          fillOpacity={0}
        >
          February 22, 2022
          <meshStandardMaterial map={texture} />
        </Text>
        <Text
          lineHeight={1}
          font="./font/Gangwon.ttf"
          fontSize={0.1}
          position={[0, -0.07, 0]}
          letterSpacing={0.05}
          fillOpacity={0}
        >
          {sentence}

          <meshStandardMaterial map={texture} />
        </Text>
      </group>

      <group position={[-offset * 2, 0.7, 0.3]}>
        <Video
          ref={video1}
          url={'/video/section1/pt2/pt2-02.mp4'}
          scale={[1.5 * 1.2, 1 * 1.2, 1]}
          pos={[-0.1, 0, 0]}
        />
        <Text
          fillOpacity={0}
          ref={ymd1}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          position={[-0.1, -0.65, 0.05]}
          color="#ff6932"
          letterSpacing={0.2}
        >
          '22 01 28 "Debut trailer"
        </Text>
      </group>

      <group position={[offset * 2, -0.7, -0.3]}>
        <Video
          ref={video2}
          url={'/video/section1/pt2/pt2-04.mp4'}
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
          '22 03 01 "Debut show case"
        </Text>
      </group>
    </group>
  );
};

export default Video2;
