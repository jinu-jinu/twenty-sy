import { Image } from '@react-three/drei';

const Image1 = () => {
  return (
    <group>
      <group>
        <Image
          url={`/image/section1/pt4/pt4-05.webp`}
          transparent
          opacity={0}
          position={[-1.7, 0, 0]}
          scale={1.5}
        />
        <Image
          url={`/image/section1/pt4/pt4-02.webp`}
          transparent
          opacity={0}
          position={[0, 0, 0]}
          scale={1.5}
        />
        <Image
          url={`/image/section1/pt4/pt4-03.webp`}
          transparent
          opacity={0}
          position={[1.7, 0, 0]}
          scale={1.5}
        />
      </group>

      <group>
        <Image
          url={`/image/section1/pt4/pt4-01.webp`}
          transparent
          opacity={0}
          position={[-0.85, 1.85, 0]}
          scale={[1 * 1.4, 1.3 * 1.4]}
        />

        <Image
          url={`/image/section1/pt4/pt4-04.webp`}
          transparent
          opacity={0}
          position={[0.85, -1.85, 0]}
          scale={[1 * 1.4, 1.3 * 1.4]}
        />
      </group>
    </group>
  );
};

export default Image1;
