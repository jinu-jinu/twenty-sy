import MainTitle from './MainTitle';
import SubTitle1 from './SubTitle1';
import Video1 from './Video1';
import Image1 from './Image1';
import Image2 from './Image2';
import Image3 from './Image3';
import Image4 from './Image4';
import Image5 from './Image5';
import Image6 from './Image6';
import Image7 from './Image7';
import Image8 from './Image8';
import Typo1 from './Typo1';
import Typo2 from './Typo2';
import Typo3 from './Typo3';
import Typo4 from './Typo4';
import Typo5 from './Typo5';
import Typo6 from './Typo6';
import Typo7 from './Typo7';

const Section4 = () => {
  return (
    <>
      <group position={[0, 0, -56]}>
        <MainTitle />
        <Video1 />

        <group position={[0, 0, -6]}>
          <SubTitle1 />
        </group>

        <group position={[0, 0.15, -10]}>
          <Typo1 />
          <Image1 />
        </group>

        <group position={[0, -0.15, -15]}>
          <Typo2 />
          <Image2 />
        </group>

        <group position={[0, -0.3, -19]}>
          <Typo3 />
          <Image3 />
        </group>

        <group position={[0, 0.2, -23]}>
          <Typo4 />
          <Image4 />
        </group>

        <group position={[0, -0.4, -27]}>
          <Typo5 />
          <Image5 />
        </group>

        <group position={[0, -0.15, -32]}>
          <Typo6 />
        </group>

        <group position={[0, 0, -35]}>
          <Image6 />
        </group>

        <group position={[0, 0, -38]}>
          <Image7 />
        </group>

        <group position={[0, 0, -42]}>
          <Typo7 />
          <Image8 />
        </group>
      </group>
    </>
  );
};

export default Section4;
