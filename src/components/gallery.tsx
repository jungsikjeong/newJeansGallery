import { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { galleryRef, modalState, photosState } from '../atoms';
import CustomAnimation from '../style/CustomAnimation';
import BestPhotosModal from './photos-modal';

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
  z-index: 100;

  @media (min-width: 768px) {
    padding-top: 6.25rem;
    overflow: hidden;
    width: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
      url('https://res.heraldm.com/content/image/2022/09/08/20220908000164_0.jpg');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }

  @media (max-width: 768px) {
    padding-top: 6.25rem;
    overflow: hidden;

    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
      url('https://res.heraldm.com/content/image/2022/09/08/20220908000164_0.jpg');
    background-size: cover;
    background-position: center center;
  }
`;

const Slogan = styled.div`
  color: white;
  transition: all 0.3s ease-out;
  border-radius: 1.25rem;
  position: absolute;
  z-index: 10;
  left: 1.25rem;
  padding: 1.25rem;
  line-height: 1.2;
  font-weight: lighter;

  .title {
    font-size: 4rem;
    text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 768px) {
    .title {
      font-size: 3.5rem;
    }
  }
`;

const List = styled.ul`
  /* @media (min-width: 768px) { */
  width: 4000px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  flex-wrap: nowrap;
  /* } */
`;

const DummyItem = styled.li<{ display: string }>`
  @media (max-width: 767px) {
    display: ${(props) => props.display};
    width: 18.75rem;
    height: 20rem;
  }

  @media (min-width: 768px) {
    width: 18.75rem;
    height: 100%;
  }
`;

const Item = styled.li`
  :nth-child(odd) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    flex-wrap: nowrap;

    img {
      transform: translateY(-25vh);
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

    cursor: pointer;

    @media (min-width: 768px) {
      /* width: clamp(500px, 50% + 20px, 900px); */
      transform: translateX(-1%);
    }
    @media (max-width: 768px) {
      width: clamp(300px, 50% + 20px, 600px);
    }
  }
`;

interface IImageTypes {
  id: string;
  src: string;
  date: string;
  title: string;
  contents: string;
}

const Gallery = () => {
  const containRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<any>(null);

  const [targetImageInfo, setTargetImageInfo] = useState<IImageTypes>();

  const photos = useRecoilValue(photosState);
  const modal = useRecoilValue(modalState);
  const setModal = useSetRecoilState(modalState);
  const setContainRef = useSetRecoilState(galleryRef);
  const setPhotos = useSetRecoilState(photosState);

  const onImageClick = (photo: any) => {
    setTargetImageInfo(photo);
    setModal(true);
  };

  useEffect(() => {
    if (containRef) {
      setContainRef(containRef);
    }

    if (localStorage.getItem('data')) {
      const localDates = JSON.parse(localStorage.getItem('data') as any);

      setPhotos((oldPhotos) => [...localDates, ...oldPhotos]);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (
        scrollRef.current &&
        containRef.current &&
        wrapRef.current &&
        textRef.current
      ) {
        let viewWidth = window.innerWidth;
        let galleryPosition = containRef.current.offsetTop;
        let scrollLocation = document.documentElement.scrollTop;

        if (scrollLocation - galleryPosition >= 650) {
          textRef.current.style.opacity = '0';
        } else {
          textRef.current.style.opacity = '1';
        }

        if (
          // viewWidth >= 768 &&
          scrollLocation >= galleryPosition &&
          scrollLocation < galleryPosition + 4800
          // scrollLocation < galleryPosition + 4000 // 원본
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
    <Container ref={containRef} id='3'>
      {modal && (
        <BestPhotosModal
          image={targetImageInfo}
          setTargetImageInfo={setTargetImageInfo}
        />
      )}
      <Wrapper ref={wrapRef}>
        <Slogan ref={textRef}>
          <CustomAnimation>
            <span className='title'>
              여러분의
              <br />
              뉴진스가
              <br />
              <strong>사진속에</strong>
            </span>
            <br />
            <br />

            <span>
              내가 올린 사진이 갤러리에
              <br />
              지금 그 다채로움을 경험해보세요.
            </span>
          </CustomAnimation>
        </Slogan>
        <List ref={scrollRef}>
          <DummyItem display='block' />
          <DummyItem display='none' />
          <DummyItem display='none' />

          {photos.map((photo, index) => (
            <Item key={index} onClick={() => onImageClick(photo)}>
              <img src={photo.src} alt='' />
            </Item>
          ))}
        </List>
      </Wrapper>
    </Container>
  );
};

export default Gallery;
