import { useState } from "react";
import ActivityIndicator from "@components/ActivityIndicator";
import Header from "@components/Header";
import Page from "@components/Page";
import DomainCard from "@components/DomainCard";

import useAuthCheck from "@hooks/useAuthCheck";
import Center from "@components/Center";
import Box from "@components/Box";
import Column from "@components/Column";
import Text from "@components/Text";
import useLinks from "@hooks/queries/useLinks";
import useCreateLink from "@hooks/mutations/useCreateLink";
import ChangeDomainCard from "@components/ChangeDomainCard";

export default function Connect() {
    const [updatedData, setUpdatedData] = useState(null);
    const { ready } = useAuthCheck();
    const { linkData } = useLinks()
    const { updateUsername } = useCreateLink()
    const [url, setUrl] = useState("")
    const [newLink, setNewLink] = useState("")

    const checkValidUrl = (url) => {
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(url);
    }

    const handleUsername = async (type = "change") => {
        console.log("NEW LINK ", newLink)
        if (checkValidUrl(newLink) && type === "change") {
            const res = await updateUsername({
                id: linkData?.uid,
                data: {
                    updatedLinkCount: (+linkData?.updatedLinkCount) + 1,
                    url: newLink,
                    updatedAt: new Date().toISOString()
                }
            })
            console.log("RES ", res)
            setUpdatedData(res)
            setNewLink("")
            window.location.reload()
        } else if (newLink === "" && type === "disconnect") {
            const res = await updateUsername({
                id: linkData?.uid,
                data: {
                    updatedLinkCount: (+linkData?.updatedLinkCount) + 1,
                    url: "https://linklee.xyz",
                    updatedAt: new Date().toISOString()
                }
            })
            console.log("RES ", res)
            setUpdatedData(res)
            setNewLink("")
            window.location.reload()
        } else {
            alert("Invalid URL")
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(`https://linklee.app/${linkData?.username}`)
        alert("Copied to clipboard")
    }

    return (
        <>
            <Page title="Connect" />

            <div className="flex flex-1 flex-col">
                <Header />

                <div className="flex flex-1 bg-bg md:items-center md:justify-center">
                    {(!ready) ? (
                        <ActivityIndicator />
                    ) : (
                        linkData ? (
                            <Center>
                                {((linkData?.url?.includes("linklee")) && updatedData === null) ?
                                    (
                                        <DomainCard
                                            title="Connect your link to any domain"
                                            titleSecondary="Send it to your git, twitter, profile or wherever you want"
                                            disabledInputText={`https://linklee.app/${linkData?.username}`}
                                            buttonText="Connect"
                                            buttonAction={handleUsername}
                                            setUrl={setNewLink}
                                            handleCopy={handleCopy}
                                            numberUpdated={updatedData?.data?.updatedLinkCount || linkData?.updatedLinkCount}
                                        />
                                    ) :
                                    (
                                        <ChangeDomainCard
                                            title="Your link is connected"
                                            disabledInputText={`https://linklee.app/${updatedData ? updatedData?.data?.username : linkData?.username}`}
                                            inputLabel="Destination"
                                            buttonText="Change Destination"
                                            buttonAction={handleUsername}
                                            setUrl={setNewLink}
                                            handleCopy={handleCopy}
                                            placeholderText={updatedData?.data?.url ? updatedData?.data?.url : linkData?.url}
                                            numberUpdated={updatedData?.data?.updatedLinkCount || linkData?.updatedLinkCount}
                                        />
                                    )
                                }
                            </Center>
                        ) : (
                            <ActivityIndicator />
                        )
                    )}
                </div>
            </div>
        </>
    );
}
