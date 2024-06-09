import { useMutation, useQueryClient } from 'react-query';
import { addPhoto } from '../utils/db';

const useAddPhoto = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addPhoto,
    mutationKey: ['addPhoto'],

    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['photos'],
        refetchActive: true,
        refetchInactive: true,
      });
    },
    onError: (error: any) => {
      console.log('error:', error);
    },
  });
};

export default useAddPhoto;
