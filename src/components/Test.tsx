// import React, { useRef } from 'react';

// import styled from 'styled-components';
// import { useScroll } from '../utils/useScroll';
// import { photos } from '../utils/photos';

// const Container = styled.section`
//   background: #000;
// `;

// const Wrapper = styled.div``;

// const List = styled.ul`
//   overflow-x: hidden;
//   white-space: nowrap;

//   display: flex;
//   position: sticky;
//   top: 0;
// `;

// const Item = styled.li`
//   min-width: 50vw;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 4ch;

//   :nth-child(even) {
//     background-color: teal;
//     color: white;
//   }

//   img {
//     max-width: 100%;
//     height: 200px;
//   }
// `;

// const Gallery = () => {
//   const containRef = useRef<HTMLDivElement>(null);
//   const scrollRef = useScroll(containRef);

//   return (
//     <Container ref={containRef}>
//       <List ref={scrollRef}>
//         {photos.map((photo) => (
//           <Item key={photo.id}>
//             <img src={photo.src} alt='' />
//           </Item>
//         ))}
//       </List>
//     </Container>
//   );
// };

// export default Gallery;

// import { useRef, useEffect } from 'react';

// export function useScroll(containRef: any) {
//   const elRef = useRef<any>();

//   useEffect(() => {
//     const el = elRef.current;
//     const container = containRef.current;

//     if (el) {
//       const setStickyContainersSize = () => {
//         if (container) {
//           const stickyContainerHeight = container.scrollWidth;

//           container.setAttribute(
//             'style',
//             'height: ' + stickyContainerHeight + 'px'
//           );
//         }
//       };

//       const isElementInViewport = (el: any) => {
//         const rect = el.getBoundingClientRect();

//         return (
//           rect.top <= 0 && rect.bottom > document.documentElement.clientHeight
//         );
//       };

//       // setStickyContainersSize();

//       const onWheel = (e: any) => {
//         if (e.deltaY === 0) return;
//         const containerInViewPort = isElementInViewport(container);

//         if (!containerInViewPort) {
//           return;
//         }

//         e.preventDefault();

//         var isPlaceHolderBelowTop =
//           el.offsetTop < document.documentElement.scrollTop;
//         var isPlaceHolderBelowBottom =
//           el.offsetTop + el.offsetHeight > document.documentElement.scrollTop;
//         let g_canScrollHorizontally =
//           isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

//         if (g_canScrollHorizontally) {
//           el.scrollTo({
//             left: el.scrollLeft + e.deltaY,
//             // behavior: strength > 70 ? 'auto' : 'smooth',
//           });
//         }
//       };

//       el.addEventListener('wheel', onWheel);

//       return () => {
//         el.removeEventListener('wheel', onWheel);
//       };
//     }
//   }, [containRef]);
//   return elRef;
// }

import React from 'react';

const Test = () => {
  return <div></div>;
};

export default Test;
