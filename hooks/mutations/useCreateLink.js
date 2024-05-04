import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import fetcher from "@utils/fetcher";

export default function useCreateUser(props = {}) {
  const { onError, onSuccess } = props;

  const { isPending, mutate } = useMutation({
    mutationFn: async (payload) => {
      const { data, error } = await fetcher("/api/links/create", payload);

      if (error) {
        throw new Error(error);
      }

      return data;
    },
    onError: (error) => {
      toast.error(error?.message);
      onError(error);
    },
    onSuccess,
  });

  const { isPending: isUpdatingUsername, mutate: updateUsername } = useMutation({
    mutationFn: async (payload) => {
      const { data, error } = await fetcher("/api/links/update", payload);

      if (error) {
        throw new Error(error);
      }

      return data;
    },
    onError: (error) => {
      toast.error(error?.message);
      onError(error);
    },
    onSuccess,
  });


  return {
    creatingLink: isPending,
    createLink: mutate,
    updatingUsername: isUpdatingUsername,
    updateUsername,
  };
}
