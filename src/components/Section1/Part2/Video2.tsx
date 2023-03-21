import Video from '@/components/common/Video';
import { fillOpacityAni, opacityAni, videoHandler } from '@/utils/animation';
import { Image, Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

const Video2 = () => {
  const scroll = useScroll();
  const video = useRef<any>();
  const ymd = useRef<any>();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.218 / 1, 0.01 / 1);

    if (video.current) videoHandler(video.current, scrollOffset);
    if (ymd.current) fillOpacityAni(ymd.current, scrollOffset);
    if (group.current)
      group.current.children.forEach(c => {
        const material = (c as Mesh).material;
        opacityAni(material, scrollOffset);
      });
  });

  return (
    <>
      <group>
        <Video
          ref={video}
          url={'/video/section1/pt2/pt2-02.mp4'}
          scale={[1.5 * 1.2, 1 * 1.2, 1]}
        />
        <Text
          fillOpacity={0}
          ref={ymd}
          font="./font/Gangwon.ttf"
          fontSize={0.04}
          color="#ff6932"
          letterSpacing={0.2}
          position={[0, -0.65, 0]}
        >
          '22 03 04 "O.O"
        </Text>
      </group>

      <group scale={0.7} ref={group}>
        <Image
          url={'/image/section1/pt2/pt2-16.jpg'}
          scale={[1.5, 1]}
          transparent
          opacity={0}
          position={[2.7, 0, -0.5]}
        />
        <Image
          url={'/image/section1/pt2/pt2-14.jpg'}
          scale={[1.5, 1]}
          transparent
          opacity={0}
          position={[-1.5, -2.2, -1]}
        />
        <Image
          url={'/image/section1/pt2/pt2-15.jpg'}
          scale={[1.5, 1]}
          transparent
          opacity={0}
          position={[-2.5, 1.5, 0]}
        />
      </group>
    </>
  );
};

export default Video2;
