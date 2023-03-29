import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const SubTitle2 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group position={[0, 0, 2]} ref={ref}>
      <Text
        anchorX={0.4}
        font="./font/Gangwon.ttf"
        position={[0, 0.07, 0]}
        fontSize={0.1}
        letterSpacing={0.02}
        fillOpacity={0}
        rotation={[0, Math.PI * 0.2, 0]}
      >
        원하는 대로 상상한 대로
      </Text>
      <Text
        anchorX={0.41}
        font="./font/Gangwon.ttf"
        position={[0, -0.07, 0]}
        fontSize={0.15}
        letterSpacing={0.02}
        fillOpacity={0}
        rotation={[0, Math.PI * 0.24, 0]}
      >
        진짜 시작은 지금부터
      </Text>
    </group>
  );
});

export default SubTitle2;
