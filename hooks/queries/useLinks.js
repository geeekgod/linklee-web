import { useQuery, useQueryClient } from "@tanstack/react-query";

import useAppContext from "@hooks/useAppContext";

import fetcher from "@utils/fetcher";
import { useEffect } from "react";

export default function useLinks() {
  const { user } = useAppContext();
  const queryClient = useQueryClient();

  const checkUsernameExistsfn = async (username) => {
    const { data, error } = await fetcher("/api/links/check-username", {
      username: username,
    });

    if (error) {
      throw new Error(error);
    }

    return data;
  }

  useEffect(() => {
    if (user?.uid) {
      queryClient.invalidateQueries({ queryKey: ["link", user?.uid] });
    }
  }, [user?.uid])

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

  const { data: checkUsernameExists, isFetching: isFetchingUsername, isLoading: isLoadingUsername, error: usernameError } = useQuery({
    queryFn: checkUsernameExistsfn,
    queryKey: ["username", "check-username"],
    enabled: typeof user?.uid === "string",
    staleTime: 60 * (60 * 1000),
  })

  return {
    checkUsernameExistsfn,
    linkData: data?.link,
    linkLoading: isLoading || isFetching,
    checkUsernameExists: checkUsernameExists,
    isFetchingUsername: isFetchingUsername || isLoadingUsername,
    usernameError: usernameError,
  };
}
