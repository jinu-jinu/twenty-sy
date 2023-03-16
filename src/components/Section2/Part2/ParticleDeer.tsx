import { Float } from '@react-three/drei';
import * as THREE from 'three';
import ParticleEffect from '../../effects/ParticleEffect';

const ParticleDeer = () => {
  return (
    <Float speed={1.5} floatIntensity={1.5} rotationIntensity={0.5}>
      <mesh scale={1.5}>
        <ParticleEffect
          color1={new THREE.Color('#F2CD5C')}
          color2={new THREE.Color('#F2921D')}
          model={'deer'}
          position={[-0.3, -1, -2]}
          rotation={[Math.PI * 0.1, Math.PI * 0.5, 0]}
        />
      </mesh>
    </Float>
  );
};

export default ParticleDeer;
