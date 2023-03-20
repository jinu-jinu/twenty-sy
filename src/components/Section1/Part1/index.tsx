import Text1 from './Text1';
import Image1 from './Image1';
import Image2 from './Image2';
import Video1 from './Video1';
import Image3 from './Image3';
import Text2 from './Text2';

const Part1 = () => {
  return (
    <group position={[0, 0, -11]}>
      <Text1 />
      <Image1 />
      <Image2 />
      <Video1 />

      <group position={[0, 0, -20]}>
        <Image3 />
        <Text2 />
      </group>
    </group>
  );
};

export default Part1;
