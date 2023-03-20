import React, { Suspense } from 'react';
import * as THREE from 'three';
import { useVideoTexture } from '@react-three/drei';

type VideoProps = {
  url: string;
  scale: [number, number, number];
  pos?: [number, number, number];
  rotation?: [number, number, number];
  opacity?: number;
};

const Video = React.forwardRef(
  ({ url, pos, scale, rotation, opacity = 0 }: VideoProps, ref) => {
    const texture = useVideoTexture(url, {
      muted: true,
      loop: true,
      autoplay: true,
      preload: 'auto',
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
