import ActivityIndicator from "@components/ActivityIndicator";
import Header from "@components/Header";
import Page from "@components/Page";

import useAuthCheck from "@hooks/useAuthCheck";
import Center from "@components/Center";
import Box from "@components/Box";
import Column from "@components/Column";
import Text from "@components/Text";
import useLinks from "@hooks/queries/useLinks";
import useCreateLink from "@hooks/mutations/useCreateLink";
import { useRouter } from "next/router";

export default function Connect() {

  const { ready } = useAuthCheck();
  const { linkData } = useLinks()
  const { updateUsername } = useCreateLink()

  const ConnectedView = (linkData) => {
    return (
        <Box className="md:h-[400px] md:w-[430px] !bg-[#F2F4F5] py-4">
            <Column className="flex-1 items-center justify-center">
            <Text className="text-[32px] font-normal md:text-[48px]">
                Connected
            </Text>  
            </Column>
        </Box>
    )
  }

  const ConnectLinkView = (linkData) => {
    return (
        <Box className="md:h-[400px] md:w-[430px] !bg-[#F2F4F5] py-4">
            <Column className="flex-1 items-center justify-center">
            <Text className="text-[32px] font-normal md:text-[48px]">
                Connect
            </Text>  
            </Column>
        </Box>
    )
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
            <Center>
                {(!linkData?.url?.includes("linklee")) ? ConnectedView(linkData) : ConnectLinkView(linkData)}
            </Center>
          )}
        </div>
      </div>
    </>
  );
}
