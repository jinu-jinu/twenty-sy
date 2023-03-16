import { Clone, useGLTF } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import { Group } from 'three';
import gsap from 'gsap';
import { PunchEffectType } from '@/types/type';

const PunchEffect = ({ x, y, rotation }: PunchEffectType) => {
  const group = useRef<Group>(null!!);
  const model = useGLTF('/model/pistol.glb');

  const Models = Array.from({ length: 20 }, (_, i) => {
    const pX = x.base + Math.sin(x.sinA + x.sinB * i) * x.mul;
    const pY = y.base + Math.sin(y.sinA + y.sinB * i) * y.mul;
    const pZ = -1 + 0.1 * i;

    return (
      <Clone
        object={model.nodes.Scene}
        scale={0}
        position={[pX, pY, pZ]}
        rotation={rotation}
      />
    );
  });

  useLayoutEffect(() => {
    if (group.current) {
      group.current.children.forEach((child, i) => {
        setTimeout(() => {
          gsap.to(child.scale, {
            x: 0.6,
            y: 0.6,
            z: 2,
            duration: 0.2,
          });
        }, i * 60);

        if (i === group.current.children.length - 1) return;
        setTimeout(() => {
          gsap.to(child.scale, {
            x: 0,
            y: 0,
            z: 0,
            duration: 1,
          });
        }, i * 65);
      });
    }
  }, []);

  return <group ref={group}>{...Models}</group>;
};

export default PunchEffect;
