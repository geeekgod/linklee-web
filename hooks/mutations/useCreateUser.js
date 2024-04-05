import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { useMutation } from "@tanstack/react-query";

import fetcher from "@utils/fetcher";
import { firebaseAuth } from "@utils/firebase";

export default function useCreateUser(props = {}) {
  const { onError, onSuccess } = props;

  const { isPending, mutate } = useMutation({
    mutationFn: async (payload) => {
      const { data, error } = await fetcher("/api/users/create", payload);

      if (error) {
        throw new Error(error);
      }

      return data;
    },
    onError: (error) => {
      signOut(firebaseAuth);
      toast.error(error?.message);
      onError(error);
    },
    onSuccess,
  });

  return {
    creatingUser: isPending,
    createUser: mutate,
  };
}
