import styled from 'styled-components';

const Wrapper = styled.div`
  @media (min-width: 1300px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    position: absolute;
    right: 2rem;
    bottom: 30rem;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: 1px solid #95a5a6;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
  display: none;
`;

const MoveUpButton = () => {
  return (
    <Wrapper
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
    >
      ▲
    </Wrapper>
  );
};

export default MoveUpButton;
