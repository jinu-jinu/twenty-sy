import { GANGWON_B } from '@/utils/constant';
import { Text } from '@react-three/drei';
import { ForwardedRef, forwardRef } from 'react';

const SubTitle3 = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <group ref={ref}>
      <Text
        font={GANGWON_B}
        fontSize={0}
        position={[0, 0, 0.1]}
        letterSpacing={0.04}
        fillOpacity={0}
        anchorX={1}
        anchorY={-0.4}
        color={'#ea8e25'}
      >
        닭가슴살 쿠키
      </Text>
      <Text
        font={GANGWON_B}
        fontSize={0}
        position={[0, 0, 0.1]}
        letterSpacing={0.04}
        fillOpacity={0}
        anchorX={1}
        anchorY={-0.25}
        color={'#fbb855'}
      >
        윤아 위해 구웠지 야채 몰래 넣었지
      </Text>
      <Text
        font={GANGWON_B}
        fontSize={0}
        position={[0, 0, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#ea8e25'}
        anchorX={1}
        anchorY={-0.1}
      >
        떡볶인 없어 배고파도
      </Text>
      <Text
        font={GANGWON_B}
        fontSize={0}
        position={[0, 0, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fbb855'}
        anchorX={1}
        anchorY={0.05}
      >
        제로도 없어 목말라도
      </Text>
      <Text
        font={GANGWON_B}
        fontSize={0}
        position={[0, 0, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        anchorX={1}
        anchorY={0.2}
        color={'#ea8e25'}
      >
        퍽퍽한 살만 샐러드 맛만 느끼게 될 거 알잖아
      </Text>
      <Text
        font="./font/Prompt.ttf"
        fontSize={0}
        position={[0, -0.55, 0.1]}
        letterSpacing={0.05}
        fillOpacity={0}
        color={'#fc50a3'}
      >
        100DAY
      </Text>
    </group>
  );
});

export default SubTitle3;
