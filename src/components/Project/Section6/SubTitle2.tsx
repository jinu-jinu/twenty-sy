import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const SubTitle2 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref}>
      <Text
        position={[-1.2, 1.3, 0]}
        lineHeight={1.2}
        letterSpacing={0.05}
        font="/font/Gangwon.ttf"
        fontSize={0.15}
        fillOpacity={0}
        maxWidth={2.5}
        textAlign="justify"
      >
        "I was really happy that NMIXX won the award. Next year, let's go for the Triple
        Crown!"
      </Text>
      <Text
        position={[1, -0.6, 0]}
        lineHeight={1.2}
        letterSpacing={0.05}
        font="/font/Gangwon.ttf"
        fontSize={0.2}
        fillOpacity={0}
        maxWidth={3}
        textAlign="justify"
        color={'#fff'}
      >
        You did a great job until the debut, comeback, and the end of the year. 2022 was
        even more special because we were with NMIXX. I will support you foooorever and
        everrrrrrrrr. see you in 2023!
      </Text>
    </group>
  );
});

export default SubTitle2;
