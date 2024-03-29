import MainTitle from './MainTitle';
import SubTitle1 from './SubTitle1';
import SubTitle2 from './SubTitle2';
import SubTitle3 from './SubTitle3';
import Image1 from './Image1';
import Image2 from './Image2';
import Image3 from './Image3';
import ModelMoon from './ModelMoon';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Group, Mesh } from 'three';

const SCROLL_START = 0.04;

const Section2 = () => {
  const scroll = useScroll();
  const tl = useRef<gsap.core.Timeline>(null!);
  const [mainTitle, moon] = [useRef<Group>(null!), useRef<any>()];
  const [subTitle1, subTitle2, subTitle3] = [
    useRef<any>(),
    useRef<Group>(null!),
    useRef<any>(),
  ];
  const [image1, image2, image3] = [
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
  ];

  useFrame(() => {
    tl.current.seek((scroll.offset - SCROLL_START) * 9 * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        scrub: true,
      },
    });

    // maintitle
    mainTitle.current.children.forEach(c => {
      tl.current.to(
        c,
        {
          fillOpacity: 1,
          duration: 1,
        },
        'main-title'
      );
    });

    // sub1
    tl.current
      .to(moon.current.scale, {
        x: 0.08,
        y: 0.08,
        z: 0.08,
        duration: 0.4,
        delay: 1,
      })
      .to(subTitle1.current, {
        fillOpacity: 1,
        duration: 0.5,
      });

    image1.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 1,
        },
        'sub1-image'
      );
    });

    // sub2
    tl.current.to(subTitle2.current, {
      fillOpacity: 1,
      duration: 0.6,
      delay: 1.2,
    });
    image2.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 1,
        },
        'sub2-image'
      );
    });

    // sub3
    tl.current.to(subTitle3.current, {
      fillOpacity: 1,
      duration: 0.5,
      delay: 1.5,
    });
    image3.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 0.6,
        },
        'sub3-image'
      );
    });

    return () => {
      moon.current.geometry.dispose();
      moon.current.material.dispose();
    };
  }, []);

  return (
    <group position={[0, 0, -9]}>
      <group>
        <MainTitle ref={mainTitle} />
      </group>

      <group position={[0, 0, -5]}>
        <SubTitle1 ref={subTitle1} />
        <ModelMoon ref={moon} />
        <Image1 ref={image1} />
      </group>

      <group position={[0, 0, -10]}>
        <SubTitle2 ref={subTitle2} />
        <Image2 ref={image2} />
      </group>

      <group position={[0, 0, -17]}>
        <SubTitle3 ref={subTitle3} />
        <Image3 ref={image3} />
      </group>
    </group>
  );
};

export default Section2;
