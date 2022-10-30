import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDING_ID,
  FIREBASE_API_ID,
  FIREBASE_MEASUREMENT_ID
} from './config/index'
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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
