import Head from "next/head";
import { useState } from "react";

import { FcGoogle } from "react-icons/fc";

import Header from "@components/Header";
import Button from "@components/Button";
import OutlineButton from "@components/OutlineButton";
import TextField from "@components/TextField";

export default function Home() {
  const [projectID, setProjectID] = useState(null);

  return (
    <>
      <Head>
        <title>Glue</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="tryglue.dev" />
        <meta name="twitter:title" content="tryglue.dev" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="og:description"
          content={`zapier for push notifications`}
        />

        <meta
          name="twitter:description"
          content={`zapier for push notifications`}
        />

        <meta name="twitter:image" content={`https://tryglue.dev/api/og`} />

        <meta property="og:image" content={`https://tryglue.dev/api/og`} />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-1 flex-col">
        <Header />

        <div className="flex flex-1 bg-bg md:items-center md:justify-center">
          <div className="flex flex-1 flex-col items-center justify-center md:h-[420px] md:w-[675px] md:flex-none md:rounded-xl md:border md:border-gray-200 md:border-opacity-80 md:bg-[#F2F4F5]">
            <div className="flex flex-col items-center justify-center">
              <div className="text-center text-[24px] font-bold leading-none text-black text-opacity-95 md:text-[36px] md:font-medium">
                Allow Glue to access your
              </div>
              <div className="text-center text-[24px] font-bold leading-none text-black text-opacity-95 md:text-[36px] md:font-medium">
                Firebase / Firestore Account?
              </div>
              <div className="mt-3 px-4 py-4 text-left font-normal leading-none text-black text-opacity-80 sm:px-8 md:px-10 md:text-xl md:font-light">
                <p className="text-[16px] font-semibold">
                  Project ID (required)
                </p>
                <p className="mt-1 text-[12px] leading-tight opacity-[80%] md:text-[14px]">
                  Your Project&apos;s ID, which usually doesn&apos;t contain any
                  spaces. You can learn more about finding your project&apos;s
                  ID here.
                </p>
              </div>
            </div>
            <div className="mx-5 flex w-full flex-col gap-2 px-4 sm:px-8 md:px-10">
              <TextField
                placeholder="Enter Project ID"
                required={true}
                value={projectID}
                onTextChange={(value) => setProjectID(value)}
              />
              <div className="flex flex-col items-center justify-center gap-x-4 sm:flex-row">
                <Button>
                  <span className="px-4">
                    Yes, Continue to Firebase / Firestore
                  </span>
                </Button>
                <OutlineButton>
                  <span className="px-4">Cancel</span>
                </OutlineButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
