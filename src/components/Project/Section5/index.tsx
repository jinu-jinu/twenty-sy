import MainTitle from './MainTitle';
import MainImage from './MainImage';
import SubTitle1 from './SubTitle1';
import SubTitle2 from './SubTitle2';
import Image1 from './Image1';
import Image2 from './Image2';
import Image3 from './Image3';
import Image4 from './Image4';
import Image5 from './Image5';
import Image6 from './Image6';
import Image7 from './Image7';
import Image8 from './Image8';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Group, Mesh } from 'three';

const SCROLL_START = 0.575;

const Section5 = () => {
  const scroll = useScroll();
  const tl = useRef<gsap.core.Timeline>(null!);
  const [mainTitle, mainImage] = [useRef<Group>(null!), useRef<any>()];
  const [image1, image2, image3, image4, image5, image6, image7, image8] = [
    useRef<any>(),
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<any>(),
  ];
  const [subTitle1, subTitle2] = [useRef<Group>(null!), useRef<Group>(null!)];

  useFrame(() => {
    tl.current.seek((scroll.offset - SCROLL_START) * 7.2 * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        scrub: true,
      },
    });

    // // main title,image
    mainTitle.current.children.forEach(c => {
      tl.current.to(
        c,
        {
          fillOpacity: 1,
          duration: 1.7,
        },
        's4-main-title'
      );
    });

    tl.current
      .to(mainImage.current.material, {
        opacity: 1,
        duration: 2,
      })
      .to(mainImage.current.material, {
        opacity: 0,
        duration: 3,
      });

    // subtitle
    subTitle1.current.children.forEach(c => {
      tl.current.to(c, {
        fillOpacity: 1,
        duration: 0.2,
      });
    });

    subTitle2.current.children.forEach(c => {
      tl.current.to(c, {
        fillOpacity: 1,
        duration: 0.1,
      });
    });

    // images
    tl.current.to(image1.current.material, {
      opacity: 1,
      duration: 1.5,
      delay: 0.5,
    });

    image2.current.children.forEach((c, i) => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: i ? 0.6 : 1,
        },
        `s5-image2-${i <= 1 ? 0 : 1}`
      );
    });

    image3.current.children.forEach((c, i) => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 1,
          delay: 0.5,
        },
        's5-image3'
      );
    });

    image4.current.children.forEach((c, i) => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: i <= 1 ? 1 : 0.5,
          delay: i <= 1 ? 0.5 : 0,
        },
        `s5-image4-${i <= 1 ? 0 : 1}`
      );
    });

    image5.current.children.forEach((c, i) => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: i <= 1 ? 1 : 0.5,
        },
        `s5-image5-${i <= 1 ? 0 : 1}`
      );
    });

    image6.current.children.forEach((c, i) => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 1,
          delay: 0.5,
        },
        's5-image6'
      );
    });

    image7.current.children.forEach((c, i) => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 1,
        },
        's5-image7'
      );
    });

    tl.current.to(image8.current.material, {
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <>
      <group position={[0, 0, -86]}>
        <group>
          <MainTitle ref={mainTitle} />
          <MainImage ref={mainImage} />
        </group>

        <group position={[0, 0, -12]}>
          <SubTitle1 ref={subTitle1} />
          <SubTitle2 ref={subTitle2} />
          <Image1 ref={image1} />
          <Image2 ref={image2} />
          <Image3 ref={image3} />
          <Image4 ref={image4} />
          <Image5 ref={image5} />
          <Image6 ref={image6} />
          <Image7 ref={image7} />
          <Image8 ref={image8} />
        </group>
      </group>
    </>
  );
};

export default Section5;
