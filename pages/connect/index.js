import { useEffect, useState } from "react";
import _ from 'lodash';

import ActivityIndicator from "@components/ActivityIndicator";
import Header from "@components/Header";
import Page from "@components/Page";

import useAuthCheck from "@hooks/useAuthCheck";
import Center from "@components/Center";
import Box from "@components/Box";
import Column from "@components/Column";
import Text from "@components/Text";
import useLinks from "@hooks/queries/useLinks";
import { useRouter } from "next/router";
import TextField from "@components/TextField";
import Button from "@components/Button";
import Row from "@components/Row";
import useCreateLink from "@hooks/mutations/useCreateLink";
import useUser from "@hooks/queries/useUser";
import Footer from "@components/Footer";

export default function Connect() {

  const { ready } = useAuthCheck();
  const { linkData, checkUsernameExistsfn } = useLinks()
  const [usernameClaimed, setUsernameClaimed] = useState(true)
  const [isFetchingUsername, setIsFetchingUsername] = useState(false);
  const [usernameExists, setUsernameExists] = useState(true);
  const [usernameError, setUsernameError] = useState("");
  const [usernameLengthError, setUsernameLengthError] = useState(false);
  const [usernameInput, setUsername] = useState("");
  const router = useRouter();

  const { user, userData } = useUser()

  const { createLink } = useCreateLink({
    onSuccess: () => {
      router.push(`/connect/${usernameInput}`)
    },
  })

  useEffect(() => {
    if (linkData?.username) {
      router.push(`/connect/${linkData?.username}`)
    }
  }, [!!linkData?.username])

  useEffect(() => {
    if (ready && (linkData === null || linkData === undefined)) {
      setUsernameClaimed(false)
    }
  }, [ready, !!linkData?.username])

  const handleUsername = async (username) => {
    setIsFetchingUsername(true);
    if (username?.length > 0) {
      if (username?.length > 20) {
        setUsernameLengthError("Username should be less than 20 characters.");
        setIsFetchingUsername(false);
        return;
      } else if (username?.length < 1) {
        setUsernameLengthError("Username should be more than 1 character.");
        setIsFetchingUsername(false);
        return;
      } else {
        const data = await checkUsernameExistsfn(username);
        if (data?.success === true) {
          setUsernameExists(true);
          setUsernameError(true);
        } else if (data?.success === false) {
          setUsername(username)
          setUsernameExists(false);
          setUsernameError(false);
        }
      }
      setIsFetchingUsername(false);
    }
  }

  const debouncedCheckUsernameExists = _.debounce(handleUsername, 300);

  const handleClaim = async () => {
    createLink({
      data: {
        uid: userData?.id,
        username: usernameInput,
        updatedLinkCount: 0,
        url: "https://linklee.xyz/",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      userId: userData?.id,
    })
  }

  return (
    <>
      <Page title="Connect" />

      <div className="flex flex-1 flex-col">
        <Header />

        <div className="flex flex-1 bg-bg md:items-center md:justify-center">
          {!ready ? (
            <ActivityIndicator />
          ) : (
            !usernameClaimed ? (
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

                  <Column className="mx-5 my-4">
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
                      loading={isFetchingUsername}
                      onClick={handleClaim}
                      disabled={usernameExists}
                    >
                      Claim username
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
                    {
                      usernameLengthError && (
                        <Text className="text-center text-xs text-red-500 font-semibold">
                          {usernameLengthError}
                        </Text>
                      )
                    }
                  </Column>
                </Box>
              </Center>
            ) : (
              linkData ? (
                <Center>
                  <Box className="md:h-[400px] md:w-[430px] !bg-[#F2F4F5] py-4">
                    <Column className="flex-1 items-center justify-center">
                      <Text className="text-[32px] font-normal md:text-[48px]">
                        Page not found
                      </Text>
                    </Column>
                  </Box>
                </Center>
              ) : (
                <ActivityIndicator />
              )
            )
          )}
        </div>
      </div>
    </>
  );
}
