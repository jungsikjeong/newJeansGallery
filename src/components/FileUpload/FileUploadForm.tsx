import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';
import defaultImage from '../../assets/images/default.png';
import { useSetRecoilState } from 'recoil';
import { photosState } from '../../atoms';

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form<{ flexShrink: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    max-width: 50%;
    flex: ${(props) => (props.flexShrink ? '1 0 50%' : '1 1 50%')};
  }
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 1.875rem;
  border: 0;
  background-color: #fff;
  padding: 0.75rem 0.625rem;
  border-radius: 0.625rem;
  font-size: 0.875rem;
  color: #7b8084;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #7b8084;
  }
`;

const Contents = styled.textarea`
  width: 100%;
  height: 120px;
  margin-bottom: 1.875rem;
  border: 0;
  background-color: #fff;
  padding: 0.75rem 0.625rem;
  border-radius: 0.625rem;
  font-size: 0.875rem;
  color: #7b8084;
  resize: none;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  &::placeholder {
    color: #7b8084;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  min-width: 6.25rem;
  width: 25%;
  padding: 0.5rem;
  background-color: #2b2d42;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  :hover {
    background-color: tomato;
    transform: translateY(5px);
  }

  &.uploadBtn {
    margin-top: 2rem;
    font-size: 1.125rem;
    font-weight: 600;
    width: 100%;
  }
`;

const Label = styled.label`
  font-size: 0.825rem;
  text-align: center;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  min-width: 6.25rem;
  width: 25%;
  padding: 0.5rem;
  background-color: #2b2d42;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  :hover {
    background-color: tomato;
    transform: translateY(5px);
  }
`;

const PreviewImage = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  margin-left: 2rem;

  img {
    max-width: 100%;
    height: 100%;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 0.625rem;
  }
`;

const FileName = styled.div`
  color: #8d99ae;
`;

const FileUploadForm = () => {
  const [image, setImage] = useState({
    name: '',
    src: '',
  });
  const [title, setTitle] = useState('');
  const [textBody, setTextBody] = useState('');

  const setPhotos = useSetRecoilState(photosState);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title && textBody && title !== '' && textBody !== '' && image) {
      const body = {
        id: uuid(),
        title: title,
        contents: textBody,
        src: image.src,
        date: String(Date.now()),
      };

      localStorage.setItem('data', JSON.stringify(body));
      setPhotos((oldPhotos) => [...oldPhotos, body]);

      alert('공유완료');
      setTitle('');
      setTextBody('');
      setImage({ name: '', src: '' });
    }
  };

  const onFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      const reader = new FileReader();

      if (file && file.type.match('image.*')) {
        reader.readAsDataURL(file);

        reader.onload = function () {
          // String으로 안바꿔주면 타입 에러남
          const result = String(reader.result);
          setImage({ name: file.name, src: result });
        };
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <Form
          onSubmit={(e) => onSubmit(e)}
          flexShrink={image.src ? 'true' : ''}
        >
          <Input
            placeholder='제목을 입력해주세요'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Contents
            placeholder='사진에 대해 간단히 설명해주세요'
            value={textBody}
            onChange={(e) => setTextBody(e.target.value)}
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Label htmlFor='input-file' style={{ cursor: 'pointer' }}>
              파일 업로드
            </Label>

            <FileName>{image?.name}</FileName>
          </div>

          <input
            type='file'
            name='file'
            id='input-file'
            accept='image/*'
            style={{ display: 'none' }}
            onChange={(e) => onFileUpload(e)}
          />

          <Button type='submit' className='uploadBtn'>
            공유하기
          </Button>
        </Form>
        <PreviewImage>
          <img src={image.src ? image.src : defaultImage} alt='' />
        </PreviewImage>
      </Wrapper>
    </Container>
  );
};

export default FileUploadForm;
