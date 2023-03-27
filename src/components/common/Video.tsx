import React, { Suspense, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

type VideoProps = {
  url: string;
  scale: [number, number, number];
  pos?: [number, number, number];
  rotation?: [number, number, number];
  opacity?: number;
  isPlay?: boolean;
};

const Video = React.forwardRef(
  ({ url, pos, scale, rotation, opacity = 0, isPlay = false }: VideoProps, ref) => {
    const video = useMemo(() => {
      const res = document.createElement('video');
      res.loop = true;
      res.muted = true;
      res.autoplay = true;
      res.playsInline = true;
      res.src = url;

      return res;
    }, []);

    const texture = new THREE.VideoTexture(video);

    useFrame(() => {
      if (isPlay) video.play();
      else video.pause();
    });

    return (
      <>
        <Suspense fallback={null}>
          <mesh position={pos} rotation={rotation}>
            <planeGeometry args={scale} />
            <meshStandardMaterial
              transparent
              opacity={opacity}
              toneMapped={true}
              side={THREE.DoubleSide}
              ref={ref as any}
              map={texture}
            ></meshStandardMaterial>
          </mesh>
        </Suspense>
      </>
    );
  }
);

export default Video;
