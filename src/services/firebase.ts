import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, collectionGroup } from 'firebase/firestore/lite';
import {Lesson, Resource} from '../types/interfaces';
import * as env from '../config/env'

const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getTbts = async () => {
  const tbtRef = collection(db, 'tbt');
  const data = await (await getDocs(tbtRef)).docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export const getLessons = async (id) => {
  const lessonsRef = collection(db, `tbt/${id}/lessons`);
  let data = await (await getDocs(lessonsRef)).docs.map(doc => ({ id: doc.id, ...doc.data() as Lesson }));

  const resourcesQuery = query(collectionGroup(db, 'lesson-resources'));
  const snapshots = await getDocs(resourcesQuery);
  
  snapshots.forEach((doc) => {
    if (doc.ref.path.indexOf(id) !== -1 ) {
      data = data.map(lesson => {
        if (!lesson.resources) {
          lesson.resources = [];
        }

        if (doc.ref.path.indexOf(lesson.id) !== -1) {
          lesson.resources.push({ id: doc.id, ...doc.data() as Resource});
        }
        return lesson;
      });

    }
  })

  return data;
}

export const getLessonResources = async (id, tbtId) => {
  const lessonResourcesRef = collection(db, `tbt/${tbtId}/lessons/${id}/lesson-resources`);
  const data = await (await getDocs(lessonResourcesRef)).docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
}

export const getLessonResource = async (id) => {
  const query = '';
  return [];
}