import styled from 'styled-components';
import CustomAnimation from '../../style/custom-animation';
import FileUploadForm from './file-upload-form';

const Container = styled.section`
  height: 100vh;
  background-color: #fff;
  padding: 2.5rem;
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
    margin-bottom: 3rem;
    font-weight: 700;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

    span {
      border-bottom: 1px solid tomato;
    }

    @media (min-width: 768px) {
      font-size: 3.125rem;
    }
  }

  .contents {
    text-align: center;
    line-height: 1.25;
    /* word-break: keep-all; */
    font-weight: lighter;
    font-size: 1.125rem;
    margin-bottom: 3.125rem;
    color: #7b8084;
  }
`;

const FileUpload = () => {
  return (
    <Container id='5'>
      <Wrapper>
        <CustomAnimation>
          <h1 className='title'>
            <span>이미지 업로드</span>
          </h1>
        </CustomAnimation>
        <p className='contents'>
          당신의 뉴진스를 공유해주세요.
          <br /> 새로운 모습의 뉴진스를 다른 사람들과 공유할 수 있습니다.
        </p>

        {/* 파일 업로드 Form */}
        <FileUploadForm />
      </Wrapper>
    </Container>
  );
};

export default FileUpload;
