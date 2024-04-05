import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { firebaseAuth } from "@utils/firebase";

const provider = new GoogleAuthProvider();
provider.addScope("profile");
provider.addScope("email");

export default function useGoogleLogin(props = {}) {
  const { onError, onSuccess } = props;

  const { isPending: loading, mutate: login } = useMutation({
    mutationFn: () => signInWithPopup(firebaseAuth, provider),
    onError: (error) => {
      toast.error(error?.code);
      onError(error);
    },
    onSuccess,
  });

  return { loading, login };
}
