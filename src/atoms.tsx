import { atom } from 'recoil';
import { photos } from './data/photos';

type PhotosType = {
  id: string;
  src: string;
  title: string;
  contents: string;
  date: string;
};

export const modalState = atom({
  key: 'modal',
  default: false,
});

export const photosState = atom<PhotosType[]>({
  key: 'photos',
  default: photos,
});
