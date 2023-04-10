import { useRef, useEffect } from 'react';

export function useScroll(containRef: any) {
  const elRef = useRef<any>();

  useEffect(() => {
    const el = elRef.current;
    const container = containRef.current;

    if (el) {
      const setStickyContainersSize = () => {
        if (container) {
          const stickyContainerHeight = container.scrollWidth;

          container.setAttribute(
            'style',
            'height: ' + stickyContainerHeight + 'px'
          );
        }
      };

      const isElementInViewport = (el: any) => {
        const rect = el.getBoundingClientRect();

        return (
          rect.top <= 0 && rect.bottom > document.documentElement.clientHeight
        );
      };

      setStickyContainersSize();

      const onWheel = (e: any) => {
        if (e.deltaY === 0) return;
        const containerInViewPort = isElementInViewport(container);

        if (!containerInViewPort) {
          return;
        }

        e.preventDefault();

        var isPlaceHolderBelowTop =
          el.offsetTop < document.documentElement.scrollTop;
        var isPlaceHolderBelowBottom =
          el.offsetTop + el.offsetHeight > document.documentElement.scrollTop;
        let g_canScrollHorizontally =
          isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

        if (g_canScrollHorizontally) {
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            // behavior: strength > 70 ? 'auto' : 'smooth',
          });
        }
      };

      el.addEventListener('wheel', onWheel);

      return () => {
        el.removeEventListener('wheel', onWheel);
      };
    }
  }, [containRef]);
  return elRef;
}
