import admin from "firebase-admin";

import firebaseServiceAccount from "@constants/firebaseServiceAccount";

let app = null;

if (admin.apps.length === 0) {
  app = admin.initializeApp({
    credential: admin.credential.cert(firebaseServiceAccount),
  });
} else {
  app = admin.app();
}

export const firestore = app.firestore();

export const users = firestore.collection("users");
