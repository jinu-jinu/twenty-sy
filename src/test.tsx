import { useRef, useEffect, useState, useContext, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Preload, ScrollControls, useScroll } from '@react-three/drei';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

import { Model } from '../components/Canvas/Model';
import ProjectCards from '../components/Canvas/ProjectCards';
import { lenis } from '../components/Scroller';
import MenuElementsOpen from '../components/HeaderElements/MenuElementsOpened';
import Hint from '../components/Canvas/Hint';
import { AnimatePresence } from 'framer-motion';
import axios from 'axios';
import Loader from '../components/Loader';
gsap.registerPlugin(ScrollTrigger);

const defaultDistance = 135.40794;

// A CLUSTER OF THE MODEL AND PROJECT IMAGES AND VIDEO TEXTURES + DUPLICATED BEFORE + DUPLICATED AFTER
const ModelCluster = (props: {
  projects: any;
  setScrollStarted: any;
  loadedVideos: any;
  setLoadedVideos: any;
}) => {
  const group = useRef<any>();
  const scroll = useScroll();

  // variable for use in touch event handlers
  let initialScroll = 0;
  let scrollTop = 0;

  // destroying Lenis
  const scrollLenis = lenis;
  useEffect(() => {
    if (scrollLenis) {
      scrollLenis.destroy();
    }
  }, [scrollLenis]);

  ////////////////// TOUCH HANDLER TO ELIMINATE START AND ENDING ISSUE
  useEffect(() => {
    scroll.el.addEventListener('touchstart', (ev: any) => {
      initialScroll = ev.touches[0].screenY;
      scrollTop = scroll.el.scrollTop;
    });

    // scroll.el.addEventListener("touchend", (ev: any) => {
    //   ev.preventDefault();
    //   // snapping goes in here
    // });

    scroll.el.addEventListener('touchmove', (ev: any) => {
      ev.preventDefault();
      const fillHeight = scroll.fill.offsetHeight;
      const scrollToPos = scrollTop - (ev.touches[0].screenY - initialScroll) * 6;

      if (scrollToPos < fillHeight - 10 && scrollToPos > 10) {
        scroll.el.scrollTo(0, scrollToPos);
        return;
      }

      if (scrollToPos >= fillHeight + 10) {
        scroll.el.scrollBy(0, 60);
        return;
      }

      if (scrollToPos <= 10) {
        scroll.el.scrollBy(0, -60);
      }
    });
  }, []);

  useFrame(() => {
    if (!group) {
      return;
    }

    // Moving the model while scrolling
    group.current.position.x = -defaultDistance * scroll.offset - 6;

    // disable hint message
    if (scroll.offset > 0.05) {
      props.setScrollStarted(true);
    }
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* ******** MAIN MODEL ******** */}
      <group position={[0, -2, 0]}>
        <Model />
        <ProjectCards
          projects={props.projects}
          loadedVideos={props.loadedVideos}
          setLoadedVideos={props.setLoadedVideos}
        />
      </group>

      {/* ******** DUPLICATED MODEL ONE BEFORE AND ONE AFTER ******** */}
      <group position={[defaultDistance, -2, 0]}>
        <Model />
      </group>
      <group position={[-defaultDistance, -2, 0]}>
        <Model />
      </group>
    </group>
  );
};

// CAMERA ANIMATION HANDLER
const CameraTargetAnimation = (props: { windowSize: number }) => {
  const three = useThree();
  const camera = three.camera;
  const scroll = useScroll();
  const evenNumberOfProjects = 12;
  const windowWidth = props.windowSize;

  useFrame(({ clock, mouse }) => {
    const deltaClamp = 1 - THREE.MathUtils.clamp(scroll.delta * 250, 0, 1);
    const t = clock.getElapsedTime();

    /////////        Desktop camera animations
    if (windowWidth > 500) {
      camera.position.z = THREE.MathUtils.lerp(
        camera.position.z,
        -Math.cos(
          (scroll.offset - 0.5 / evenNumberOfProjects) * Math.PI * evenNumberOfProjects
        ) *
          2 *
          deltaClamp -
          mouse.x / 2 -
          Math.cos(t) / 6,
        0.05
      );

      camera.rotation.y = THREE.MathUtils.lerp(
        camera.rotation.y,
        -Math.PI / 2 +
          Math.cos(
            (scroll.offset - 0.5 / evenNumberOfProjects) * Math.PI * evenNumberOfProjects
          ) *
            0.1 *
            deltaClamp -
          mouse.x / 50,
        0.05
      );
      camera.position.y = THREE.MathUtils.lerp(
        camera.position.y,
        mouse.y / 3 - Math.sin(t) / 4,
        0.05
      );
    }

    ///////     Mobile camera animations
    else {
      camera.position.z = THREE.MathUtils.lerp(
        camera.position.z,
        -Math.cos(
          (scroll.offset - 0.5 / evenNumberOfProjects) * Math.PI * evenNumberOfProjects
        ) *
          2.9 *
          deltaClamp -
          Math.cos(t) / 6,
        0.2
      );

      camera.rotation.y = THREE.MathUtils.lerp(
        camera.rotation.y,
        -Math.PI / 2 +
          Math.cos(
            (scroll.offset - 0.5 / evenNumberOfProjects) * Math.PI * evenNumberOfProjects
          ) *
            0.12 *
            deltaClamp,
        0.2
      );

      camera.position.y = THREE.MathUtils.lerp(camera.position.y, Math.sin(t) / 4, 0.05);
    }
  });

  return null;
};

