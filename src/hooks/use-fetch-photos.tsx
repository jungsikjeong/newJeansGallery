import { useQuery } from '@tanstack/react-query';
import { getAllPhotos } from '../utils/db';

const useFetchPhotos = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['photos'],
    queryFn: getAllPhotos,
    refetchOnWindowFocus: false,
  });

  return {
    isLoading,
    posts: data,
    error,
  };
};

export default useFetchPhotos;
