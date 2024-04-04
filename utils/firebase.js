import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "@constants/firebaseConfig";
import {
  initializeAuth,
  browserPopupRedirectResolver,
  browserLocalPersistence,
} from "firebase/auth";

const app = initializeApp(firebaseConfig);

const getFirebaseAuth = () => {
  if (typeof window === "undefined") return null;

  return initializeAuth(app, {
    persistence: browserLocalPersistence,
    popupRedirectResolver: browserPopupRedirectResolver,
  });
};

export const firestore = getFirestore(app);
export const firebaseAuth = getFirebaseAuth();