export default function Scene(props: any) {
  const [windowSize, setWindowSize] = useState<number>(600);
  const [scrollStarted, setScrollStarted] = useState<boolean>(false);
  const [projects, setProjects] = useState<any>(null);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [progress, setProgress] = useState<any>(null);
  const [loadedVideos, setLoadedVideos] = useState<any>([]);

  // handling screen size
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
  }, []);

  // Loader Context

  useEffect(() => {
    axios.get('https://cms.transparenthouse.com/homes').then(res => {
      const data = res.data;

      if (data.length < 12) {
        do {
          data.push(data[Math.ceil(data.length / 2)]);
        } while (data.length < 12);
      }

      // make sure not to take more than 12 projects
      const slicedArray = data.slice(0, 12);

      slicedArray.map((item: any, key: number) => (item.nId = key));
      setProjects(slicedArray);
    });
  }, []);

  const PreloadVideos = () => {
    const three = useThree();

    const videoMaterials: any = [];

    useEffect(() => {
      const projectCardContainer: any = three.scene.children[1].children[0].children;
      projectCardContainer.map((item: any) => {
        if (item.name === 'videoTexture') {
          videoMaterials.push(item);
          return null;
        }
      });
    }, []);

    useFrame(() => {
      if (progress === 100) return;

      // console.log(material.material.map.source.data.currentTime );
      if (loadedVideos.length > 10) {
        // Scene is loaded
        props.setPrevLoaded(true);
        setProgress(100);

        setTimeout(() => {
          setLoaded(true);
        }, 3000);
      } else {
        // Scene is loading
        setProgress((loadedVideos.length / 12) * 100);
        setLoaded(false);
      }
    });

    return null;
  };

  return projects ? (
    <>
      {!loaded && !props.prevLoaded ? (
        <AnimatePresence>
          <Loader progress={progress} />
        </AnimatePresence>
      ) : null}

      <MenuElementsOpen src={true} />

      <AnimatePresence>
        {!scrollStarted ? <Hint progress={progress} /> : null}
      </AnimatePresence>

      <div className="w-screen h-screen fixed top-0 left-0 ">
        <Canvas
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            powerPreference: 'high-performance',
            alpha: false,
          }}
          camera={{
            position: [-6, 0, 0],
            fov: 55,
            near: 0.6,
            far: 20000,
          }}
          color={'black'}
          id={'canvas'}
        >
          {/********** FOG AND BACKGROUND COLOR */}
          <fog attach="fog" color={'white'} args={['#000000', 30, 80]} />
          <color attach="background" args={['white']} />
          <ambientLight intensity={0.5} />

          {/*  */}
          {/********** INFINITE SCROLLING ELEMENTS */}
          <ScrollControls
            eps={0.001}
            infinite
            damping={windowSize > 600 ? 0.5 : 3}
            pages={14}
            distance={1.5}
          >
            {/* MODEL AND VIDEO/IMG PLANES */}
            <Suspense>
              <ModelCluster
                projects={projects}
                setScrollStarted={setScrollStarted}
                loadedVideos={loadedVideos}
                setLoadedVideos={setLoadedVideos}
              />
              <PreloadVideos />
              <Preload all />
            </Suspense>

            {/* CAMERA ANIMATION HANDLER */}
            <CameraTargetAnimation windowSize={windowSize} />
          </ScrollControls>
        </Canvas>
      </div>
    </>
  ) : null;
}
