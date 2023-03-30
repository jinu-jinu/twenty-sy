import MainTitle from './MainTitle';
import Video1 from './Video1';
import { useRef } from 'react';

const Section4 = () => {
  const ref = useRef();

  return (
    <>
      {/* 원래 위치는 -57 */}
      <group position={[0, 0, -9]}>
        <MainTitle ref={ref} />
        <Video1 />

        {/* <group position={[0, 0.15, -10]}>
          <Typo1 />
          <Image1 />
        </group> */}

        {/* <group position={[0, -0.3, -19]}>
          <Typo3 />
          <Image3 />
        </group> */}

        {/* <group position={[0, 0.2, -23]}>
          <Typo4 />
          <Image4 />
        </group> */}

        {/* <group position={[0, -0.15, -32]}>
          <Typo6 />
        </group> */}

        {/* <group position={[0, 0, -35]}>
          <Image6 />
        </group> */}

        {/* <group position={[0, 0, -38]}>
          <Image7 />
        </group> */}

        {/* <group position={[0, 0, -42]}>
          <Typo7 />
          <Image8 />
        </group> */}
      </group>
    </>
  );
};

export default Section4;
