import React, { useRef } from 'react';
import styled from 'styled-components';
import { useScroll } from '../utils/useScroll';
import { photos } from '../utils/photos';

const Container = styled.div``;

const List = styled.ul`
  overflow-x: hidden;
  display: flex;
  position: sticky;
  height: 100vh;
  top: 0;
`;

const Item = styled.li`
  min-width: 35vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4ch;

  img {
    max-width: 100%;
    /* height: 500px; */
    height: 200px;
  }
`;
// const Item = styled.li`
//   margin: 0.5rem;
//   min-width: 35vw;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   img {
//     max-width: 100%;
//     /* height: 500px; */
//     height: 200px;
//   }
// `;

const Gallery = () => {
  const containRef = useRef<HTMLDivElement>(null);
  const scrollRef = useScroll(containRef);

  return (
    <Container ref={containRef}>
      <List ref={scrollRef}>
        {photos.map((photo) => (
          <Item key={photo.id}>
            <img src={photo.src} alt='' />
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Gallery;
