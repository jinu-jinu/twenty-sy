import { Image, useScroll } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { opacityAni } from '@/utils/animation';

const Image1 = () => {
  const img1 = useRef<any>();
  const img2 = useRef<any>();
  const scroll = useScroll();

  useFrame(() => {
    const scrollOffset1 = scroll.curve(0.91 / 1, 0.018 / 1);
    const scrollOffset2 = scroll.curve(0.912 / 1, 0.014 / 1);

    if (img1.current) opacityAni(img1.current.material, scrollOffset1, 1);
    if (img2.current) opacityAni(img2.current.material, scrollOffset2, 1);
  });

  return (
    <>
      <Image
        url={`/image/section2/part3/twenty1.webp`}
        transparent
        opacity={0}
        position={[-0.5, -0.3, -0.6]}
        scale={[1.3, 1]}
        ref={img1}
      />
      <Image
        url={`/image/section2/part3/twenty2.webp`}
        transparent
        opacity={0}
        position={[0.3, 0.3, -0.1]}
        scale={[1, 1.5]}
        ref={img2}
      />
    </>
  );
};

export default Image1;
