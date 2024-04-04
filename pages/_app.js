import "@components/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.className} flex h-[100dvh] w-screen md:h-screen`}>
      <Component {...pageProps} />
    </main>
  );
}
