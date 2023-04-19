import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';
import defaultImage from '../../assets/images/default.png';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { galleryRef, photosState } from '../../atoms';
import { Link } from 'react-scroll';
import { dateParse } from '../../utils/date';

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

  const galleryContainer = useRecoilValue(galleryRef);
  const setPhotos = useSetRecoilState(photosState);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title && textBody && title !== '' && textBody !== '' && image) {
      const body = {
        id: uuid(),
        title: title,
        contents: textBody,
        src: image.src,
        date: String(dateParse()),
      };
      const localDates = JSON.parse(localStorage.getItem('data') as any);
      localDates
        ? localStorage.setItem('data', JSON.stringify([body, ...localDates]))
        : localStorage.setItem('data', JSON.stringify([body]));

      setPhotos((oldPhotos) => [body, ...oldPhotos]);

      setTitle('');
      setTextBody('');
      setImage({ name: '', src: '' });
      if (window.confirm('공유가 완료되었습니다. 확인하러 가시겠어요?')) {
        // 갤러리컴포넌트로 이동ㅋ
        galleryContainer.current.scrollIntoView();
      }
    }
  };

  const onFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      const reader = new FileReader();

      if (file.type.match('image.gif')) {
        alert('gif 파일은 올릴 수 없습니다.');
      }
      if (!file.type.match('image.*')) {
        alert('이미지 파일만 업로드 가능합니다.');
      }

      if (file && file.type.match('image.*') && !file.type.match('image.gif')) {
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
