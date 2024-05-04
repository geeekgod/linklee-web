import { useEffect, useState } from "react";

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

export default function Connect() {

  const { ready } = useAuthCheck();
  const { linkData } = useLinks()
  const router = useRouter();

  useEffect(() => {
    if(linkData?.username) {
      router.push(`/connect/${linkData?.username}`)
    }
  }, [!!linkData?.username])

  return (
    <>
      <Page title="Connect" />

      <div className="flex flex-1 flex-col">
        <Header />

        <div className="flex flex-1 bg-bg md:items-center md:justify-center">
          {!ready ? (
            <ActivityIndicator />
          ) : (
            <Center>
              <Box className="md:h-[400px] md:w-[430px] !bg-[#F2F4F5] py-4">
                <Column className="flex-1 items-center justify-center">
                  <Text className="text-[32px] font-normal md:text-[48px]">
                    Page not found
                  </Text>  
                </Column>
              </Box>
            </Center>
          )}
        </div>
      </div>
    </>
  );
}
