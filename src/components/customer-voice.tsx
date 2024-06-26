import styled from 'styled-components';
import CustomAnimation from '../style/custom-animation';

const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #edf2f4;
  padding: 2.5rem 2.5rem;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    margin: 3rem 0 1rem 0;
    font-size: 2.2rem;
    font-weight: 700;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

    span {
      border-bottom: 1px solid tomato;
    }

    @media (min-width: 768px) {
      margin-bottom: 3rem;
      font-size: 3.125rem;
    }
  }
`;

const Box = styled.div`
  padding: 1.25rem;
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Content = styled.div`
  margin-right: 1rem;
  position: relative;
  word-break: keep-all;

  p {
    opacity: 0.8;
    line-height: 1.4;
    font-weight: 700;
    @media (max-width: 768px) {
      flex: 0;
    }
    @media (min-width: 768px) {
      margin-top: 3.75rem;
      font-size: 1.5625rem;
    }
  }
`;

const UserWrap = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    bottom: 0;
    font-size: 1.25rem;
  }

  margin-top: 1rem;

  .name {
    font-weight: 400;
    border-bottom: 1px solid tomato;
  }

  .detail {
    display: block;
    opacity: 0.8;
    margin: 0.625rem 0;
  }
`;

const ImgBox = styled.div`
  @media (max-width: 767px) {
    height: 350px;
    margin-top: 1rem;
  }
  @media (min-width: 767px) {
    height: 500px;
  }
  width: 100%;
  position: relative;

  div {
    @media (max-width: 767px) {
      transform: scale(0.8) translate(10%, 5%) rotate(-30deg);
      border-radius: 300px 300px 170px 280px/260px 360px 170px 300px;
      background-color: ${({ theme }) => theme.tomatoColor};
    }

    min-width: 100%;
    width: 110%;
    height: 110%;
    margin: 20px auto;
    background-color: ${({ theme }) => theme.tomatoColor};
    border-radius: 160px 170px 170px 100px/160px 160px 170px 100px;
    transform: rotate(20deg);
  }

  img {
    @media (max-width: 767px) {
      max-width: 100%;
    }
    width: 100%;
    max-width: 80%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.625rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
`;

const CustomerVoice = () => {
  return (
    <Container id='6'>
      <Wrapper>
        <CustomAnimation>
          <h1 className='title'>
            <span>Customer Voice</span>
          </h1>
        </CustomAnimation>

        <Box>
          <Content>
            <p>
              GALLERIA를 통해서 제가 애정하는 뉴진스 사진을 다른 사람들과 공유할
              수 있어서 좋아요. 또, 다른 버니즈들은 어떤 뉴진스 사진을
              가지고있는지 볼 수 있어서 좋아요.
            </p>

            <UserWrap>
              <span className='name'>정중식</span>
              <br />
              <span className='detail'>GALLERIA 창립자</span>
            </UserWrap>
          </Content>

          <ImgBox>
            <div />
            <img src='/assets/images/customer-voice-user.jpg' alt='' />
          </ImgBox>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default CustomerVoice;
