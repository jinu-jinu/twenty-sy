import Text1 from './Text1';
import Text2 from './Text2';
import Text3 from './Text3';

const Part5 = () => {
  return (
    <>
      <group position={[0, 0, -142]}>
        <Text1 />
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
