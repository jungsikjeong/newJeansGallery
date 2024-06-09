import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { photosState } from '../atoms';
import { getAllPhotos } from '../utils/db';

const useFetchPhotos = () => {
  const [photos, setPhotos] = useRecoilState(photosState);

  const { isLoading, data, error } = useQuery({
    queryKey: ['photos'],
    queryFn: getAllPhotos,
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (data && data?.length !== 0) {
      let updatedPhotos = [...data, ...photos];

      if (updatedPhotos.length > 10) {
        updatedPhotos = [...data, ...photos.slice(0, -1)];
      } else {
        updatedPhotos = [...data, ...photos];
      }

      setPhotos(updatedPhotos);
    }
  }, [data]);

  return {
    isLoading,
    posts: photos,
    error,
  };
};

export default useFetchPhotos;
