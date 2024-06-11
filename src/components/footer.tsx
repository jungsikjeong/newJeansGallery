import styled from 'styled-components';

import { BsInstagram } from 'react-icons/bs';
import { IoLogoYoutube } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Container = styled.section`
  background-color: #000;
  color: ${({ theme }) => theme.dullGray};
  padding: 1rem 2.5rem;
  height: 25rem;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledText = styled.div`
  display: flex;
  font-size: 60px;
  text-align: center;
  color: #e13137;
  position: relative;
`;

const Tspan1 = styled.span`
  display: block;
  color: #dfdfdf;
  font-size: 60px;
  position: relative;
  top: -30px;
`;

const Tspan2 = styled.span`
  display: block;
  font-size: 100px;
  position: relative;
  top: 16px;
  left: -14px;

  @media (max-width: 768px) {
    font-size: 68px;
  }
`;

const Instructions = styled.div`
  font-size: 0.9rem;
  margin: 2rem 0;
  @media (max-width: 768px) {
    font-size: 0.785rem;
  }
`;

const IconWrapper = styled.div`
  margin-top: 2rem;
  max-width: 450px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.darkColor};
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
`;

const Copyright = styled.div`
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 0.785rem;
  }
`;

const SLink = styled(Link)`
  text-decoration: underline;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Wrapper>
        <StyledText>
          GA
          <Tspan1>LL</Tspan1>
          <Tspan2>ERIA</Tspan2>
        </StyledText>
        <Instructions>
          이 홈페이지는{' '}
          <SLink to='https://gallerya.netlify.app/'>Free Gallery</SLink>를
          참고하여 제작하였습니다.
        </Instructions>

        <IconWrapper>
          <SLink
            to={'https://www.instagram.com/newjeans_official/'}
            target='_blank'
            title='인스타 바로가기'
          >
            <Icon>
              <BsInstagram />
            </Icon>
          </SLink>

          <SLink
            to={'https://www.youtube.com/@NewJeans_official'}
            target='_blank'
            title='유튜브 바로가기'
          >
            <Icon>
              <IoLogoYoutube />
            </Icon>
          </SLink>

          <SLink to='mailto:wndtlr1024@gmail.com' title='메일 보내기'>
            <Icon>
              <MdOutlineMailOutline />
            </Icon>
          </SLink>
        </IconWrapper>

        <Copyright>Copyright © {currentYear} by Galleria, Inc.</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
