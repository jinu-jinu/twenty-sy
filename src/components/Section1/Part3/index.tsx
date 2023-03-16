import Text1 from './Text1';
import Video1 from './Video1';
import Video2 from './Video2';
import Video3 from './Video3';
import Video4 from './Video4';
import Image1 from './Image1';
import Text2 from './Text2';
import Text3 from './Text3';

const Part3 = () => {
  return (
    <>
      <group position={[0, 0, -63]}>
        <Text1 />
        <Video1 />
        <Video2 />

        <group position={[0, 0, -16]}>
          <Text2 />
          <Video3 />
        </group>

        <Video4 />

        <group position={[0, 0, -35]}>
          <Text3 />
          <Image1 />
        </group>
      </group>
    </>
  );
};

export default Part3;
