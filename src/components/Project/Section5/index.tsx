import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import MainTitle from './MainTitle';
import Video1 from './Video1';

const Section5 = () => {
  const scroll = useScroll();
  const [isVisible1, setIsVisible1] = useState(false);

  useFrame(() => {
    const trigger1 = scroll.visible(0.615 / 1, 0.05 / 1);

    setIsVisible1(trigger1);
  });

  return (
    <>
      <group position={[0, 0, -99]}>
        <MainTitle />
        {isVisible1 && <Video1 />}

        {/* 서브타이틀하고 파트 나눠주기 */}
        {/* 
          파티클 쓰기

          윤아는 뭐다? 토끼 파티클
          아니거든? 윤아는 사슴 파티클
          아니야 윤아는 태평동 꿀주먹

        */}

        {/* <Video2 /> */}

        {/* <group position={[0, 0, -16]}>
          <Text2 />
          <Video3 />
        </group>

        <group position={[0, 0, -21]}>
          <Text3 />
          <Video4 />
        </group>

        <group position={[0, 0, -31]}>
          <Text4 />
          <Video5 />
          <Image1 />
        </group> */}
      </group>
    </>
  );
};

export default Section5;
