import { useEffect, useState } from "react";
import { Inter } from "next/font/google";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@styles/globals.css";
import AppContext from "@utils/context";
import { firebaseAuth } from "@utils/firebase";

const queryClient = new QueryClient();
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  return (
    <main className={`${inter.className} flex h-[100dvh] w-screen md:h-screen`}>
      <AppContext.Provider value={{ user }}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </AppContext.Provider>

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
