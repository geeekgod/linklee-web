import Head from "next/head";
import { useState } from "react";

import ActivityIndicator from "@components/ActivityIndicator";
import Button from "@components/Button";
import Header from "@components/Header";
import OutlineButton from "@components/OutlineButton";
import TextField from "@components/TextField";

import useAuthCheck from "@hooks/useAuthCheck";

export default function Connect() {
  const [projectID, setProjectID] = useState(null);

  const { ready } = useAuthCheck();

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
          {!ready ? (
            <ActivityIndicator />
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center md:h-[450px] md:w-[675px] md:flex-none md:rounded-xl md:border md:border-gray-200 md:border-opacity-80 md:bg-[#F2F4F5]">
              <div className="flex flex-col items-center justify-center">
                <div className="text-center text-[24px] font-bold leading-none text-black text-opacity-95 md:text-[36px] md:font-medium">
                  Allow Glue to access your
                </div>
                <div className="text-center text-[24px] font-bold leading-none text-black text-opacity-95 md:text-[36px] md:font-medium">
                  Firebase / Firestore Account?
                </div>
              </div>
              <div className="flex items-start justify-start flex-col mt-3 py-4 text-left font-normal leading-none text-black text-opacity-80 md:text-xl md:font-light w-full px-4 sm:px-8 md:px-10">
                <p className="text-[16px] font-semibold">
                  Credentials (required)
                </p>
                <p className="mt-1 text-[12px] leading-tight opacity-[80%] md:text-[14px]">
                  Service account key, see{" "}
                  <a
                    className="text-blue-500 hover:underline"
                    href="https://firebase.google.com/docs/admin/setup#initialize_the_sdk_in_non-google_environments"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>{" "}
                  for documentation on how to obtain this key.
                </p>
              </div>
              <div className="mx-5 flex w-full flex-col gap-2 px-4 sm:px-8 md:px-10">
                <TextField
                  className="h-[150px]"
                  placeholder='{
                    "type": "service_account",
                    "project_id": "yourProjectId",
                    "private_key_id": "yourPrivateKeyId",
                    "private_key": "-----BEGIN PRIVATE KEY-----
                  11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111=
                  -----END PRIVATE KEY-----
                  ",
                    "client_email": "google-adminsdk-pxixy@somethinggooglerelated.iam.gserviceaccount.com",
                    "client_id": "111111111111111111111",
                    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                    "token_uri": "https://oauth2.googleapis.com/token",
                    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/google-adminsdk-pxixy%40somethinggooglerelated.iam.gserviceaccount.com"
                  }'
                  required={true}
                  value={projectID}
                  onTextChange={(value) => setProjectID(value)}
                  expandable={true}
                />
                <div className="flex flex-col items-center justify-center gap-x-4 sm:flex-row pt-4">
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
          )}
        </div>
      </div>
    </>
  );
}
