import { Text, useTexture } from '@react-three/drei';

const Text3 = () => {
  const texture = useTexture('./image/gradations/winter.webp');

  return (
    <group position={[0, 0, 2.5]}>
      <Text
        lineHeight={1.2}
        letterSpacing={0.05}
        font="/font/Gangwon.ttf"
        fontSize={0.08}
        fillOpacity={0}
        maxWidth={1.2}
      >
        You did a great job until the debut, comeback, and the end of the year. 2022 was
        even more special because we were with NMIXX. I will support you foooorever and
        everrrrrrrrr. see you in 2023!
        <meshStandardMaterial map={texture} />
      </Text>
    </group>
  );
};

export default Text3;
