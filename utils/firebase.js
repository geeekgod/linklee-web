import { getFirestore } from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";
import {
  initializeAuth,
  browserPopupRedirectResolver,
  browserLocalPersistence,
} from "firebase/auth";

import firebaseConfig from "@constants/firebaseConfig";

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const getFirebaseAuth = () => {
  if (typeof window === "undefined") return null;

  return initializeAuth(app, {
    persistence: browserLocalPersistence,
    popupRedirectResolver: browserPopupRedirectResolver,
  });
};

export const firestore = getFirestore(app);
export const firebaseAuth = getFirebaseAuth();
