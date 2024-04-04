import { Inter } from "next/font/google";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@styles/globals.css";

const queryClient = new QueryClient();
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.className} flex h-[100dvh] w-screen md:h-screen`}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </main>
  );
}
