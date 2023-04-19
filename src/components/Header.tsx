import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import catImg from '../assets/images/cat.png';
import SideMenu from './SideMenu';

const walking = keyframes`
  0% {
      background-position-y: 0px
  }

  9% {
      background-position-y: -40px
  }

  18% {
      background-position-y: -80px
  }

  27% {
      background-position-y: -120px
  }

  36% {
      background-position-y: -160px
  }

  45% {
      background-position-y: -200px
  }

  54% {
      background-position-y: -240px
  }

  63% {
      background-position-y: -280px
  }

  72% {
      background-position-y: -320px
  }

  81% {
      background-position-y: -360px
  }

  90% {
      background-position-y: -400px
  }

  100% {
      background-position-y: -440px
  }
`;

const Container = styled.header<{ isHeader: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  transform: ${({ isHeader }) =>
    isHeader ? ` translateY(0)` : ` translateY(-100%)`};
  background-color: rgba(255, 255, 255, 0.9);
  color: ${({ theme }) => theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  font-size: 1.2rem;
  transition: all 0.3s;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 5rem;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  width: 100%;
`;

const Icon = styled.div`
  opacity: 1;
  font-size: 1.7rem;
  transition: all 0.2s;
  cursor: pointer;
`;

const Cat = styled.div`
  background-image: url(${catImg});
  width: 5rem;
  height: 2.5rem;
  transform: scaleX(-1);
  background-repeat: no-repeat;
  overflow: hidden;
  animation: ${walking} 0.7s step-start infinite;
  position: absolute;
  left: 20%;
  bottom: 0;
  @media (max-width: 767px) {
    display: none;
  }
`;

const Header = () => {
  const [isHeader, setIsHeader] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const catRef = useRef<HTMLDivElement>(null);
  const menuBtn = useRef<HTMLDivElement>(null);

  // FiMenu아이콘 클릭하면 사이드 메뉴 나타나게해주는 함수
  const onMenuClick = () => {
    if (menuBtn.current) {
      if (!isMenu) {
        menuBtn.current.style.transform = `translateX(100px)`;
        menuBtn.current.style.opacity = '0';
      } else {
        menuBtn.current.style.transform = `translateX(0)`;
        menuBtn.current.style.opacity = '1';
      }
      setIsMenu((prev) => !prev);
    }
  };

  useEffect(() => {
    let prevScrollTop: number[] = [];

    function headerScrollEvent() {
      //  스크롤바 위치,스크롤 전체 높이
      let scrollTop = document.documentElement.scrollTop;
      let scrollHeight = document.body.scrollHeight;

      if (catRef.current) {
        // 스크롤 위치에따라서 Cat 이동
        catRef.current.style.left =
          100 * (scrollTop / scrollHeight + 0.05) + '%';
        // 스크롤을 올릴때
        if (prevScrollTop[prevScrollTop.length - 1] > scrollTop) {
          catRef.current.style.transform = 'scaleX(1)';
          prevScrollTop = [];
        } else {
          catRef.current.style.transform = 'scaleX(-1)';
          prevScrollTop = [];
        }
      }
      prevScrollTop.push(scrollTop);

      // 스크롤 위치에 따라서 header를 숨기고,표시해줌
      if (scrollTop > 100) {
        setIsHeader(true);
      } else {
        setIsHeader(false);
      }
    }

    window.addEventListener('scroll', headerScrollEvent);

    return () => {
      window.removeEventListener('scroll', headerScrollEvent);
    };
  }, []);

  return (
    <Container isHeader={isHeader}>
      <SideMenu isMenu={isMenu} onMenuClick={onMenuClick} />
      <Wrapper>
        <Cat ref={catRef} />
        <Title>GALLERIA</Title>

        <Icon ref={menuBtn} onClick={onMenuClick}>
          <FiMenu />
        </Icon>
      </Wrapper>
    </Container>
  );
};

export default Header;
