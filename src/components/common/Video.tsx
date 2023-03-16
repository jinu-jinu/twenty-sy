import React, { Suspense, useMemo, useRef } from 'react';
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
      const vid = document.createElement('video');
      vid.loop = true;
      vid.muted = true;
      vid.setAttribute('crossorigin', 'Anonymous');
      video.setAttribute('playsinline', 'true');
      vid.innerHTML = `
        <source src=${url} type="video/mp4" />
      `;

      return vid;
    }, []);

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
              toneMapped={false}
              side={THREE.DoubleSide}
              ref={ref as any}
            >
              <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
            </meshStandardMaterial>
          </mesh>
        </Suspense>
      </>
    );
  }
);

const x = ([]: readonly number[]) => {};

x([1, 2]);

export default Video;
