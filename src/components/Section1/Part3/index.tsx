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
import Typo8 from './Typo8';

const Part3 = () => {
  return (
    <>
      <group position={[0, 0, -63]}>
        <MainTitle />
        <Video1 />

        <group position={[0, 0, -11]}>
          <SubTitle1 />
        </group>

        <group position={[0, 0.15, -13]}>
          <Typo1 />
          <Image1 />
        </group>

        <group position={[-0.6, 0.3, -17]}>
          <Typo2 />
          <Image2 />
        </group>

        <group position={[0.6, -0.3, -21]}>
          <Typo3 />
          <Image3 />
        </group>

        <group position={[-0.6, 0.3, -24]}>
          <Typo4 />
          <Image4 />
        </group>

        <group position={[0, 0, -27]}>
          <Typo5 />
          <Image5 />
        </group>

        <group position={[0, 0, -35]}>
          <group position={[-1.1, 0, 4.5]}>
            <Typo6 />
            <Image6 />
          </group>

          <group position={[0.7, 0, 2.5]}>
            <Typo7 />
            <Image7 />
          </group>

          <group position={[0, 0.05, 0]}>
            <Typo8 />
            <Image8 />
          </group>
        </group>
      </group>
    </>
  );
};

export default Part3;
