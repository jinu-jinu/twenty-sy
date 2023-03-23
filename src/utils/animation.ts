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

export const posYAni = (target: any, y: number, duration: number = 1): void => {
  gsap.to(target.position, {
    duration,
    y,
    ease: 'power3.out',
  });
};

export const posXAni = (target: any, x: number, duration: number = 1): void => {
  gsap.to(target.position, {
    duration,
    x,
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

export const videoHandler = (target: any, offset: number) => {
  opacityAni(target, offset);
};
