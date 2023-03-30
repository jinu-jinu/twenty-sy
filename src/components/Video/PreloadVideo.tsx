import { useScroll, useVideoTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { useSnapshot } from 'valtio';
import { ASPECT } from '../common/constant';
import { state } from '../Store/store';
import { Group, Mesh } from 'three';
import gsap from 'gsap';

const URLS = ['s2-01', 's3-01', 's3-02', 's4-01', 's5-01', 's6-01'];

const VideoMaterial = ({ url }: { url: string }) => {
  const texture = useVideoTexture(`/video/${url}.mp4`, {
    muted: true,
    loop: true,
    start: true,
    autoplay: true,
    playsInline: true,
    preload: 'auto',
    unsuspend: 'canplaythrough',
    onplay: e => {
      state.loadedVideoCount += 1;
    },
  });

  texture.dispose();

  return <meshBasicMaterial map={texture} toneMapped={true} opacity={0} transparent />;
};

const PreloadVideo = () => {
  const scroll = useScroll();
  const { aspect } = useSnapshot(state);
  const group = useRef<Group>(null!);

  const POSITIONS: [number, number, number][] = [
    [0, 0.1, -19],
    [0, 0, -32],
    [0, 0, -46],
    [0, 0, -62],
    [0, 0, -101],
    [-1, -1, 0],
  ];
  const SCALES: [number, number, number][] = [
    [1.5 * ASPECT, 1 * ASPECT, 1],
    [...aspect],
    [1.5 * ASPECT, 1 * ASPECT, 1],
    [...aspect],
    [...aspect],
    [...aspect],
  ];

  useFrame(() => {
    const video1Opacity = scroll.range(0.11 / 1, 0.01 / 1);
    const video2Opacity = scroll.curve(0.175 / 1, 0.035 / 1);
    const video3Opacity = scroll.range(0.29 / 1, 0.01 / 1);

    if (!group.current) return;

    const materials = group.current.children.map(c => {
      const material = (c as Mesh).material;
      return material;
    });

    gsap.to(materials[0], {
      opacity: video1Opacity,
    });

    gsap.to(materials[1], {
      opacity: video2Opacity,
    });
    gsap.to(materials[2], {
      opacity: video3Opacity,
    });
  });

  return (
    <group ref={group}>
      {URLS.map((url, i) => (
        <mesh key={`${url}-${i}`} position={POSITIONS[i]} scale={SCALES[i]} name={url}>
          <planeGeometry />
          <Suspense>
            <VideoMaterial url={url} />
          </Suspense>
        </mesh>
      ))}
    </group>
  );
};

export default PreloadVideo;
