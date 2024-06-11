import styled from 'styled-components';

const Container = styled.section`
  position: relative;
  width: 30%;
  height: 20vw;
  margin: 0 auto;
  perspective: 1400px;
  transform-style: preserve-3d;

  @media (max-width: 768px) {
    margin-top: 5rem !important;
    width: 50%;
    height: 32vw;
    width: 57%;
    height: 72vw;
  }

  label,
  label img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    font-size: 70px;
    justify-content: center;
    transition: transform 400ms ease;
    cursor: pointer;
  }

  /** for normal */
  #s1:checked ~ #slider1,
  #s2:checked ~ #slider2,
  #s3:checked ~ #slider3,
  #s4:checked ~ #slider4,
  #s5:checked ~ #slider5 {
    box-shadow: 0px 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);
    transform: translate3d(0%, 0, 0px);
  }

  /* 슬라이더의 다음 이미지 */
  #s1:checked ~ #slider2,
  #s2:checked ~ #slider3,
  #s3:checked ~ #slider4,
  #s4:checked ~ #slider5,
  #s5:checked ~ #slider1 {
    transform: translate3d(20%, 0, -100px);
    box-shadow: 0px 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);
  }

  /* 슬라이더의 다다음 이미지 */
  #s1:checked ~ #slider3,
  #s2:checked ~ #slider4,
  #s3:checked ~ #slider5,
  #s4:checked ~ #slider1,
  #s5:checked ~ #slider2 {
    transform: translate3d(40%, 0, -250px);
    box-shadow: 0px 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);
  }

  /* 슬라이더 이전 이미지 */
  #s1:checked ~ #slider5,
  #s2:checked ~ #slider1,
  #s3:checked ~ #slider2,
  #s4:checked ~ #slider3,
  #s5:checked ~ #slider4 {
    transform: translate3d(-20%, 0, -100px);
    box-shadow: 0px 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);
  }

  /* 슬라이더 이이전 이미지 */
  #s1:checked ~ #slider4,
  #s2:checked ~ #slider5,
  #s3:checked ~ #slider1,
  #s4:checked ~ #slider2,
  #s5:checked ~ #slider3 {
    transform: translate3d(-40%, 0, -250px);
    box-shadow: 0px 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);
  }
`;

const Label = styled.label``;

const Img = styled.img`
  border: 5px solid #fff;
  object-fit: cover;
  border-radius: 0.625rem;
`;

const Input = styled.input`
  display: none;
`;

const Carousel = () => {
  return (
    <Container>
      <Input type='radio' name='slider' id='s1' defaultChecked />
      <Input type='radio' name='slider' id='s2' />
      <Input type='radio' name='slider' id='s3' />
      <Input type='radio' name='slider' id='s4' />
      <Input type='radio' name='slider' id='s5' />

      <Label htmlFor='s1' id='slider1'>
        <Img src='/assets/images/단체사진01.jpg' alt='단체사진01' />
      </Label>
      <Label htmlFor='s2' id='slider2'>
        <Img src='/assets/images/단체사진02.jpg' alt='단체사진02' />
      </Label>
      <Label htmlFor='s3' id='slider3'>
        <Img src='/assets/images/단체사진03.jpg' alt='단체사진03' />
      </Label>
      <Label htmlFor='s4' id='slider4'>
        <Img src='/assets/images/단체사진04.avif' alt='단체사진04' />
      </Label>
      <Label htmlFor='s5' id='slider5'>
        <Img src='/assets/images/단체사진05.jpg' alt='단체사진05' />
      </Label>
    </Container>
  );
};

export default Carousel;
