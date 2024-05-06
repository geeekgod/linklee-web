import Head from "next/head";
import Script from "next/script";

export default function Page({ title }) {
  return (
    <>
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

        <meta name="twitter:image" content={`https://linklee.xyz/og-image.png`} />

        <meta property="og:image" content={`https://linklee.xyz/og-image.png`} />

        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-7KZD26H6V5"
      ></Script>
      <Script id="ga">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7KZD26H6V5');
        `}
      </Script>
    </>
  );
}
