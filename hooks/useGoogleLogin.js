import { useMutation } from "@tanstack/react-query";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { firebaseAuth } from "@utils/firebase";

const provider = new GoogleAuthProvider();
provider.addScope("profile");
provider.addScope("email");

export default function useGoogleLogin({ onError, onSuccess }) {
  return useMutation(() => signInWithPopup(firebaseAuth, provider), {
    onError,
    onSuccess,
  });
}
