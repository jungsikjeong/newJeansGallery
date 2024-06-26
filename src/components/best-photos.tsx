import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { modalState } from '../atoms';
import { photos } from '../data/photos';
import CustomAnimation from '../style/custom-animation';
import { IPhoto } from './models/photo';

const Container = styled.section`
  position: relative;
  padding: 1rem;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    height: 100vh;
    margin-top: 35rem;
  }

  @media (max-width: 768px) {
    margin-top: 265rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2.25rem;
  font-weight: 700;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

  span {
    border-bottom: 1px solid tomato;
  }

  @media (min-width: 768px) {
    font-size: 3.125rem;
  }
`;

const Contents = styled.p`
  color: #7b8084;
  font-size: 1.115rem;
`;

const Photos = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Photo = styled.li`
  width: 45%;
  margin: 0.5rem;

  @media (min-width: 768px) {
    width: 100%;
  }

  img {
    @media (max-width: 768px) {
      height: 120px;
    }
    max-width: 100%;
    width: 100%;
    height: 250px;
    object-fit: cover;
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

  const setModal = useSetRecoilState(modalState);

  const onImageClick = (photo: IPhoto) => {
    setModal(photo);
  };

  return (
    <Container>
      <CustomAnimation>
        <Wrapper id='4'>
          <Title>
            <span>인기사진</span>
          </Title>
          <Contents>
            GALLERIA 이용자들에게 많은 인기를 받고있는 사진을 둘러보세요.
          </Contents>
          <Photos>
            {images.map((photo) => (
              <Photo key={photo.id} onClick={() => onImageClick(photo)}>
                <img src={photo.src} alt='' />
              </Photo>
            ))}
          </Photos>
        </Wrapper>
      </CustomAnimation>
    </Container>
  );
};

export default BestPhotos;
