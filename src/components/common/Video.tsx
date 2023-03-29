import React, { ForwardedRef, Suspense } from 'react';
import * as THREE from 'three';

type VideoProps = {
  elem: any;
  scale: [number, number, number];
  pos?: [number, number, number];
  opacity?: number;
};

const Video = React.forwardRef(
  ({ pos, scale, opacity = 0, elem }: VideoProps, ref: ForwardedRef<any>) => {
    if (!elem) return <mesh></mesh>;

    elem.play();
    const texture = new THREE.VideoTexture(elem);

    return (
      <>
        <Suspense fallback={null}>
          <mesh position={pos}>
            <planeGeometry args={scale} />
            <meshStandardMaterial
              transparent
              opacity={opacity}
              toneMapped={true}
              ref={ref}
              map={texture}
            ></meshStandardMaterial>
          </mesh>
        </Suspense>
      </>
    );
  }
);

export default Video;
