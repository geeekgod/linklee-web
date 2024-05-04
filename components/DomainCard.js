import React from "react";

import Button from "./Button";

import TextField from "./TextField";
import { MdContentCopy } from "react-icons/md";


export default function DomainCard({
    title,
    titleSecondary,
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
        <div className="flex h-[430px] w-[500px] flex-col items-center justify-start rounded-xl border border-[#D8D8D8] bg-[#FAFAFA]">
            <div className="border-b px-4 py-4 sm:px-8 sm:py-8 w-full">
                <h1 className="text-lg font-medium">
                    {title}
                </h1>
                <p className="text-xs text-[#979797]">
                    {titleSecondary}
                </p>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-y-4 px-4 py-4 sm:gap-y-8 sm:px-8 sm:py-8">
                <div className="relative w-full">
                    <TextField
                        mainClassName="w-full"
                        className={"bg-gray-100"}
                        placeholder={disabledInputText}
                        label="Your Link"
                        onTextChange={(text) => { }}
                        disabled={true}
                        bottomText="You cannot change this."
                    />
                    <Button onClick={handleCopy} className="absolute top-[50%] right-2 w-6 h-6 bg-[#25252533]">
                        <MdContentCopy className="text-white" />
                    </Button>
                </div>
                <TextField
                    mainClassName="w-full"
                    placeholder={placeholderText ? placeholderText : "https://linklee.xyz/longurl"}
                    label="Destination"
                    onTextChange={(text) => setUrl(text)}
                    bottomText="You can change this 3 times for free."
                    disabled={numberUpdated >= 3}
                />
                <Button onClick={buttonAction} className="w-full mt-4">
                    <span className="px-4 py-3 text-sm font-medium leading-tight text-white">
                        {buttonText}
                    </span>
                </Button>
            </div>
        </div>
    );
}
