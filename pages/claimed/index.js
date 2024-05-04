import { useRouter } from "next/router";

import Box from "@components/Box";
import Button from "@components/Button";
import Center from "@components/Center";
import Column from "@components/Column";
import Container from "@components/Container";
import Header from "@components/Header";
import Page from "@components/Page";
import Text from "@components/Text";

import useAuthCheck from "@hooks/useAuthCheck";
import ActivityIndicator from "@components/ActivityIndicator";

export default function Home() {
    const router = useRouter();

    let username = router.query?.username

    const { ready } = useAuthCheck();

    console.log("READY ", ready)

    return (
        <Container>
            <Page title="linklee | a link you can redirect anywhere" />

            <Header />

            {!ready ? (
                <ActivityIndicator />
            ) : (
                <Center>
                    <Box className="md:h-[400px] md:w-[430px] !bg-[#F2F4F5] py-4">
                        <Column className="flex-1 items-center justify-center">
                            <Text className="text-[32px] font-normal md:text-[48px]">
                                Nice one!
                            </Text>

                            <Text className="mt-5 text-[#979797] text-sm font-normal opacity-80 md:text-xl">
                                link.app/{username} 🎊
                            </Text>
                        </Column>

                        <Column className="mx-5">
                            <Button
                                className="my-5"
                                onClick={() => { router.push(`/connect/${username}`) }}
                            >
                                Connect your link to domain
                            </Button>
                        </Column>
                    </Box>
                </Center>
            )}
        </Container>
    );
}
