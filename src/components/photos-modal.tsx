import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRecoilState } from 'recoil';
import styled, { css, keyframes } from 'styled-components';
import { modalState } from '../atoms';

const unfoldIn = keyframes`
0% {
    transform: scaleX(0) scaleY(0.005);
}

50% {
    transform: scaleX(1) scaleY(0.005);
}
100% {
    transform: scaleY(1) scaleX(1);
}
`;

const fadeIn = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

const fadeOut = keyframes`
  0%{
  opacity: 1;
}
100%{
  opacity: 0;
}
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 2.5rem;

  background-color: rgba(0, 0, 0, 0.8);
  animation: ${unfoldIn} 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

const Wrapper = styled.div<{ visible: boolean }>`
  @media (min-width: 768px) {
    flex-direction: row;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  height: 100%;
  color: #fff;
  margin: 0 auto;
  opacity: 0;
  animation: ${(props) =>
    props.visible
      ? css`
          ${fadeIn} 800ms .5s ease-in forwards
        `
      : css`
          ${fadeOut} .5s ease-in-out forwards
        `};
`;

const TextWrap = styled.div`
  .date {
    font-size: 0.875rem;
  }

  .title {
    font-size: 2.5rem;
    font-weight: lighter;

    @media (max-width: 768px) {
      order: -1;
      width: 100%;
      text-align: center;
      padding: 1rem;
    }
    @media (min-width: 768px) {
      margin-top: 1.875rem;
    }
  }
  .contents {
    margin-top: 1.875rem;
    line-height: 1.5;
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    order: -1;
    padding: 1.875rem;
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  text-align: center;
  order: -1;
  aspect-ratio: auto 1/1;

  img {
    width: 100%;
    height: 100%;
    border-radius: 1.25rem;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    width: 50%;
    order: 1;
  }
`;

const Button = styled.button`
  @media (min-width: 768px) {
    top: 25px;
    right: -23px;
  }
  position: absolute;
  top: -10px;
  right: -30px;
  color: #fff;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;

  :hover {
    font-weight: bold;
  }
`;

const PhotosModal = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const [modal, setModal] = useRecoilState(modalState);

  const $portal_root = document.getElementById('root-portal');

  const onModalClose = () => {
    setVisible(false);

    setTimeout(() => {
      setModal(undefined);
    }, 600);
  };

  useEffect(() => {
    setVisible(!!modal);
  }, [modal]);

  return (
    <>
      {$portal_root &&
        modal &&
        createPortal(
          <Container>
            {modal && (
              <Wrapper visible={visible}>
                <Button onClick={onModalClose}>X</Button>
                <ImageWrap>
                  <img src={modal?.src} alt='' />
                </ImageWrap>
                <TextWrap>
                  <span className='date'>{modal?.date}</span>
                  <h1 className='title'>{modal?.title}</h1>
                  <p className='contents'>{modal?.contents}</p>
                </TextWrap>
              </Wrapper>
            )}
          </Container>,
          $portal_root
        )}
    </>
  );
};

export default PhotosModal;
