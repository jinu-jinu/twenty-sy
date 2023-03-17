import { ASPECT } from '@/components/common/constant';
import Video from '@/components/common/Video';
import { fillOpacityAni, videoHandler } from '@/utils/animation';
import { deviceOffset } from '@/utils/media';
import { Text, useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Video2 = () => {
  const offset = deviceOffset();
  const scroll = useScroll();
  const text = useRef<any>();
  const video = useRef<any>();
  const ymd = useRef<any>();
  const moon = useGLTF('/model/moon.glb');
  const moonRef = useRef<any>();

  useFrame(() => {
    const scrollOffset = scroll.range(0.067 / 1, 0.01 / 1);
    const visible = scroll.visible(0.067 / 1, 0.02 / 1);

    if (video.current) videoHandler(video.current, scrollOffset);
    if (ymd.current) fillOpacityAni(ymd.current, scrollOffset);
    if (text.current) fillOpacityAni(text.current, scrollOffset);

    if (moonRef.current)
      gsap.to(moonRef.current.scale, {
        x: visible ? 0.08 : 0,
        y: visible ? 0.08 : 0,
        z: visible ? 0.08 : 0,
        duration: 1,
      });
  });

  useLayoutEffect(() => {
    return () => {
      moonRef.current.geometry.dispose();
      moonRef.current.material.dispose();
    };
  }, []);

  return (
    <group position={[0, 0, -10]}>
      <Text
        anchorX={0.55}
        font="./font/Gangwon.ttf"
        fontSize={0.1}
        position={[0, 0.3, 1]}
        letterSpacing={0.05}
        fillOpacity={0}
        ref={text}
        maxWidth={1.4}
      >
        I first saw you on the night of the full moon.
      </Text>

      <mesh scale={0.08} position={[0, 0.6, 1.5]} ref={moonRef}>
        <primitive object={moon.scene} />
      </mesh>

      <Video
        ref={video}
        pos={[-offset * 2, -0.6, 0]}
        url={'/video/section1/pt1/pt1-03.mp4'}
        scale={[1.5 * ASPECT, 1 * ASPECT, 1]}
      />
      <Text
        fillOpacity={0}
        ref={ymd}
        font="./font/Gangwon.ttf"
        fontSize={0.04}
        position={[-0.37 - offset * 2, 0.03, 0.05]}
        color="#ff6932"
        letterSpacing={0.2}
      >
        '21 09 03 "Full moon"
      </Text>
    </group>
  );
};

export default Video2;

useGLTF.preload('/model/moon.glb');
