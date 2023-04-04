import MainTitle from './MainTitle';
import MainImage from './MainImage';
import SubTitle1 from './SubTitle1';
import SubTitle2 from './SubTitle2';
import Image1 from './Image1';
import Image2 from './Image2';
import ModelHeart from './ModelHeart';
import { useScroll } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import { Group, Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import gsap, { Bounce } from 'gsap';

const SCROLL_START = 0.185;

const Section3 = () => {
  const scroll = useScroll();
  const tl = useRef<gsap.core.Timeline>(null!);
  const mainTitle = useRef<Group>(null!);
  const heart = useRef<any>();
  const [subTitle1, subTitle2] = [
    useRef<Group>(null!),
    useRef<any>(),
    useRef<Group>(null!),
  ];
  const [mainImage, image1, image2] = [
    useRef<any>(),
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
  ];

  useFrame(() => {
    // console.log(
    //   (scroll.offset - SCROLL_START) * 6.5 * tl.current.duration(),
    //   tl.current.duration()
    // );

    tl.current.seek((scroll.offset - SCROLL_START) * 6.5 * tl.current.duration());
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
          duration: 1.5,
        },
        'main-title'
      );
    });

    tl.current
      .to(mainImage.current.material, {
        opacity: 1,
        duration: 2,
      })
      .to(mainImage.current.material, {
        opacity: 0,
        duration: 1,
      });

    // sub1
    subTitle1.current.children.forEach((c, i) => {
      tl.current.to(
        c,
        {
          fillOpacity: 1,
          duration: 0.6,
        },
        'sub-title1'
      );
    });

    image1.current.children.forEach((c, i) => {
      const material = (c as Mesh).material;
      tl.current.to(material, {
        opacity: 1,
        duration: 0.45,
        delay: i === 0 ? 0.3 : 0,
      });
    });

    // sub2
    tl.current
      .to(subTitle2.current, {
        fillOpacity: 1,
        duration: 1,
        delay: 0.2,
      })
      .to(heart.current.scale, {
        x: 0.3,
        y: 0.3,
        z: 0.3,
        duration: 0.5,
        ease: Bounce.easeOut,
      });

    image2.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 1.3,
          delay: 0.65,
        },
        's3-sub2-image'
      );
    });

    return () => {
      heart.current.geometry.dispose();
      heart.current.material.dispose();
    };
  }, []);

  return (
    <group position={[0, 0, -30]}>
      <group>
        <MainTitle ref={mainTitle} />
        <MainImage ref={mainImage} />
      </group>

      <group position={[0, 0, -9]}>
        <SubTitle1 ref={subTitle1} />
        <Image1 ref={image1} />
      </group>

      <group position={[0, 0, -21]}>
        <group scale={1.2}>
          <SubTitle2 ref={subTitle2} />
          <ModelHeart ref={heart} />
        </group>
        <Image2 ref={image2} />
      </group>
    </group>
  );
};

export default Section3;
