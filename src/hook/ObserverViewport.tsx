import { useEffect, useRef } from 'react';

const ObserverViewport = () => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    const animationWhenDisplayed = () => {
      if (el) {
        if (window.innerHeight > el.getBoundingClientRect().top) {
          el.classList.add('moveUp');
        } else {
          el.classList.remove('moveUp');
        }
      }
    };

    window.addEventListener('scroll', animationWhenDisplayed);

    return () => window.removeEventListener('scroll', animationWhenDisplayed);
  }, []);

  return elRef;
};

export default ObserverViewport;
