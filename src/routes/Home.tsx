import Header from '../components/Header';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

import videoFile from '../assets/images/mainVideo.mp4';

const Container = styled.div`
  overflow: hidden;
`;

const VideoSection = styled.section`
  width: 100vw;
  height: 100vh;

  video {
    filter: brightness(70%);
    object-fit: cover;
  }
`;

const Home = () => {
  return (
    <Container style={{ height: '1000vh' }}>
      <Header />
      <VideoSection>
        <ReactPlayer
          url={videoFile}
          muted={true}
          controls={false}
          playing={true}
          loop={true}
          width='100%'
          height='100%'
        />
      </VideoSection>
    </Container>
  );
};

export default Home;
