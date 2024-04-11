import Head from "next/head";

export default function Page({ title }) {
  return (
    <Head>
      <title>{title}</title>
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
  );
}
