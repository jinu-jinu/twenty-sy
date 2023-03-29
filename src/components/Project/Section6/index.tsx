import Text1 from './Text1';
import Text2 from './Text2';
import Text3 from './Text3';
import Video1 from './Video1';

const Part5 = () => {
  return (
    <>
      <group position={[0, 0, -142]}>
        <Text1 />
        <Video1 />
        <group position={[0, 0, -14]}>
          <Text2 />
        </group>
        <group position={[0, 0, -20]}>
          <Text3 />
        </group>
      </group>
    </>
  );
};

export default Part5;
