import Image1 from './Image1';
import Image2 from './Image2';
import Image3 from './Image3';
import Video1 from './Video1';
import MainTitle from './MainTitle';
import SubTitle1 from './SubTitle1';
import SubTitle2 from './SubTitle2';
import SubTitle3 from './SubTitle3';
import SubTitle4 from './SubTitle4';
import ModelMoon from './ModelMoon';

const Section2 = () => {
  return (
    <group position={[0, 0, -10]}>
      <MainTitle />

      <group position={[0, 0, -5]}>
        <SubTitle1 />
        <Image1 />
      </group>

      <group position={[0, 0, -10]}>
        <SubTitle2 />
        <ModelMoon />
        <Image2 />
      </group>

      <group position={[0, 0, -15]}>
        <SubTitle3 />
        <Video1 />
      </group>

      <group position={[0, 0, -20]}>
        <Image3 />
        <SubTitle4 />
      </group>
    </group>
  );
};

export default Section2;
