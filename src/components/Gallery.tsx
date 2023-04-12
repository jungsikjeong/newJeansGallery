import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { photos } from '../utils/photos';

const Container = styled.section`
  margin-top: 2rem;
  background-color: #edf2f4;
  width: 100vw;

  @media (min-width: 768px) {
    height: 4000px;
  }

  @media (max-width: 767px) {
    position: relative;
  }
`;

const Wrapper = styled.div`
  @media (min-width: 768px) {
    padding-top: 6.25rem;
    overflow: hidden;
    width: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),
      url('https://pds.joongang.co.kr/news/component/joongang_sunday/202209/03/c9f999b5-d32d-4a06-bdfc-02aff4755ffb.jpg');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }
`;

const List = styled.ul`
  @media (min-width: 768px) {
    width: 4000px;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
    flex-wrap: nowrap;
  }
`;

const Item = styled.li`
  @media (max-width: 767px) {
    :nth-child(even) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      flex-wrap: nowrap;
    }

    :nth-child(odd) {
      img {
        position: relative;
        height: 12.5rem;
        bottom: 0.625rem;
      }
    }
  }

  @media (min-width: 768px) {
    :nth-child(odd) {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-end;
      flex-wrap: nowrap;

      img {
        transform: translateY(-25vh);
      }
    }

    :nth-child(1) {
      width: 18.75rem;
      height: 100%;
    }

    /* &:nth-child(2) {
      img {
        height: 31.25rem;
        overflow: hidden;
        object-fit: cover;
      }
    }

    &:nth-child(3) {
      img {
        height: 31.25rem;
        width: 43.75rem;
        transform: translateY(-25vh);
        overflow: hidden;
        object-fit: cover;
      }
    } */
  }

  img {
    max-width: 100%;
    border-radius: 0.625rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);

    @media (min-width: 768px) {
      /* width: clamp(500px, 50% + 20px, 900px); */
      transform: translateX(-1%);
    }
    @media (max-width: 768px) {
      width: clamp(300px, 50% + 20px, 600px);
    }
  }
`;

const Gallery = () => {
  const containRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<any>(null);

  useEffect(() => {
    const onScroll = () => {
      if (scrollRef.current && containRef.current && wrapRef.current) {
        let viewWidth = window.innerWidth;
        let galleryPosition = containRef.current.offsetTop;
        let scrollLocation = document.documentElement.scrollTop;

        if (
          viewWidth >= 768 &&
          scrollLocation >= galleryPosition &&
          scrollLocation < galleryPosition + 4000
        ) {
          wrapRef.current.style.position = 'fixed';
          wrapRef.current.style.top = '0';
          let percent = ((scrollLocation - galleryPosition) / 4000) * -80;
          scrollRef.current.style.transform = 'translateX(' + percent + '%)';
        } else {
          wrapRef.current.style.position = 'static';
        }
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Container ref={containRef}>
      <Wrapper ref={wrapRef}>
        <List ref={scrollRef}>
          <Item />
          {photos.map((photo) => (
            <Item key={photo.id}>
              <img src={photo.src} alt='' />
            </Item>
          ))}
        </List>
      </Wrapper>
    </Container>
  );
};

export default Gallery;
