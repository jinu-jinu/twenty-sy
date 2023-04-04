import { SMALL } from '@/utils/constant';
import { useEffect, useState } from 'react';

export const useDimension = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return dimensions;
};

export const deviceOffset = () => {
  const { width } = useDimension();
  return width - SMALL < 0 ? 0 : (width - SMALL) / 6000;
};
