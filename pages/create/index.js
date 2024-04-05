import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";
import Header from "@components/Header";
import CreateNotification from "@components/CreateNotificationCard";

const inter = Inter({ subsets: ["latin"] });

const IphoneComponent = () => {
  return (
    <div className={`flex h-[600px] w-[500px] items-center justify-center`}>
      <Image
        className="absolute bottom-[-8%]"
        src="/iphone.png"
        width={400}
        height={400}
        alt="iphone"
      />
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex h-[100dvh] w-screen md:h-screen">
      <div className="flex flex-1 flex-col">
        <Header />

        <div className="flex flex-1 gap-x-10 bg-bg md:items-center md:justify-center md:gap-x-16 ">
          <CreateNotification />
          <IphoneComponent />
        </div>
      </div>
    </div>
  );
}
