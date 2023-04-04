import MainTitle from './MainTitle';
import MainImage from './MainImage';
import SubTitle1 from './SubTitle1';
import SubTitle2 from './SubTitle2';
import SubTitle3 from './SubTitle3';
import Image1 from './Image1';
import Image2 from './Image2';
import Image3 from './Image3';
import Image4 from './Image4';
import Image5 from './Image5';
import Image6 from './Image6';
import ImageTitle1 from './ImageTitle1';
import { useLayoutEffect, useRef } from 'react';
import { Float, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { Group, Mesh } from 'three';

const SCROLL_START = 0.355;

const Section4 = () => {
  const scroll = useScroll();
  const tl = useRef<gsap.core.Timeline>(null!);
  const [mainTitle, mainImage, imageTitle1] = [
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
  ];
  const [image1, image2, image3, image4, image5, image6] = [
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
  ];
  const [subTitle1, subTitle2, subTitle3] = [
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
  ];

  useFrame(() => {
    tl.current.seek((scroll.offset - SCROLL_START) * 5.3 * tl.current.duration());
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

    mainImage.current.children.forEach((c, i) => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 2,
        },
        `s4-main-image${i - 1}`
      );
      tl.current.to(
        material,
        {
          opacity: 0,
          duration: 2.5,
        },
        `s4-main-image${i}`
      );
    });

    // sub1
    subTitle1.current.children.forEach(c => {
      tl.current.to(
        c,
        {
          fillOpacity: 1,
          duration: 1,
          delay: 0.5,
        },
        's4-sub1-title'
      );
    });

    image1.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 1,
        },
        's4-sub1-image'
      );
    });

    subTitle1.current.children.forEach(c => {
      tl.current.to(
        c,
        {
          fillOpacity: 0,
          duration: 1,
          delay: 0.5,
        },
        's4-sub1-end'
      );
    });
    image1.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 0,
          duration: 1,
          delay: 0.5,
        },
        's4-sub1-end'
      );
    });

    // sub2
    subTitle2.current.children.forEach(c => {
      tl.current.to(
        c,
        {
          fillOpacity: 1,
          duration: 1,
          delay: 0.5,
        },
        's4-sub2-title'
      );
    });

    image2.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 1,
        },
        's4-sub2-image'
      );
    });

    subTitle2.current.children.forEach(c => {
      tl.current.to(
        c,
        {
          fillOpacity: 0,
          duration: 1,
          delay: 0.5,
        },
        's4-sub2-end'
      );
    });
    image2.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 0,
          duration: 1,
          delay: 0.5,
        },
        's4-sub2-end'
      );
    });

    // sub3
    subTitle3.current.children.forEach(c => {
      tl.current.to(
        c,
        {
          fillOpacity: 1,
          duration: 1,
          delay: 0.5,
        },
        's4-sub3-title'
      );
    });

    image3.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 1,
        },
        's4-sub3-image'
      );
    });

    subTitle3.current.children.forEach(c => {
      tl.current.to(
        c,
        {
          fillOpacity: 0,
          duration: 1,
          delay: 0.5,
        },
        's4-sub3-end'
      );
    });

    image3.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 0,
          duration: 1,
          delay: 0.5,
        },
        's4-sub3-end'
      );
    });

    // imagetitle1, image4,5,6
    imageTitle1.current.children.forEach(c => {
      const geoType = (c as Mesh).geometry.type;
      const material = (c as Mesh).material;

      if (geoType === 'PlaneGeometry')
        tl.current.to(
          material,
          {
            opacity: 1,
            duration: 1,
            delay: 1,
          },
          's4-imageTitle1'
        );
      else
        tl.current.to(
          c,
          {
            fillOpacity: 1,
            duration: 1,
            delay: 1,
          },
          's4-imageTitle1'
        );
    });

    image4.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 1,
          delay: 0.5,
        },
        's4-imag4'
      );
    });

    image5.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 1,
          delay: 0.5,
        },
        's4-image5'
      );
    });

    image6.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 1,
          delay: 0.5,
        },
        's4-image6'
      );
    });
  }, []);

  return (
    <>
      <group position={[0, 0, -54.5]}>
        <group>
          <MainTitle ref={mainTitle} />
          <MainImage ref={mainImage} />
        </group>

        <Float speed={1.5} floatIntensity={0.5} rotationIntensity={0.2}>
          <group position={[0, -0.1, -13]}>
            <SubTitle1 ref={subTitle1} />
            <Image1 ref={image1} />
          </group>
        </Float>

        <Float speed={1.5} floatIntensity={0.5} rotationIntensity={0.2}>
          <group position={[0, -0.9, -17]}>
            <SubTitle2 ref={subTitle2} />
            <Image2 ref={image2} />
          </group>
        </Float>

        <Float speed={1.5} floatIntensity={0.5} rotationIntensity={0.2}>
          <group position={[-0.5, 0.5, -20]}>
            <SubTitle3 ref={subTitle3} />
            <Image3 ref={image3} />
          </group>
        </Float>

        <group position={[0, -0.15, -27]}>
          <ImageTitle1 ref={imageTitle1} />
          <Image4 ref={image4} />
          <Image5 ref={image5} />
          <Image6 ref={image6} />
        </group>
      </group>
    </>
  );
};

export default Section4;
