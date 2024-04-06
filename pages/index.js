import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { FcGoogle } from "react-icons/fc";
import { useQueryClient } from "@tanstack/react-query";

import Header from "@components/Header";
import Button from "@components/Button";
import ActivityIndicator from "@components/ActivityIndicator";

import useUser from "@hooks/queries/useUser";
import useCreateUser from "@hooks/mutations/useCreateUser";
import useGoogleLogin from "@hooks/mutations/useGoogleLogin";

import { getHiResDp } from "@utils/helpers";

export default function Home() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { user, userData } = useUser();

  const { createUser } = useCreateUser({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const { isLoggingInWithGoogle, loginWithGoogle } = useGoogleLogin({
    onSuccess: async (userData) => {
      createUser({
        data: {
          dp: getHiResDp(userData?.user?.photoURL),
          email: userData?.user?.email,
          id: userData?.user?.uid,
          name: userData?.user?.displayName,
        },
        userId: userData?.user?.uid,
      });
    },
  });

  useEffect(() => {
    if (userData) {
      router.push("/connect");
    }
  }, [router, userData]);

  return (
    <>
      <Head>
        <title>glue | zapier for push notifications</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="tryglue.dev" />
        <meta name="twitter:title" content="tryglue.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://tryglue.dev/api/og" />
        <meta name="twitter:image" content="https://tryglue.dev/api/og" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:description"
          content="zapier for push notifications"
        />

        <meta
          name="twitter:description"
          content="zapier for push notifications"
        />
      </Head>

      <div className="flex flex-1 flex-col">
        <Header />

        <div className="flex flex-1 bg-bg md:items-center md:justify-center">
          {user === undefined || user ? (
            <ActivityIndicator />
          ) : (
            <div className="flex flex-1 flex-col md:h-[417px] md:w-[429px] md:flex-none md:rounded-xl md:border md:border-gray-200 md:border-opacity-80 md:bg-white">
              <div className="flex flex-1 flex-col items-center justify-center">
                <div className="text-[76px] font-normal leading-none text-black opacity-80 md:text-[124px]">
                  glue.
                </div>

                <div className="mt-5 text-center text-sm font-normal leading-none text-black text-opacity-80 md:text-xl">
                  zapier for push notifications
                </div>
              </div>

              <div className="mx-5 flex flex-col">
                <Button
                  loading={isLoggingInWithGoogle}
                  onClick={loginWithGoogle}
                  icon={<FcGoogle className="mr-2" size={20} />}
                  className="my-3"
                >
                  Sign In with Google
                </Button>

                <div className="mb-6 flex justify-center">
                  <p className="text-center text-xs font-normal text-black text-opacity-60">
                    For now,
                  </p>

                  <p className="ml-1 cursor-pointer text-center text-xs font-semibold text-black text-opacity-60 underline underline-offset-4">
                    we only support Firebase Firestore
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
