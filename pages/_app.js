import { Inter } from "next/font/google";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
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

      <ToastContainer
        autoClose={3000}
        bodyClassName="text-[14px] font-bold text-white"
        closeButton={false}
        closeOnClick
        pauseOnFocusLoss={false}
        position="top-right"
        progressClassName="toastProgressStyle"
        toastStyle={{ backgroundColor: "black" }}
      />
    </main>
  );
}
