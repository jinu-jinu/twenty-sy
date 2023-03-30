import { useRef, useState } from 'react';
import gsap from 'gsap';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

const Part1 = () => {
  const scroll = useScroll();
  const group3 = useRef<Group>(null!);
  const [trigger3, setTrigger3] = useState(true);

  useFrame(() => {
    const visible3 = scroll.visible(0.725 / 1, 0.01 / 1);

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
      <group ref={group3} position={[0, 0, -10]}>
        {hideInAndOut('TWENTY')}
      </group>
    </group>
  );
};

export default Part1;
