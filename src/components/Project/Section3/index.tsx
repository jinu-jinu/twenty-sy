import MainTitle from './MainTitle';
import SubTitle1 from './SubTitle1';
import SubTitle2 from './SubTitle2';
import SubTitle3 from './SubTitle3';
import SubTitle4 from './SubTitle4';
import Image1 from './Image1';
import Image2 from './Image2';
import Image3 from './Image3';
import Image4 from './Image4';
import Video1 from './Video1';
import Video2 from './Video2';
import ModelHeart from './ModelHeart';
import { useScroll } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import { Group, Mesh } from 'three';
import gsap from 'gsap';

const SCROLL_START = 0.17;

const Section3 = () => {
  const scroll = useScroll();
  const tl = useRef<gsap.core.Timeline>(null!);
  const [mainTitle, subTitle1, moon, image1, subTitle2, video1, subTitle3, image2] = [
    useRef<Group>(null!),
    useRef<any>(),
    useRef<any>(),
    useRef<Group>(null!),
    useRef<any>(),
    useRef<Group>(null!),
    useRef<any>(),
    useRef<Group>(null!),
  ];

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        scrub: true,
      },
    });

    // // maintitle
    // mainTitle.current.children.forEach(c => {
    //   tl.current.to(
    //     c,
    //     {
    //       fillOpacity: 1,
    //       duration: 3,
    //     },
    //     'main-title'
    //   );
    // });

    // // sub1
    // tl.current
    //   .to(moon.current.scale, {
    //     x: 0.08,
    //     y: 0.08,
    //     z: 0.08,
    //     duration: 1,
    //   })
    //   .to(subTitle1.current, {
    //     fillOpacity: 1,
    //     duration: 1.5,
    //   });

    // image1.current.children.forEach(c => {
    //   const material = (c as Mesh).material;
    //   tl.current.to(
    //     material,
    //     {
    //       opacity: 1,
    //       duration: 2,
    //     },
    //     'sub1-image'
    //   );
    // });

    // // sub2
    // tl.current.to(subTitle2.current, {
    //   fillOpacity: 1,
    //   duration: 2,
    // });
    // video1.current.children.forEach(c => {
    //   const geometry = (c as any).geometry;
    //   const material = (c as any).material;
    //   if (geometry.type === 'PlaneGeometry') {
    //     tl.current.to(
    //       material,
    //       {
    //         opacity: 1,
    //         duration: 2,
    //       },
    //       'sub2-video'
    //     );
    //   } else {
    //     tl.current.to(
    //       c,
    //       {
    //         fillOpacity: 1,
    //         duration: 2,
    //       },
    //       'sub2-video'
    //     );
    //   }
    // });

    // // sub3
    // tl.current.to(subTitle3.current, {
    //   duration: 1,
    //   fillOpacity: 2,
    // });
    // image2.current.children.forEach(c => {
    //   const material = (c as Mesh).material;
    //   tl.current.to(
    //     material,
    //     {
    //       opacity: 1,
    //       duration: 2,
    //     },
    //     'sub2-image'
    //   );
    // });

    return () => {
      moon.current.geometry.dispose();
      moon.current.material.dispose();
    };
  }, []);

  return (
    <group position={[0, 0, -28]}>
      <group>
        <MainTitle />
        <Video1 />
      </group>

      <group position={[0, 0, -9]}>
        <SubTitle1 />
        <Image1 />
      </group>

      <group position={[0, 0, -14]}>
        <SubTitle2 />
        <Image2 />
      </group>

      <group position={[0, 0, -20]}>
        <SubTitle3 />
        <ModelHeart />
        <Video2 />
        <Image3 />
      </group>

      <group position={[0, 0, -25]}>
        <SubTitle4 />
        <Image4 />
      </group>
    </group>
  );
};

export default Section3;
