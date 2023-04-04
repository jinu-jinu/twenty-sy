import MainTitle from './MainTitle';
import MainImage from './MainImage';
import SubTitle1 from './SubTitle1';
import SubTitle2 from './SubTitle2';
import SubTitle3 from './SubTitle3';
import Image1 from './Image1';
import Image2 from './Image2';
import Image3 from './Image3';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Group, Mesh } from 'three';

const SCROLL_START = 0.765;

const Section6 = () => {
  const scroll = useScroll();
  const tl = useRef<gsap.core.Timeline>(null!);
  const [mainTitle, mainImage] = [useRef<Group>(null!), useRef<any>()];
  const [image1, image2, image3] = [
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
  ];
  const [subTitle1, subTitle2, subTitle3] = [
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
  ];

  useFrame(() => {
    // console.log(
    //   (scroll.offset - SCROLL_START) * 4.3 * tl.current.duration(),
    //   tl.current.duration()
    // );
    tl.current.seek((scroll.offset - SCROLL_START) * 4.3 * tl.current.duration());
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
          duration: 1.5,
        },
        's4-main-title'
      );
    });

    tl.current
      .to(mainImage.current.material, {
        opacity: 1,
        duration: 3,
      })
      .to(mainImage.current.material, {
        opacity: 0,
        duration: 3,
      });

    // sub1
    subTitle1.current.children.forEach((c, i) => {
      tl.current.to(c, {
        fillOpacity: 1,
        duration: i > 1 ? 0.5 : 1,
      });
    });

    image1.current.children.forEach((c, i) => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 1,
        },
        's6-image1'
      );
    });

    subTitle1.current.children.forEach((c, i) => {
      tl.current.to(
        c,
        {
          fillOpacity: 0,
          duration: 1,
          delay: i === 0 ? 0.5 : 0,
        },
        's6-sub1-end'
      );
    });

    image1.current.children.forEach((c, i) => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 0,
          duration: 1,
          delay: i === 0 ? 0.5 : 0,
        },
        's6-sub1-end'
      );
    });

    // sub2
    subTitle2.current.children.forEach(c => {
      tl.current.to(c, {
        fillOpacity: 1,
        duration: 1,
      });
    });

    image2.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(material, {
        opacity: 0.9,
        duration: 1,
      });
    });

    subTitle2.current.children.forEach((c, i) => {
      tl.current.to(
        c,
        {
          fillOpacity: 0,
          duration: 1,
          delay: i === 0 ? 0.5 : 0,
        },
        's6-sub2-end'
      );
    });

    image2.current.children.forEach((c, i) => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 0,
          duration: 1,
          delay: i === 0 ? 0.5 : 0,
        },
        's6-sub2-end'
      );
    });

    // sub3
    image3.current.children.forEach((c, i) => {
      const material = (c as Mesh).material;
      tl.current.to(material, {
        opacity: 1,
        duration: 0.7,
        delay: i === 0 ? 0.6 : 0,
      });
    });

    subTitle3.current.children.forEach((c, i, arr) => {
      const onceLastTwo = i === arr.length - 1 ? i - 1 : i;

      tl.current.to(
        c,
        {
          fillOpacity: 1,
          duration: 0.5,
        },
        `s6-sub3-title-${onceLastTwo}`
      );
    });
  }, []);

  return (
    <group position={[0, 0, -113.5]}>
      <group>
        <MainTitle ref={mainTitle} />
        <MainImage ref={mainImage} />
      </group>

      <group position={[0, 0, -16]} scale={4}>
        <SubTitle1 ref={subTitle1} />
        <Image1 ref={image1} />
      </group>

      <group position={[0, 0, -22]}>
        <SubTitle2 ref={subTitle2} />
        <Image2 ref={image2} />
      </group>

      <group position={[0, 0, -36]}>
        <SubTitle3 ref={subTitle3} />
        <Image3 ref={image3} />
      </group>
    </group>
  );
};

export default Section6;
