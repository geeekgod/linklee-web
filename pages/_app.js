import { Inter } from "next/font/google";

import "@styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.className} flex h-[100dvh] w-screen md:h-screen`}>
      <Component {...pageProps} />
    </main>
  );
}
