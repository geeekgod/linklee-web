import { useRouter } from "next/router";
import { useEffect } from "react";

import { useQueryClient } from "@tanstack/react-query";
import { FcGoogle } from "react-icons/fc";

import ActivityIndicator from "@components/ActivityIndicator";
import Box from "@components/Box";
import Button from "@components/Button";
import Center from "@components/Center";
import Column from "@components/Column";
import Container from "@components/Container";
import Header from "@components/Header";
import Page from "@components/Page";
import Row from "@components/Row";
import Text from "@components/Text";

import useCreateUser from "@hooks/mutations/useCreateUser";
import useGoogleLogin from "@hooks/mutations/useGoogleLogin";
import useUser from "@hooks/queries/useUser";

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
    <Container>
      <Page title="glue | zapier for push notifications" />

      <Header />

      {user === undefined || user ? (
        <Center>
          <ActivityIndicator />
        </Center>
      ) : (
        <Center>
          <Box className="md:h-[430px] md:w-[430px]">
            <Column className="flex-1 items-center justify-center">
              <Text className="text-[76px] font-normal md:text-[124px]">
                glue.
              </Text>

              <Text className="mt-5 text-sm font-normal opacity-80 md:text-xl">
                zapier for push notifications
              </Text>
            </Column>

            <Column className="mx-5">
              <Button
                className="my-3"
                icon={<FcGoogle className="mr-2" size={20} />}
                loading={isLoggingInWithGoogle}
                onClick={loginWithGoogle}
              >
                Sign In with Google
              </Button>

              <Row className="mb-6 mt-2 justify-center">
                <Text className="text-center text-xs font-normal opacity-60">
                  For now,
                </Text>

                <Text className="ml-1 cursor-pointer text-center text-xs font-semibold underline underline-offset-4 opacity-60">
                  we only support Firebase Firestore
                </Text>
              </Row>
            </Column>
          </Box>
        </Center>
      )}
    </Container>
  );
}
