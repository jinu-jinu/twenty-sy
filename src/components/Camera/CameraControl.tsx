import { Tube, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const CameraControl = () => {
  const scroll = useScroll();
  const torus = useRef<any>();

  useFrame(state => {
    const cameraOffset = scroll.range(0, 1);

    const et = cameraOffset * 25;
    const loopTime = 26;
    const t = (et % loopTime) / loopTime;
    const t2 = ((et + 0.1) % loopTime) / loopTime;
    const pos = torus.current.geometry.parameters.path.getPointAt(t);
    const pos2 = torus.current.geometry.parameters.path.getPointAt(t2);

    state.camera.position.copy(pos);
    state.camera.lookAt(pos2);
  });

  const pipeSpline = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, -250),
  ]);

  return (
    <Tube ref={torus} args={[pipeSpline, 20, 2, 25, false]}>
      <meshBasicMaterial side={THREE.DoubleSide} visible={false} />
    </Tube>
  );
};

export default CameraControl;
