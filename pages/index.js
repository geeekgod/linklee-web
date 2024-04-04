import Head from "next/head";
import Header from "@components/components/Header";
import Button from "@components/components/Button";
import Firebase from "@svgs/Firebase";
import TextField from "@components/components/TextField";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Glue`}</title>
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
          <div className="flex flex-1 flex-col md:h-[475px] md:w-[435px] md:flex-none md:rounded-xl md:border md:border-gray-200 md:border-opacity-80 md:bg-white">
            <div className="flex flex-1 flex-col items-center justify-center">
              <div className="text-[76px] font-normal leading-none text-black md:text-[125px] opacity-80">
                glue.
              </div>

              <div className="mt-3 text-center text-sm font-normal leading-none text-black text-opacity-80 md:text-xl md:font-light">
                zapier for push notifications
              </div>
            </div>

            <div className="mx-5 flex flex-col">
              <TextField label="Email" placeholder="Email" />
              <Button
                className="my-3"
              >
                <Firebase width={20} height={20} className="mr-2" />
                <span>Sign In with Firebase / Firestore</span>
              </Button>

              <div className="mb-6 flex justify-center">
                <p className="text-center text-xs font-normal text-black text-opacity-60">
                Random text,
                </p>

                <p
                  className="ml-1 cursor-pointer text-center text-xs font-semibold text-black text-opacity-60 underline underline-offset-4"
                >
                  will use for something else
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
