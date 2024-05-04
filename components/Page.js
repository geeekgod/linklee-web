import Head from "next/head";

export default function Page({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="linklee.xyz" />
      <meta name="twitter:title" content="linklee.xyz" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta
        property="og:description"
        content={`a link you can redirect anywhere`}
      />

      <meta
        name="twitter:description"
        content={`a link you can redirect anywhere`}
      />

      <meta name="twitter:image" content={`https://linklee-web.vercel.app/api/og`} />

      <meta property="og:image" content={`https://linklee-web.vercel.app/api/og`} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
