import { fillOpacityAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

const Typo8 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.586 / 1, 0.015 / 1);

    group.current.children.forEach(c => {
      fillOpacityAni<Text>(c as unknown as Text, scrollOffset);
    });
  });

  return (
    <group ref={group}>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0.08}
        position={[-0.6, 0.4, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
      >
        뿌앵윤아
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0.04}
        position={[-0.3, 0.39, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
      >
        (시즌2 하나요?)
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0.08}
        position={[0.6, 0.4, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
      >
        쭈굴윤아
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0.08}
        position={[-0.6, -0.37, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
      >
        설장군
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0.08}
        position={[0.6, -0.37, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
      >
        저승윤아
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0.08}
        position={[-0.6, -1.15, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
      >
        깝죽윤아
      </Text>
      <Text
        font="./font/Gangwon.ttf"
        fontSize={0.08}
        position={[0.6, -1.15, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
      >
        킹받윤아
      </Text>
    </group>
  );
};

export default Typo8;
