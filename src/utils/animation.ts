import gsap from 'gsap';

export const fontSizeAni = <T extends gsap.TweenTarget>(
  target: T,
  offset: number,
  normal: number,
  max: number
): void => {
  const v = normal + offset;
  const fontSize = v < max ? v : max;

  gsap.to(target, {
    duration: 1,
    fontSize,
  });
};

export const upToDownAni = (target: any, offset: number, start: number): void => {
  gsap.to(target.position, {
    duration: 1,
    y: start - offset * start,
  });
};

export const leftToRightAni = (target: any, offset: number, start: number): void => {
  gsap.to(target.position, {
    duration: 1,
    x: start - offset * start,
    ease: 'power3.out',
  });
};

export const fillOpacityAni = <T extends gsap.TweenTarget>(
  target: T,
  offset: number = 0,
  duration: number = 1
): void => {
  gsap.to(target, {
    duration,
    fillOpacity: offset,
    ease: 'power3.out',
  });
};

export const opacityAni = <T extends gsap.TweenTarget>(
  target: T,
  offset: number,

  duration: number = 1
): void => {
  gsap.to(target, {
    duration,
    opacity: offset,
    ease: 'power3.out',
  });
};

export const videoHandler = (
  target: any,
  offset: number,
  visible?: boolean,
  set?: (value: React.SetStateAction<boolean>) => void
) => {
  opacityAni(target, offset);
};
