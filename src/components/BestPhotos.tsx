import React, { useState } from 'react';
import styled from 'styled-components';
import { photos } from '../utils/photos';

const Container = styled.section``;

const Wrapper = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  .title {
    font-size: 3.125rem;
    margin-bottom: 2.25rem;
    font-weight: 700;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

    span {
      border-bottom: 1px solid tomato;
    }
  }

  @media (min-width: 768px) {
    margin-top: 35rem;
  }
`;

const Photos = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Photo = styled.li`
  width: 100%;
  height: 250px;
  margin-right: 1rem;
  margin-top: 3.5rem;

  &:nth-child(4) {
    margin-right: 0;
  }

  img {
    max-width: 100%;
    width: 100%;
    height: 250px;
    border-radius: 0.625rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    transition: all 250ms;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }
`;

const BestPhotos = () => {
  const [images, setImages] = useState(photos.slice(0, 4));

  return (
    <Container>
      <Wrapper>
        <h1 className='title'>
          <span>인기사진</span>
        </h1>
        GALLERIA 이용자들에게 많은 인기를 받고있는 사진을 둘러보세요.
        <Photos>
          {images.map((photo) => (
            <Photo key={photo.id}>
              <img src={photo.src} alt='' />
            </Photo>
          ))}
        </Photos>
      </Wrapper>
    </Container>
  );
};

export default BestPhotos;
