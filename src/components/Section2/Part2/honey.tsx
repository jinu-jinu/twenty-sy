import { Text, useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import gsap from 'gsap';
import { Group } from 'three';

const Text3 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);
  const model = useGLTF('./model/honey.glb');

  useFrame(() => {
    const visible1 = scroll.visible(0.86 / 1, 1);

    if (group.current) {
      group.current.children.forEach((child, i) => {
        const len = child.children.length;

        if (len) {
          const value = visible1 ? 0.7 : 0;
          gsap.to(child.scale, {
            x: value,
            y: value,
            z: value,
            duration: 0.5,
            delay: 0.6,
          });
        }

        if (!len) {
          setTimeout(() => {
            gsap.to(child, {
              fillOpacity: visible1 ? 1 : 0,
              duration: 1,
            });
          }, i * 200);
        }
      });
    }
  });

  return (
    <>
      <group ref={group}>
        <Text
          font="./font/Gangwon.ttf"
          fillOpacity={0}
          anchorX={0.8}
          anchorY={-0.6}
          fontSize={0.4}
        >
          태
        </Text>
        <Text
          font="./font/Gangwon.ttf"
          fillOpacity={0}
          anchorX={0.4}
          anchorY={-0.6}
          fontSize={0.4}
        >
          평
        </Text>
        <Text
          font="./font/Gangwon.ttf"
          fillOpacity={0}
          anchorX={0}
          anchorY={-0.6}
          fontSize={0.4}
        >
          동
        </Text>
        <mesh scale={0} position={[-0.3, -0.2, 0]}>
          <primitive object={model.scene} />
        </mesh>
      </group>
    </>
  );
};

export default Text3;
