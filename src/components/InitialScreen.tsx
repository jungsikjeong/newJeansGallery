import styled, { keyframes } from 'styled-components';
import ReactPlayer from 'react-player';
import initialVideo from '../assets/images/뉴진스소개.mp4';

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
  return (
    <Container>
      <Wrapper>
        <ReactPlayer
          url={initialVideo}
          muted={true}
          controls={false}
          playing={true}
          loop={true}
          width='100%'
          height='500px'
        />
      </Wrapper>
    </Container>
  );
};

export default InitialScreen;
