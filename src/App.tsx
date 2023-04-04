import { GlobalStyle } from './globalStyle';
import { Canvas } from '@react-three/fiber';
import { Scroll, ScrollControls, Sparkles } from '@react-three/drei';
import Project from './components/Project';
import { Perf } from 'r3f-perf';
import CameraControl from './components/Camera/CameraControl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Canvas
        gl={{ antialias: false }}
        dpr={Math.min(devicePixelRatio, 2)}
        className="canvas"
      >
        <Sparkles count={1000} size={3} scale={[20, 10, 170]} position={[0, 0, -85]} />
        <ambientLight intensity={1} />
        <Perf />

        <ScrollControls pages={60} damping={1}>
          <Scroll html>
            <div className="svg-container">
              <div className="box">
                <p>SCROLL</p>
                <div className="arrow-svg-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                    <path
                      fill="currentColor"
                      d="M12 14.95q-.2 0-.375-.063-.175-.062-.325-.212L6.675 10.05q-.275-.275-.262-.688.012-.412.287-.687.275-.275.7-.275.425 0 .7.275l3.9 3.9 3.925-3.925q.275-.275.688-.263.412.013.687.288.275.275.275.7 0 .425-.275.7l-4.6 4.6q-.15.15-.325.212-.175.063-.375.063Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Scroll>

          <CameraControl />
          <Project />
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default React.memo(App);
