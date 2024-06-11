import { useRecoilState } from 'recoil';
import styled, { keyframes } from 'styled-components';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { modalState } from '../../../atoms';
import { IPhoto } from '../../models/photo';

import 'swiper/css';

const shine = keyframes`
0% {
		opacity: 1;
	}
	40% {
		opacity: 1;
	}
	100% {
		left: 125%;
		opacity: 0;
	}
`;

const Container = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 200px;

  .swiper-wrapper {
    transition-timing-function: linear;
  }
`;

const Image = styled.figure<{ src: string }>`
  overflow: hidden;
  clear: both;
  position: relative;
  overflow: hidden;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 150px;
  height: 150px;
  border-radius: 0.625rem;
  border: 5px solid #fff;
  cursor: pointer;

  &::before {
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;
    content: '';
    width: 50%;
    height: 100%;

    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    transform: skewX(-25deg);
    opacity: 0;
  }

  &:hover::before {
    animation: ${shine} 0.75s;
  }
`;

const CarouselInfinite = ({ images }: { images: IPhoto[] }) => {
  const [modal, setModalStatus] = useRecoilState(modalState);

  const onImageClick = (img: IPhoto) => {
    const photo = {
      id: img.id,
      src: img.src,
      title: img.title,
      contents: img.contents,
      date: img.date,
    };
    setModalStatus(photo);
  };

  return (
    <Container>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        loop={true}
        loopAddBlankSlides={true}
        speed={2500}
        spaceBetween={10}
        slidesPerView={5}
        breakpoints={{
          100: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index}>
            <Image src={img?.src} onClick={() => onImageClick(img)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CarouselInfinite;
