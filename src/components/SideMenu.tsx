import styled from 'styled-components';

import { IoMdClose } from 'react-icons/io';

const Container = styled.nav<{ isMenu: boolean }>`
  position: fixed;
  width: 30%;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  transform: ${({ isMenu }) =>
    isMenu ? `translateX(0)` : `translateX(-100%)`};
  background-color: ${({ theme }) => theme.menuBgColor};
  padding: 6rem 0rem;
  z-index: 1000;
  transition: all 0.3s ease;
  @media (max-width: 767px) {
    width: 50%;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  background-color: transparent;
  border: 0;
  top: 1.875rem;
  left: 1.25rem;
  .close-icon {
    color: ${({ theme }) => theme.textColor};
    font-size: 2rem;
    transition: all 0.3s ease;
    cursor: pointer;
    :hover {
      transform: scale(1.5);
    }
  }
`;
const List = styled.ul`
  font-size: 1.25rem;
  @media (max-width: 767px) {
    font-size: 0.825rem;
  }
`;

const Item = styled.li`
  padding: 1.5rem 2.865rem;

  span {
    cursor: pointer;
  }
`;

interface IMenuProps {
  isMenu: boolean;
  onMenuClick: () => void;
}

const SideMenu = ({ isMenu, onMenuClick }: IMenuProps) => {
  return (
    <Container isMenu={isMenu}>
      <CloseBtn>
        <IoMdClose className='close-icon' onClick={onMenuClick} />
      </CloseBtn>

      <List>
        <Item>
          <span>NewJeans 소개</span>
        </Item>
        <Item>
          <span>새소식</span>
        </Item>
        <Item>
          <span>갤러리 둘러보기</span>
        </Item>
        <Item>
          <span>인기 앨범</span>
        </Item>
        <Item>
          <span>사진 올리기</span>
        </Item>
        <Item>
          <span>Customer Voice</span>
        </Item>
      </List>
    </Container>
  );
};

export default SideMenu;
