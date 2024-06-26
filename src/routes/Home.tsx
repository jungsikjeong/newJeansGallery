import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import CustomAnimation from '../style/custom-animation';

import InitialScreen from '../components/Initial-screen';
import BestPhotos from '../components/best-photos';
import Carousel from '../components/common/carousel';
import CarouselInfinite from '../components/common/carousel-infinite';
import MoveUpButton from '../components/common/move-up-button';
import Section from '../components/common/section';
import CustomerVoice from '../components/customer-voice';
import FileUpload from '../components/file-upload';
import Footer from '../components/footer';
import Gallery from '../components/gallery';
import Header from '../components/header';
import NewAuthor from '../components/new-author';
import VideoSection from '../components/video-section';
import { photos } from '../data/photos';

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
  position: relative;
  overflow: hidden;

  strong {
    font-weight: bold;
  }

  .moveUp {
    animation: ${moveUp} 2s 0s ease-in-out forwards;
  }
`;

const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: inherit;
    /* flex-wrap: wrap; */
    /* flex-direction: column;
    align-items: flex-start; */
  }

  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  margin: 0 auto;

  .left-box {
    color: #f5f6fa;
  }

  .animation {
    animation: ${moveUp} 2s 3.7s ease-in-out forwards;
  }

  p {
    line-height: 1.2;
  }

  .title {
    @media (min-width: 768px) {
      margin-top: 0;
      font-size: 3.75rem;
    }
    margin-top: 2rem;
    font-weight: bold;
    font-size: 3rem;
  }

  .text {
    margin-top: 1rem;
    font-size: 1.25rem;
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
    font-size: 2rem;

    margin-bottom: 1.875rem;
    @media (min-width: 768px) {
      font-size: 3.125rem;
    }
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
      padding-top: 2rem;
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
    @media (max-width: 768px) {
      text-align: center;
    }

    font-size: 1.4rem;
    font-weight: 600;
  }

  p {
    color: #7b8084;
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
    font-size: 1.125rem;
  }
`;

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 새로고침시 스크롤 최상단이동
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };

    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <Container>
      <InitialScreen />

      <VideoSection />

      {loading && (
        <>
          <Header />

          <Section backgroundColor={'#000'}>
            <Wrapper id='1'>
              <CustomAnimation>
                <div className='left-box'>
                  <p className='title'>시대의 아이콘</p>
                  <p className='text'>
                    매일 찾게 되고
                    <br />
                    언제 입어도 질리지 않는 <br />
                    <strong>Jean</strong>처럼 시대의 아이콘이 되겠습니다.
                  </p>
                </div>
              </CustomAnimation>

              <Carousel />
            </Wrapper>

            <CarouselInfinite images={photos} />
          </Section>

          <Section backgroundColor={''} id='2'>
            <NewsWrapper>
              <CustomAnimation>
                <h2 className='title line-bottom'>새소식</h2>
              </CustomAnimation>

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

          {/* 갤러리 */}
          <Gallery />

          {/* 인기사진 */}
          <BestPhotos />

          {/* 신규작가 */}
          <NewAuthor />

          {/* 파일업로드 */}
          <FileUpload />

          {/* 고객의 소리 */}
          <CustomerVoice />

          <Footer />

          <MoveUpButton />
        </>
      )}
    </Container>
  );
};

export default Home;
