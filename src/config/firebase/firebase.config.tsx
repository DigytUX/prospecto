import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDING_ID,
  FIREBASE_API_ID,
  FIREBASE_MEASUREMENT_ID
} from '../index'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey:FIREBASE_API_KEY,
  authDomain:FIREBASE_AUTH_DOMAIN,
  projectId:FIREBASE_PROJECT_ID,
  storageBucket:FIREBASE_STORAGE_BUCKET,
  messagingSenderId:FIREBASE_MESSAGING_SENDING_ID,
  appId:FIREBASE_API_ID,
  measurementId:FIREBASE_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);