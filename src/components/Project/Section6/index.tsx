import Text1 from './Text1';
import Text2 from './Text2';
import Text3 from './Text3';
import Video1 from './Video1';
import Video2 from './Video2';
import Video3 from './Video3';
import Video4 from './Video4';

const Part5 = () => {
  return (
    <>
      <group position={[0, 0, -142]}>
        <Text1 />
        <Video1 />
        <Video2 />
        <group position={[0, 0, -14]}>
          <Text2 />
          <Video3 />
        </group>
        <group position={[0, 0, -20]}>
          <Text3 />
          <Video4 />
        </group>
      </group>
    </>
  );
};

export default Part5;
