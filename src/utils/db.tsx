import { openDB } from 'idb';
import { IPhoto } from '../components/models/photo';

const DB_NAME = 'galleryDB';
const STORE_NAME = 'photos';

async function initDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });
}

export async function getAllPhotos(): Promise<IPhoto[]> {
  const db = await initDB();
  const photos = await db.getAll(STORE_NAME);

  return photos;
}

export async function addPhoto(photo: IPhoto) {
  const db = await initDB();

  await db.add(STORE_NAME, photo);
}
