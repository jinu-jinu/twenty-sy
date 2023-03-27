import { GANGWON_B, PROMPT_B, PROMPT_R, PROMPT_SB } from '@/components/common/constant';
import { fillOpacityAni, posYAni } from '@/utils/animation';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

const Typo5 = () => {
  const scroll = useScroll();
  const group = useRef<Group>(null!);

  useFrame(() => {
    const scrollOffset = scroll.range(0.51 / 1, 0.018 / 1);

    if (group.current) {
      posYAni(group.current, scrollOffset ? 0 : 0.5, 3);

      group.current.children.forEach(c => {
        fillOpacityAni<Text>(c as unknown as Text, scrollOffset);
      });
    }
  });

  return (
    <group ref={group} position={[0, 0.5, 0]}>
      <Text
        font={PROMPT_B}
        fontSize={0.5}
        position={[0, 1, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
      >
        MAFIA
      </Text>
      <Text
        font={PROMPT_R}
        fontSize={0.1}
        position={[0, 0.8, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
      >
        IN THE NMIXX
      </Text>
      <Text
        font={PROMPT_B}
        fontSize={0.3}
        position={[0, 0.6, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
      >
        BABY
      </Text>
      <Text
        font={GANGWON_B}
        fontSize={0.07}
        position={[0, 0.45, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
      >
        안 헷갈려, 안헷갈려,
      </Text>
      <Text
        font={GANGWON_B}
        fontSize={0.2}
        position={[0, 0.3, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
      >
        안 헷갈리지 넌!
      </Text>

      <Text
        font={PROMPT_SB}
        fontSize={0.1}
        position={[0.01, 0.13, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#0d8cfc'}
      >
        "SULLYOON IS MAFIA"
      </Text>
      <Text
        font={PROMPT_SB}
        fontSize={0.1}
        position={[0, 0.12, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
      >
        "SULLYOON IS MAFIA"
      </Text>

      <Text
        font={GANGWON_B}
        fontSize={0.1}
        position={[0, 0, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
      >
        벌써 어느새 또
      </Text>

      <Text
        font={GANGWON_B}
        fontSize={0.3}
        position={[-0.4, -0.2, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#f90372'}
      >
        제거
      </Text>
      <Text
        font={GANGWON_B}
        fontSize={0.12}
        position={[0.3, -0.25, 0]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fff'}
      >
        되었습니다ㅠㅠ
      </Text>
    </group>
  );
};

export default Typo5;
