// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { NEXT_PUBLIC_FB_API_KEY, NEXT_PUBLIC_FB_APP_ID, NEXT_PUBLIC_FB_AUTH_DOMAIN, NEXT_PUBLIC_FB_MESSAGING_SENDER_ID, NEXT_PUBLIC_FB_PROJECT_ID, NEXT_PUBLIC_FB_STORAGE_BUCKET, NEXT_PUBLIC_MEASUREMENT_ID } from "@/constants/environment";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: NEXT_PUBLIC_FB_API_KEY,
  authDomain: NEXT_PUBLIC_FB_AUTH_DOMAIN,
  projectId: NEXT_PUBLIC_FB_PROJECT_ID,
  storageBucket: NEXT_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: NEXT_PUBLIC_FB_MESSAGING_SENDER_ID,
  appId: NEXT_PUBLIC_FB_APP_ID,
  measurementId: NEXT_PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

