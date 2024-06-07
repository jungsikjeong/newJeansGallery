import styled from 'styled-components';

const Container = styled.section<{
  backgroundColor: string | undefined;
}>`
  width: 100%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.bgColor};
  padding: 1rem;
`;

interface ISectionProps {
  children: React.ReactNode;
  backgroundColor: string | undefined;
  id?: string;
}

const Section = ({ children, backgroundColor, id }: ISectionProps) => {
  return (
    <Container backgroundColor={backgroundColor} id={id}>
      {children}
    </Container>
  );
};

export default Section;
