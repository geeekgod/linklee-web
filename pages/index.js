import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useQueryClient } from "@tanstack/react-query";
import _, { set } from 'lodash';

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
import useLinks from "@hooks/queries/useLinks";

import { getHiResDp } from "@utils/helpers";
import TextField from "@components/TextField";
import useCreateLink from "@hooks/mutations/useCreateLink";

export default function Home() {
  const [isFetchingUsername, setIsFetchingUsername] = useState(false);
  const [usernameExists, setUsernameExists] = useState(true);
  const [usernameError, setUsernameError] = useState(false);
  const [usernameInput, setUsername] = useState("");
  const router = useRouter();
  const queryClient = useQueryClient();
  const { user, userData } = useUser();

  const { createUser } = useCreateUser({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const { createLink } = useCreateLink({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["link", user?.uid] });
    },
  })

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
      console.log("USERNAME INPUT ", usernameInput)
      if (usernameInput?.length > 0) {
        createLink({
          data: {
            uid: userData?.user?.uid,
            username: usernameInput,
            updatedLinkCount: 0,
            url: "https://linklee.xyz/",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          userId: userData?.user?.uid,
        })
      }

    },
  });

  const { checkUsernameExistsfn } = useLinks();

  const handleUsername = async (username) => {
    setIsFetchingUsername(true);
    if (username?.length > 0) {
      const data = await checkUsernameExistsfn(username);
      if (data?.success === true) {
        setUsernameExists(true);
        setUsernameError(true);
      } else if (data?.success === false) {
        setUsername(username)
        setUsernameExists(false);
        setUsernameError(false);
      }
      setIsFetchingUsername(false);
    }
  }

  const debouncedCheckUsernameExists = _.debounce(handleUsername, 800);


  useEffect(() => {
    if (userData) {
      if (!usernameExists) {
        router.push({
          pathname: '/claimed',
          query: { username: usernameInput }
        })
      }
      router.push(`/connect/${userData?.username}`);
    }
  }, [router, userData]);

  return (
    <Container>
      <Page title="linklee | a link you can redirect anywhere" />

      <Header />

      {user === undefined || user ? (
        <Center>
          <ActivityIndicator />
        </Center>
      ) : (
        <Center>
          <Box className="md:h-[400px] md:w-[430px]">
            <Column className="flex-1 items-center justify-center">
              <Text className="text-[76px] font-normal md:text-[96px] opacity-80">
                linklee.
              </Text>

              <Text className="mt-2 text-sm font-normal opacity-80 md:text-xl">
                a link you can redirect anywhere
              </Text>
            </Column>

            <Column className="mx-5">
              <TextField
                prefix="linklee.xyz/"
                placeholder="yourname"
                onTextChange={(text) => {
                  debouncedCheckUsernameExists(text)
                }}
                className="placeholder:italic"
              />
              <Button
                className="my-3"
                loading={isLoggingInWithGoogle}
                onClick={loginWithGoogle}
                disabled={usernameExists}
              >
                Claim with Google
              </Button>

              {
                isFetchingUsername && (
                  <div className="flex items-center justify-center">
                    <ActivityIndicator size="small" />
                  </div>
                )
              }
              {
                usernameError && (
                  <Text className="text-center text-xs text-red-500 font-semibold">
                    Username already exists
                  </Text>
                )
              }

              <Row className="mb-6 mt-2 justify-center">
                <Text className="text-center text-xs font-normal opacity-60">
                  Already a user?
                </Text>

                <Text onClick={loginWithGoogle} className={`ml-1 cursor-pointer text-center text-xs font-semibold underline underline-offset-4 opacity-60`}>
                  Login
                </Text>
              </Row>
            </Column>
          </Box>
          <Text className="mt-8 text-sm font-normal opacity-60 text-center italic">
            *before you think this is just bit.ly,
          </Text>
          <Text className="mt-1.5 text-sm font-normal opacity-60 text-center italic">
          changing source destination on bit.ly is paid
          </Text>
        </Center>
      )}
    </Container>
  );
}
