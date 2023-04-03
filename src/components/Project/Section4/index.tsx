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
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { Group, Mesh } from 'three';

const SCROLL_START = 0.385;

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
  const [subTitle1, subTitle2, subTitle3, subTitle4] = [
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
  ];

  useFrame(() => {
    // console.log(
    //   (scroll.offset - SCROLL_START) * 5.3 * tl.current.duration(),
    //   tl.current.duration()
    // );
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
          opacity: 0.8,
          duration: 1,
        },
        `s4-main-image${i - 1}`
      );
      tl.current.to(
        material,
        {
          opacity: 0,
          duration: 1.5,
        },
        `s4-main-image${i}`
      );
    });

    // sub1, sub2, sub3
    subTitle1.current.children.forEach(c => {
      tl.current.to(
        c,
        {
          fillOpacity: 1,
          duration: 1.5,
        },
        's4-sub1'
      );
    });

    image1.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 1.5,
        },
        's4-sub1'
      );
    });

    subTitle2.current.children.forEach(c => {
      tl.current.to(
        c,
        {
          fillOpacity: 1,
          duration: 1.5,
        },
        's4-sub2'
      );
    });

    image2.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 1.5,
        },
        's4-sub2'
      );
    });

    subTitle3.current.children.forEach(c => {
      tl.current.to(
        c,
        {
          fillOpacity: 1,
          duration: 1.5,
        },
        's4-sub3'
      );
    });

    image3.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 1.5,
        },
        's4-sub3'
      );
    }); // 14.5

    // imagetitle1, image4,5,6
    imageTitle1.current.children.forEach(c => {
      const geoType = (c as Mesh).geometry.type;
      const material = (c as Mesh).material;

      if (geoType === 'PlaneGeometry')
        tl.current.to(
          material,
          {
            opacity: 1,
            duration: 0.5,
            delay: 2,
          },
          's4-imageTitle1'
        );
      else
        tl.current.to(
          c,
          {
            fillOpacity: 1,
            duration: 0.5,
            delay: 2,
          },
          's4-imageTitle1'
        );
    });

    image4.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(material, {
        opacity: 1,
        duration: 0.5,
      });
    });

    image5.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(material, {
        opacity: 1,
        duration: 0.5,
      });
    });

    image6.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(material, {
        opacity: 1,
        duration: 0.4,
      });
    });
  }, []);

  return (
    <>
      <group position={[0, 0, -59]}>
        <group>
          <MainTitle ref={mainTitle} />
          <MainImage ref={mainImage} />
        </group>

        <group position={[-0.3, -0.1, -17]}>
          <SubTitle1 ref={subTitle1} />
          <Image1 ref={image1} />
          <SubTitle2 ref={subTitle2} />
          <Image2 ref={image2} />
          <SubTitle3 ref={subTitle3} />
          <Image3 ref={image3} />
        </group>

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
