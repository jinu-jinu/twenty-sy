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
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

const SCROLL_START = 0.16;

// text4 = 0.1 ~~~~ 0.3

const Section3 = () => {
  const scroll = useScroll();
  const tl = useRef<gsap.core.Timeline>(null!);
  const mainTitle = useRef<Group>(null!);
  const heart = useRef<any>();
  const [video1, video2] = [useRef<any>(), useRef<Group>(null!)];
  const [subTitle1, subTitle2, subTitle3, subTitle4] = [
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<any>(),
    useRef<Group>(null!),
  ];
  const [image1, image2, image3, image4] = [
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
    useRef<Group>(null!),
  ];

  useFrame(() => {
    console.log(
      (scroll.offset - SCROLL_START) * 5 * tl.current.duration(),
      tl.current.duration()
    );

    // 스크롤 몇퍼센트에 끝나는지 알아낸 후 조절하기
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

    // video1
    tl.current
      .to(video1.current, {
        opacity: 1,
        duration: 4,
      })
      .to(video1.current, {
        opacity: 0,
        duration: 2,
      });

    // sub1
    subTitle1.current.children.forEach(c => {
      tl.current.to(c, {
        fillOpacity: 1,
        duration: 1.5,
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

    video2.current.children.forEach(c => {
      const geometry = (c as any).geometry;
      const material = (c as any).material;
      if (geometry.type === 'PlaneGeometry') {
        tl.current.to(
          material,
          {
            opacity: 1,
            duration: 2,
          },
          'sub2-video'
        );
      } else {
        tl.current.to(
          c,
          {
            fillOpacity: 1,
            duration: 2,
          },
          'sub2-video'
        );
      }
    });

    image3.current.children.forEach(c => {
      const material = (c as Mesh).material;
      tl.current.to(
        material,
        {
          opacity: 1,
          duration: 2,
        },
        'sub3-image'
      );
    });

    // sub4 30.5
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
        <Video1 ref={video1} />
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
        <Video2 ref={video2} />
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
