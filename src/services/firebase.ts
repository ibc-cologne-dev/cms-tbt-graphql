import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, collectionGroup, getDoc } from 'firebase/firestore/lite';
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

// TODO: remove hardcoded type ids
const resourceTypes = [
  '37W0y1iUxu10rZIP3LQD', // Sermon
  'YNoIHNvQFGOIs8aIMTCp', // Study Guide
  '1XPQFFAkWcIcB6WuyGmr', // Arrows
  'Hatsz65pSQUHI1Iu2ZN5', // Skit
  'wiM2kuffbAdZtbRItmyu', // Memory Verse
];

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
  let lessonsDocs = await (
    await getDocs(lessonsRef)
  ).docs.map(doc => ({ id: doc.id, ...doc.data() as Lesson }));

  return lessonsDocs;
}

export const getLessonResources = async (lessonId, tbtId) => {
  const lessonResourcesRef = collection(db, `tbt/${tbtId}/lessons/${lessonId}/lesson-resources`);
  const lessonResources = await Promise.all((await getDocs(lessonResourcesRef)).docs.map(async(doc) => {
    const resourceData = doc.data();
    const type = await getDoc(resourceData.type)
    return { id: doc.id, ...resourceData, type: {id: type.id, ...type.data() as Resource}};
  }));

  let orderedResources = [];
  for(let i = 0; i < resourceTypes.length; i++) {
    for(let resource of lessonResources) {
      if (resource.type.id === resourceTypes[i]) {
        orderedResources.push(resource);
        break;
      }
    }
  }

  
  return orderedResources;
}