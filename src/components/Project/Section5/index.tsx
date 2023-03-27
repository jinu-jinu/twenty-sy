import MainTitle from './MainTitle';
import Video1 from './Video1';

const Section5 = () => {
  return (
    <>
      <group position={[0, 0, -101]}>
        <MainTitle />
        <Video1 />

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
