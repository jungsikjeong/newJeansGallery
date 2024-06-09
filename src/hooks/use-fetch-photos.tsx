import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { photosState } from '../atoms';
import { IPhoto } from '../components/models/photo';
import { getAllPhotos } from '../utils/db';

const useFetchPhotos = () => {
  const [photos, setPhotos] = useRecoilState(photosState);

  const { isLoading, data, error } = useQuery({
    queryKey: ['photos'],
    queryFn: getAllPhotos,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    // 새롭게 추가한 이미지 + 기존 정적인 이미지
    if (!isLoading && data?.length !== 0) {
      // 이미 사진에 있는 게시물을 필터링함
      // 이렇게 안해주면 리액트 쿼리로 작성한 게시글 추가 hook에서 게시글 불러오는 hook의 key 값을 초기화시켜서
      // 게시글을 중복해서 가져와버림 (참고로 게시글 불러오는 hook도 리액트 쿼리임)
      const newPosts = data?.filter(
        (post) => !photos.some((photo) => photo.id === post.id)
      );

      let updatedPhotos = [...(newPosts as IPhoto[]), ...photos];

      if (updatedPhotos.length > 10) {
        updatedPhotos = updatedPhotos.slice(0, 10);
      }

      setPhotos(updatedPhotos);
    }
  }, [isLoading, data]);

  return {
    isLoading,
    posts: photos,
    error,
  };
};

export default useFetchPhotos;
