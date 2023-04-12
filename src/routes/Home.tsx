import Header from '../components/Header';
import styled, { keyframes } from 'styled-components';
import ReactPlayer from 'react-player';
import mainVideoFile from '../assets/images/mainVideo.mp4';
import newJeans01 from '../assets/images/newJeans1.gif';
import InitialScreen from '../components/InitialScreen';
import { useEffect, useState } from 'react';
import Gallery from '../components/Gallery';

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

const Container = styled.div`
  overflow: hidden;

  strong {
    font-weight: bold;
  }
`;

const VideoSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;

  video {
    filter: brightness(70%);
    object-fit: cover;
  }
`;

const MainLogo = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
  font-size: 3rem;
  line-height: 1.2;
  opacity: 0;
  transform: translateY(0);
  animation: ${moveUp} 2s 3.7s ease-in-out forwards;

  @media (max-width: 768px) {
    top: 50%;
    left: 10%;
    font-size: 1.5rem;
  }
`;

const Section = styled.section<{
  backgroundColor: string | undefined;
}>`
  width: 100%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.bgColor};
  padding: 1rem;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  p {
    line-height: 1.2;
    color: ${({ theme }) => theme.textColor};
  }

  .title {
    font-weight: bold;
    font-size: 3.5rem;
  }

  .text {
    margin-top: 1rem;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  img {
    border-radius: 0.625rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 300px;
    @media (max-width: 768px) {
      margin-bottom: 8rem;
    }
  }
`;

const NewsWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  @media (min-width: 768px) {
    height: 100vh;
    margin: 0 auto;
  }

  .title {
    font-weight: bold;
    font-size: 3.5rem;
    margin-bottom: 1.875rem;
  }

  .line-bottom {
    padding-bottom: 0.9375rem;
    border-bottom: 1px solid tomato;
  }

  img {
    border-radius: 0.625rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 300px;
  }
`;

const NewsList = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const NewsItem = styled.li`
  width: 100%;

  &:nth-child(1) {
    margin-right: 1rem;

    @media (max-width: 768px) {
      margin: 0;
      border-bottom: 1px solid #8d99ae;
      padding-bottom: 2rem;
    }
  }

  &:nth-child(2) {
    margin-left: 1rem;

    @media (max-width: 768px) {
      margin: 0;
    }
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  border-radius: 0.625rem;

  img {
    max-width: 100%;
  }

  h3 {
    font-size: 1.2rem;
  }

  p {
    margin-top: 1rem;
    word-break: keep-all;
    margin-bottom: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-height: 1.5em;
    max-height: 4.5em;
  }

  footer {
    font-size: 1.2rem;
  }
`;

const Home = () => {
  const [screen, setScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setScreen(true);
    }, 3000);
  }, []);
  return (
    <Container style={{ height: '1000vh' }}>
      {/* 초기 스크린 */}
      <InitialScreen />

      <VideoSection>
        <ReactPlayer
          url={mainVideoFile}
          muted={true}
          controls={false}
          playing={true}
          loop={true}
          width='100%'
          height='100%'
        />
        <MainLogo>
          매일 찾게되고
          <br />
          언제 입어도 질리지않는
          <br />
          <strong>New Jeans</strong>
        </MainLogo>
      </VideoSection>
      {screen && (
        <>
          <Header />

          <Section backgroundColor={'#000'}>
            <Wrapper>
              <div>
                <p className='title'>시대의 아이콘</p>
                <p className='text'>
                  매일 찾게 되고
                  <br />
                  언제 입어도 질리지 않는 <br />
                  <strong>Jean</strong>처럼 시대의 아이콘이 되겠습니다.
                </p>
              </div>

              <div>
                <img src={newJeans01} alt='' />
              </div>
            </Wrapper>
          </Section>

          <Section backgroundColor={''}>
            <NewsWrapper>
              <h2 className='title line-bottom'>새소식</h2>

              <NewsList>
                <NewsItem>
                  <a
                    href='https://view.asiae.co.kr/article/2023033112430466724'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Article>
                      <img
                        src='https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/575/baafb64da70b8984ea495dc4f87a5609_res.jpeg'
                        alt=''
                      />
                      <h3 style={{ marginTop: '1rem' }}>
                        뉴진스, 코카-콜라 CM송 'Zero' 4월 3일 공개
                      </h3>

                      <p>
                        그룹 '뉴진스(NewJeans)'가 깜짝 음원을 발표한다. 31일
                        소속사 어도어(ADOR)는 뉴진스와 코카-콜라의 컬래버레이션
                        곡 '제로(Zero)'가 오는 4월 3일 음원 사이트에 발매된다고
                        밝혔다. 이번 신곡은 코카-콜라의 CM송으로 제작됐다.
                        코카-콜라 제로의 짜릿함을 표현한 곡으로, 뉴진스만의
                        청량함이 기대를 모으고 있다.
                      </p>

                      <footer>2023.03.31</footer>
                    </Article>
                  </a>
                </NewsItem>
                <NewsItem>
                  <a
                    href='https://entertain.naver.com/now/read?oid=108&aid=0003141611'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Article>
                      <img
                        src='https://images.chosun.com/resizer/gst8Y76TWvb559SjLSh43AmEUrU=/2000x1333/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/GO7X3DGRXZDGAPFJJRGNZBR4VI.jpg'
                        alt=''
                      />
                      <h3 style={{ marginTop: '1rem' }}>
                        뉴진스, 여름 컴백..6월 선공개곡→7월 새 앨범 발매
                      </h3>

                      <p>
                        걸그룹 뉴진스(민지, 하니, 다니엘, 해린, 혜인)가 3연타
                        흥행을 노린다. 4일 스타뉴스 단독 취재 결과,
                        뉴진스(NewJeans)는 6월 말 선공개곡을 발표하고 본격 컴백
                        활동에 돌입하는 것으로 확인됐다. 이어 뉴진스는 7월 초
                        선공개곡이 수록된 새 앨범을 발매한다. 이같은 프로모션은
                        첫 싱글 'OMG'와 비슷하다. 뉴진스는 지난해 12월 19일
                        수록곡 'Ditto'(디토)를 선공개한 후 이듬해 1월 2일 첫
                        싱글앨범 'OMG'를 발매했다.
                      </p>

                      <footer>2023.04.04</footer>
                    </Article>
                  </a>
                </NewsItem>
              </NewsList>
            </NewsWrapper>
          </Section>

          <Gallery />
        </>
      )}
    </Container>
  );
};

export default Home;
