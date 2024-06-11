import styled, { keyframes } from 'styled-components';

const moveUp = keyframes`
0%{
  opacity: 0;
  transform: translateY(0);
}
40%{
  opacity: 1;
  transform: translateY(-1.25rem);
}
100%{
  opacity: 1;
  transform: translateY(0);
}
`;

const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 1;

  video {
    filter: brightness(80%);
    object-fit: cover;
  }
`;

const MainLogo = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
  font-size: 3rem;
  line-height: 1.2;
  color: #f5f6fa;
  opacity: 0;
  transform: translateY(0);
  animation: ${moveUp} 2s 3.7s ease-in-out forwards;

  @media (max-width: 768px) {
    /* top: 50%; */

    left: 10%;
    font-size: 1.5rem;
  }
`;

const VideoSection = () => {
  return (
    <Wrapper>
      <video
        src='/assets/videos/main.mp4'
        autoPlay
        muted
        playsInline
        width='100%'
        height='100%'
        loop
      ></video>

      <MainLogo>
        매일 찾게되고
        <br />
        언제 입어도 질리지않는
        <br />
        <strong>New Jeans</strong>
      </MainLogo>
    </Wrapper>
  );
};

export default VideoSection;
