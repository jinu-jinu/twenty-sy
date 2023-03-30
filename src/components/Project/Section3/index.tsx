import MainTitle from './MainTitle';
import SubTitle1 from './SubTitle1';
import SubTitle2 from './SubTitle2';
import SubTitle3 from './SubTitle3';
import SubTitle4 from './SubTitle4';
import Image1 from './Image1';
import Image2 from './Image2';
import Image3 from './Image3';
import Image4 from './Image4';
import ModelHeart from './ModelHeart';
import { useScroll } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import { Group, Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

const SCROLL_START = 0.16;

const Section3 = () => {
  const scroll = useScroll();
  const tl = useRef<gsap.core.Timeline>(null!);
  const mainTitle = useRef<Group>(null!);
  const heart = useRef<any>();
  const [subTitle1, subTitle2, subTitle3, subTitle4, videoTitle] = [
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<any>(),
    useRef<Group>(null!),
    useRef<any>(),
  ];
  const [image1, image2, image3, image4] = [
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
  ];

  useFrame(() => {
    // console.log(
    //   (scroll.offset - SCROLL_START) * 5 * tl.current.duration(),
    //   tl.current.duration()
    // );

    tl.current.seek((scroll.offset - SCROLL_START) * 5 * tl.current.duration());
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
          duration: 3,
          delay: 1,
        },
        'main-title'
      );
    });

    // sub1
    subTitle1.current.children.forEach((c, i) => {
      tl.current.to(c, {
        fillOpacity: 1,
        duration: 1.5,
        delay: i === 0 ? 6 : 0,
      });
    });

    image1.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 3,
        },
        'sub1-image'
      );
    });

    // sub2
    subTitle2.current.children.forEach((c, i) => {
      tl.current.to(c, {
        fillOpacity: 1,
        duration: 1.5,
        delay: i === 0 ? 1 : 0,
      });
    });

    image2.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 3,
        },
        'sub2-image'
      );
    });

    // sub3
    tl.current
      .to(subTitle3.current, {
        fillOpacity: 1,
        duration: 2,
        delay: 1,
      })
      .to(heart.current.scale, {
        x: 0.3,
        y: 0.3,
        z: 0.3,
        duration: 0.5,
      });

    image3.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 2,
          delay: 2,
        },
        'sub3-image'
      );
    });

    // sub4
    image4.current.children.forEach((c, i) => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 2,
          delay: 2.5,
        },
        'sub4-image'
      );
    });

    subTitle4.current.children.forEach((c, i) => {
      tl.current.to(c, {
        fillOpacity: 1,
        duration: 1,
      });
    });

    return () => {
      heart.current.geometry.dispose();
      heart.current.material.dispose();
    };
  }, []);

  return (
    <group position={[0, 0, -27]}>
      <group>
        <MainTitle ref={mainTitle} />
      </group>

      <group position={[0, 0, -8]}>
        <SubTitle1 ref={subTitle1} />
        <Image1 ref={image1} />
      </group>

      <group position={[0, 0, -13]}>
        <SubTitle2 ref={subTitle2} />
        <Image2 ref={image2} />
      </group>

      <group position={[0, 0, -19]}>
        <SubTitle3 ref={subTitle3} />
        <ModelHeart ref={heart} />
        <Image3 ref={image3} />
      </group>

      <group position={[0, -0.1, -26]}>
        <SubTitle4 ref={subTitle4} />
        <Image4 ref={image4} />
      </group>
    </group>
  );
};

export default Section3;
