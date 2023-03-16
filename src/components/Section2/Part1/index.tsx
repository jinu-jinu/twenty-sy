import { useRef, useState } from 'react';
import gsap from 'gsap';
import { Text, useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

const Part1 = () => {
  const scroll = useScroll();
  const group1 = useRef<Group>(null!);
  const group2 = useRef<Group>(null!);
  const group3 = useRef<Group>(null!);
  const [trigger1, setTrigger1] = useState(true);
  const [trigger2, setTrigger2] = useState(true);
  const [trigger3, setTrigger3] = useState(true);

  // NOW NEW NEXT 2023 TWENTY

  useFrame(() => {
    const visible1 = scroll.visible(0.685 / 1, 0.01 / 1);
    const visible2 = scroll.visible(0.705 / 1, 0.01 / 1);
    const visible3 = scroll.visible(0.725 / 1, 0.01 / 1);

    if (trigger1 && visible1) {
      setTrigger1(false);

      group1.current.children.forEach((child, i, arr) => {
        setTimeout(() => {
          gsap.to(child, {
            fillOpacity: 1,
            duration: 1,
          });
        }, i * 100);

        if (i === arr.length - 1) return;
        setTimeout(() => {
          gsap.to(child, {
            fillOpacity: 0,
            duration: 1,
          });
        }, i * 140);
      });
    }

    if (trigger2 && visible2) {
      setTrigger2(false);

      group2.current.children.forEach((child, i, arr) => {
        setTimeout(() => {
          gsap.to(child, {
            fillOpacity: 1,
            duration: 1,
          });
        }, i * 80);

        if (i === arr.length - 1) return;
        setTimeout(() => {
          gsap.to(child, {
            fillOpacity: 0,
            duration: 1,
          });
        }, i * 140);
      });
    }

    if (trigger3 && visible3) {
      setTrigger3(false);

      group3.current.children.forEach((child, i: number) => {
        setTimeout(() => {
          gsap.to(child, {
            fillOpacity: 1,
            duration: 1,
          });
          gsap.to(child.position, {
            y: 0,
            duration: 1,
          });
        }, i * 150);
      });
    }
  });

  const OverlapText = (
    n: number,
    word: string,
    pos: [number, number, number],
    color: number
  ) => {
    const [x, y, z] = pos;
    return Array.from({ length: n }, (_, i) => {
      const light = i === n - 1 ? 60 : 100 - i * 3;

      const pX = x * n - x * i;
      const pY = y * n - y * i;
      const pZ = z * n - z * i;

      return (
        <Text
          font="./font/Prompt.ttf"
          position={[pX, pY, pZ]}
          color={new THREE.Color(`hsl(${color}, 100%, ${light}%)`)}
          fontSize={1.5 - i / 2 / 10}
          rotation={[0, 0, Math.PI * (i / 100)]}
          key={`${word}-${i}`}
          fillOpacity={0}
        >
          {word}
        </Text>
      );
    });
  };

  const hideInAndOut = (word: string) => {
    return Array.from({ length: word.length }, (_, i) => {
      return (
        <Text
          font="./font/Prompt.ttf"
          key={`${word}-${i}`}
          position={[-1 + i * 0.4, -1, 0]}
          fontSize={0.5}
          fillOpacity={0}
        >
          {word[i]}
        </Text>
      );
    });
  };

  return (
    <group position={[0, 0, -170]}>
      <group ref={group1} rotation={[Math.PI * 0.1, 0, 0]} position={[0, 1, 0]}>
        {OverlapText(10, 'NEXT', [-0.03, 0, -1], 300)}
      </group>
      <group ref={group2} rotation={[0, 0, Math.PI * -0.1]} position={[0, -1, -4]}>
        {OverlapText(10, '2023', [0.1, 0, -1], 200)}
      </group>
      <group ref={group3} position={[0, 0, -10]}>
        {hideInAndOut('TWENTY')}
      </group>
    </group>
  );
};

export default Part1;
