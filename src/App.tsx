import { GlobalStyle } from './globalStyle';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Sparkles, useAspect } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import Project from './components/Section';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Canvas gl={{ antialias: false }} dpr={window.devicePixelRatio} className="canvas">
        <Perf position="top-left" />
        <Sparkles count={1000} size={3} scale={[20, 10, 250]} position={[0, 0, -125]} />
        <ambientLight intensity={0.8} />
        <ScrollControls pages={80} damping={0.4}>
          <Project />
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default App;
