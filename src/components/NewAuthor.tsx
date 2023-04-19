import React from 'react';
import styled from 'styled-components';
import CustomAnimation from '../style/CustomAnimation';

const Container = styled.section`
  @media (max-width: 768px) {
    margin-top: 10rem;
  }
  height: 100vh;
  /* min-height: 100vh; */
  background-color: rgba(141, 153, 174, 0.4);
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 2rem;
    margin-bottom: 2.25rem;
    font-weight: 700;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

    span {
      border-bottom: 1px solid tomato;
    }

    @media (min-width: 768px) {
      font-size: 3.125rem;
    }
  }

  p {
    color: #7b8084;
  }
`;

const Name = styled.span`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  transition: transform 300ms ease;
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;

  @media (max-width: 768px) {
    margin-top: 2.5rem;
    flex-wrap: wrap;
  }
`;

const Item = styled.li`
  position: relative;
  width: 45%;
  margin: 0.5rem;

  &:hover ${Name} {
    transform: translate(-50%, -100%);
  }

  img {
    object-fit: cover;
    max-width: 100%;
    width: 100%;
    height: 120px;
    border-radius: 0.625rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  @media (min-width: 768px) {
    max-width: 15.625rem;
    img {
      height: 20.3125rem;
      object-fit: cover;
      object-position: center;
    }
  }
`;

const NewAuthor = () => {
  return (
    <Container>
      <Wrapper>
        <CustomAnimation>
          <h1 className='title'>
            <span>신규 작가</span>
          </h1>
        </CustomAnimation>
        <p>GALLERIA에서 뜨고 있는 새로운 작가를 소개합니다.</p>

        <List>
          <Item>
            <img
              src='https://cdn.koreastocknews.com/news/photo/202003/52099_40139_227.jpg'
              alt=''
            />
            <Name>angelina</Name>
          </Item>
          <Item>
            <img
              src='https://d2v80xjmx68n4w.cloudfront.net/gigs/N5qeL1621569728.jpg'
              alt=''
            />
            <Name>Mary</Name>
          </Item>
          <Item>
            <img
              src='https://mblogthumb-phinf.pstatic.net/MjAxODEyMTVfMTQ0/MDAxNTQ0ODc3ODc1MDgw.FMHpoXBL6rwmLhO2x7a9IzpZewNEFXfT8_P_9xOBQvQg.11Gx83MSAyyxO6f-PQ11mUW6GeW8JdO1WVG1LIXBbwog.JPEG.cherall07/large.jpg?type=w800'
              alt=''
            />
            <Name>David</Name>
          </Item>
          <Item>
            <img
              src='https://image.ytn.co.kr/general/jpg/2023/0307/202303070932080050_d.jpg'
              alt=''
            />
            <Name>Seungbeom</Name>
          </Item>
        </List>
      </Wrapper>
    </Container>
  );
};

export default NewAuthor;
