import { atom } from 'recoil';
import { photos } from './data/photos';
import { useRef } from 'react';

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

export const targetImage = atom<PhotosType[]>({
  key: 'targetImage',
  default: photosState,
});

export const galleryRef = atom<any>({
  key: 'galleryRef',
  default: useRef,
});
