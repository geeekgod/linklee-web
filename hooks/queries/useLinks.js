import { useQuery, useQueryClient } from "@tanstack/react-query";

import useAppContext from "@hooks/useAppContext";

import fetcher from "@utils/fetcher";

export default function useUser() {
  const { user } = useAppContext();
  const queryClient = useQueryClient();

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["link", user?.uid],
    queryFn: async () => {
      const { data, error } = await fetcher("/api/links/get", {
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
    linkData: data?.link,
    linkLoading: isLoading || isFetching,
  };
}
