import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import ParticleRabbit from './ParticleRabbit';
import ParticleDeer from './ParticleDeer';
import Text1 from './Text1';
import Text2 from './Text2';
import Text3 from './Text3';
import { PunchEffectType } from '@/types/type';
import PunchEffect from '@/components/effects/PunchEffect';

const Part2 = () => {
  const scroll = useScroll();
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  useFrame(() => {
    const visible1 = scroll.visible(0.81 / 1, 1);
    const visible2 = scroll.visible(0.86 / 1, 1);

    if (visible1) setIsVisible1(true);
    else setIsVisible1(false);

    if (visible2) setIsVisible2(true);
    else setIsVisible2(false);
  });

  const rightHookProps: PunchEffectType = {
    rotation: [0, Math.PI * -0.2, 0],
    x: { base: 0.5, sinA: 0, sinB: 0.15, mul: 1.2 },
    y: { base: 1, sinA: 2, sinB: 0.1, mul: 1 },
  };

  return (
    <group position={[0, 0, -193]}>
      <group>
        <Text1 />
        <ParticleRabbit />
      </group>

      <group position={[0, 0, -12]}>
        <Text2 />
        {isVisible1 && <ParticleDeer />}
      </group>

      <group position={[0, 0, -20]}>
        <Text3 />

        {isVisible2 && (
          <mesh position={[-0.4, -0.5, -1]}>
            <PunchEffect {...rightHookProps} />
          </mesh>
        )}
      </group>
    </group>
  );
};

export default Part2;
