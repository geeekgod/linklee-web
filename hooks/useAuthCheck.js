import { useEffect } from "react";
import { useRouter } from "next/router";

import useUser from "@hooks/queries/useUser";

export default function useAuthCheck() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user === null) {
      router.push("/");
    }
  }, [router, user]);

  return {
    ready: !!user,
  };
}
