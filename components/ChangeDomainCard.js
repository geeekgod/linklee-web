import React from "react";

import Button from "./Button";
import TextField from "./TextField";
import Text from "./Text";
import Box from "./Box";
import Row from "./Row";
import Column from "./Column";
import { MdContentCopy } from "react-icons/md";
import UneditableTextField from "./UneditableTextField";

export default function ChangeDomainCard({
    title,
    disabledInputText,
    inputLabel,
    setUrl,
    buttonText,
    buttonAction,
    numberUpdated,
    placeholderText,
    handleCopy
}) {

    return (
        <div className="flex h-[420px] w-[500px] flex-col items-center justify-start rounded-xl border border-[#D8D8D8] bg-[#FAFAFA]">
            <div className="border-b px-4 py-4 sm:px-8 sm:py-8 w-full">
                <h1 className="text-lg font-medium">
                    {title}
                </h1>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-y-4 px-4 py-4 sm:gap-y-8 sm:px-8 sm:py-8">
                <div className="flex flex-row items-center justify-evenly w-full">
                    <div className="relative w-full">
                        <TextField
                            mainClassName="w-full"
                            className={"bg-gray-100"}
                            placeholder={disabledInputText?.slice(8)}
                            label="Your Link"
                            onTextChange={(text) => { }}
                            disabled={true}
                        />
                        <Button onClick={handleCopy} className="absolute top-[50%] right-2 w-6 h-6 bg-[#25252533]">
                            <MdContentCopy className="text-white" />
                        </Button>
                    </div>
                    {/* small black circle */}
                    <div className="w-3 h-1.5 bg-black rounded-full mt-4"></div>
                    {/* horizontal line */}
                    <div className="w-[50%] h-[1px] bg-black mt-4"></div>
                    {/* small black circle */}
                    <div className="w-3 h-1.5 bg-black rounded-full mt-4"></div>

                    <UneditableTextField
                        mainClassName="w-full !bg-white"
                        className="!bg-white"
                        placeholder={placeholderText}
                        label="Destination"
                        onTextChange={(text) => setUrl(text)}
                        bottomText={`${3 - numberUpdated}/3 changes left`}
                        disabled={true}
                    />
                </div>
                <Column className="w-full mt-2">
                    <Button onClick={() => buttonAction("change")} className="w-full mt-4">
                        <span className="px-4 py-3 text-sm font-medium leading-tight text-white">
                            {buttonText}
                        </span>
                    </Button>
                    <Button onClick={() => { }} disabled={true} className="w-full mt-4 bg-[#25252533]">
                        <span className="pl-4 py-3 text-sm font-medium leading-tight text-white ">
                            Connected
                        </span>
                        {/* green dot */}
                        <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                    </Button>
                    <Text onClick={() => buttonAction("disconnect")} className="w-full mt-4 text-center cursor-pointer">
                        <span className="px-4 py-3 text-sm font-medium leading-tight text-black text-center">
                            Disconnect
                        </span>
                    </Text>
                </Column>
            </div>
        </div>
    );
}
