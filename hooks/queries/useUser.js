import { useQuery } from "@tanstack/react-query";

import useAppContext from "@hooks/useAppContext";

import fetcher from "@utils/fetcher";

export default function useUser() {
  const { user } = useAppContext();

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
    user,
    userData: data?.user,
    userLoading: isLoading || isFetching,
  };
}
