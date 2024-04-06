import { signOut } from "firebase/auth";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import useAppContext from "@hooks/useAppContext";

import fetcher from "@utils/fetcher";
import { firebaseAuth } from "@utils/firebase";

export default function useUser() {
  const { user } = useAppContext();
  const queryClient = useQueryClient();

  const logout = (onLogout) => {
    signOut(firebaseAuth).then(() => {
      queryClient.clear();
      onLogout ? onLogout() : null;
    });
  };

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["user", user?.uid],
    queryFn: async () => {
      const { data, error } = await fetcher("/api/users/get", {
        userId: user?.uid,
      });

      if (error) {
        throw new Error(error);
      }

      return data;
    },
    enabled: typeof user?.uid === "string",
    staleTime: 60 * (60 * 1000),
  });

  return {
    logout,
    user,
    userData: data?.user,
    userLoading: isLoading || isFetching,
  };
}
