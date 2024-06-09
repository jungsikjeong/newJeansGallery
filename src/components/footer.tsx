import { AiOutlineGithub } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.section`
  @media (min-width: 768px) {
    padding: 2.5rem;
    height: 25rem;
  }
  background-color: #000;
  color: ${({ theme }) => theme.dullGray};
  padding: 1rem 2.5rem;
`;

const Wrapper = styled.div`
  @media (min-width: 768px) {
    max-width: 1200px;
    position: relative;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.525rem;
    padding: 2rem 0;
  }
`;

const AddressWrap = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    top: 6rem;
    left: 23rem;
  }

  p {
    padding: 0.5rem 0;
  }
`;

const IconWrapper = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    top: 3rem;
    right: 0;
  }
  margin: 2.5rem 0;
  font-size: 3rem;
  h2 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .icon {
    margin-right: 0.5rem;
  }
`;

const CopyRight = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    /* top: 6rem; */
    left: 23rem;
    bottom: -14rem;
  }
  margin-bottom: 1rem;

  p {
    line-height: 1.5;
  }
`;

const SLink = styled(Link)`
  color: blue;
  text-decoration: underline;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <h1>GALLERIA</h1>
        <AddressWrap>
          <p>경기도 부천시 원미구</p>
          <p>TEL 010-2222-2222</p>
          <p>contact@galleria.com</p>
        </AddressWrap>

        <IconWrapper>
          <h2>Follow us</h2>
          <BsInstagram className='icon' />
          <AiOutlineGithub className='icon' />
          <FaFacebookSquare className='icon' />
        </IconWrapper>

        <CopyRight>
          <p>
            I copied the following design.
            <br />
            <SLink to='https://gallerya.netlify.app/#Greeting'>
              FREE GALLERY
            </SLink>
            &nbsp;&nbsp;Thank you
          </p>
        </CopyRight>
      </Wrapper>
    </Container>
  );
};

export default Footer;
