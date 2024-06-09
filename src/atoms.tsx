import { useRef } from 'react';
import { atom } from 'recoil';
import { photos } from './data/photos';

interface PhotosType {
  id: string;
  src: string;
  title: string;
  contents: string;
  date: string;
}

export const modalState = atom<PhotosType | undefined>({
  key: 'modal',
  default: undefined,
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
