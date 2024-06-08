import styled, { keyframes } from 'styled-components';

const goDown = keyframes`
80% {
    transform: scaleY(0.21);
    display: block;
    visibility: visible;

}

100% {
    transform: scaleY(0);
    display: none;
    visibility: hidden;
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
  z-index: 2;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const InitialScreen = () => {
  return (
    <Container>
      <Wrapper>
        <img src='/assets/images/initialImage.gif' alt='처음시작시 로딩화면' />
      </Wrapper>
    </Container>
  );
};

export default InitialScreen;
