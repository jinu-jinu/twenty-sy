import { GlobalStyle } from './globalStyle';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Sparkles } from '@react-three/drei';
import Project from './components/Section';
import { Perf } from 'r3f-perf';
import CameraControl from './components/Camera/CameraControl';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Canvas gl={{ antialias: false }} dpr={window.devicePixelRatio} className="canvas">
        <Sparkles count={1000} size={3} scale={[20, 10, 170]} position={[0, 0, -85]} />
        <ambientLight intensity={1} />
        <ScrollControls pages={80} damping={0.4}>
          <CameraControl />
          <Project />
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default App;
