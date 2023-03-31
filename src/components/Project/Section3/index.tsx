import MainTitle from './MainTitle';
import SubTitle1 from './SubTitle1';
import SubTitle3 from './SubTitle3';
import SubTitle4 from './SubTitle4';
import Image1 from './Image1';
import Image3 from './Image3';
import Image4 from './Image4';
import ModelHeart from './ModelHeart';
import { useScroll } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import { Group, Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import gsap, { Bounce, Power0 } from 'gsap';
import MainImage from './MainImage';

const SCROLL_START = 0.18;

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
  const [mainImage, image1, image2, image3, image4] = [
    useRef<any>(),
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
  ];

  useFrame(() => {
    console.log(
      (scroll.offset - SCROLL_START) * 5.3 * tl.current.duration(),
      tl.current.duration()
    );

    tl.current.seek((scroll.offset - SCROLL_START) * 5.3 * tl.current.duration());
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
        duration: 3,
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
          duration: 0.5,
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

    // sub3
    tl.current
      .to(subTitle3.current, {
        fillOpacity: 1,
        duration: 0.95,
      })
      .to(heart.current.scale, {
        x: 0.3,
        y: 0.3,
        z: 0.3,
        duration: 0.5,
        ease: Bounce.easeOut,
      });

    image3.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 1.3,
        },
        'sub3-image'
      );
    });

    // sub4  14 ~
    image4.current.children.forEach((c, i) => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          delay: 1,
          duration: 1,
        },
        'sub4-image'
      );
    });

    subTitle4.current.children.forEach((c, i, arr) => {
      const last = i === arr.length - 1;

      console.log(i - 1, arr.length);
      tl.current.to(c, {
        fillOpacity: 1,
        fontSize: last ? 0.3 : 0.1,
        duration: 0.5,
        ease: last ? Bounce.easeOut : Power0.easeNone,
      });
    });

    return () => {
      heart.current.geometry.dispose();
      heart.current.material.dispose();
    };
  }, []);

  return (
    <group position={[0, 0, -29]}>
      <group>
        <MainTitle ref={mainTitle} />
        <MainImage ref={mainImage} />
      </group>

      <group position={[0, 0, -9]}>
        <SubTitle1 ref={subTitle1} />
        <Image1 ref={image1} />
      </group>

      <group position={[0, 0, -19]}>
        <SubTitle3 ref={subTitle3} />
        <ModelHeart ref={heart} />
        <Image3 ref={image3} />
      </group>

      <group position={[0, -0.2, -26]}>
        <SubTitle4 ref={subTitle4} />
        <Image4 ref={image4} />
      </group>
    </group>
  );
};

export default Section3;
