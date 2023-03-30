import { Float, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import ParticleEffect from '../effects/ParticleEffect';

const ParticleRabbit = () => {
  const [visible, setVisible] = useState(false);
  const scroll = useScroll();

  useFrame(() => {
    const trigger = scroll.visible(0.75 / 1, 1);

    setVisible(trigger);
  });

  return (
    <group>
      {visible && (
        <Float speed={1.5} floatIntensity={1.5} rotationIntensity={0.5}>
          <mesh scale={1.5}>
            <ParticleEffect
              color1={new THREE.Color('hotpink')}
              color2={new THREE.Color('#6D67E4')}
              model={'rabbit'}
              position={[0.1, -1.1, -1]}
              rotation={[0, Math.PI * 0.1, 0]}
            />
          </mesh>
        </Float>
      )}
    </group>
  );
};

export default ParticleRabbit;
