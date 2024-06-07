import { useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import initialImage from '../assets/images/initialImage.gif';

const goDown = keyframes`
80% {
    transform: scaleY(0.21);
}

100% {
    transform: scaleY(0);
}
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background-color: black;
  animation: ${goDown} 1s 3s ease-in-out forwards;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const InitialScreen = () => {
  const location = useLocation();

  return (
    <>
      {location?.pathname === '/' && (
        <Container>
          <Wrapper>
            <img src={initialImage} alt='처음시작시 로딩화면' />
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default InitialScreen;