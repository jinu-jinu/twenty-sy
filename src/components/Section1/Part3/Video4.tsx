import Video from '@/components/common/Video';
import { state } from '@/components/Store/store';
import { fillOpacityAni, videoHandler } from '@/utils/animation';
import { Text, useAspect, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { useSnapshot } from 'valtio/react';

const Video4 = () => {
  const scroll = useScroll();
  const video = useRef<any>();
  const text1 = useRef<any>();
  const text2 = useRef<any>();
  const text3 = useRef<any>();
  const text4 = useRef<any>();
  const { aspect } = useSnapshot(state);

  useFrame(() => {
    const scrollOffset = scroll.range(0.33 / 1, 0.01 / 1);
    const visible2 = scroll.visible(0.33 / 1, 0.01 / 1);
    const visible3 = scroll.visible(0.335 / 1, 0.01 / 1);
    const visible4 = scroll.visible(0.34 / 1, 0.01 / 1);
    const visible5 = scroll.visible(0.344 / 1, 0.01 / 1);

    videoHandler(video.current, scrollOffset);
    fillOpacityAni(text1.current, visible2 ? 1 : 0);
    fillOpacityAni(text2.current, visible3 ? 1 : 0);
    fillOpacityAni(text3.current, visible4 ? 1 : 0);
    fillOpacityAni(text4.current, visible5 ? 1 : 0);
  });

  const pretty = `
  예쁨 10^100
  00000000
  0000000
  000000
  00000
  `;

  return (
    <>
      <group position={[0, 0, -26]}>
        <group>
          <Text
            font="/font/Gangwon.ttf"
            position={[0, 0, 8]}
            fontSize={0.05}
            fillOpacity={1}
            ref={text1}
          >
            기술 100
          </Text>
          <Text
            font="/font/Gangwon.ttf"
            position={[0, 0, 7]}
            fontSize={0.05}
            fillOpacity={0}
            ref={text2}
          >
            우아함 10000
          </Text>
          <Text
            font="/font/Gangwon.ttf"
            position={[0, 0, 6]}
            fontSize={0.05}
            fillOpacity={0}
            ref={text3}
          >
            아름다움 10^100
          </Text>
          <Text
            font="/font/Gangwon.ttf"
            position={[0, 0, 5]}
            fontSize={0.1}
            fillOpacity={0}
            ref={text4}
            color={'#ffffff'}
          >
            {pretty}
          </Text>
        </group>
        <Video ref={video} url={'/video/section1/pt3/pt3-07.mp4'} scale={[...aspect]} />
      </group>
    </>
  );
};

export default Video4;
