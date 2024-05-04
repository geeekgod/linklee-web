import { useState } from "react";

import ActivityIndicator from "@components/ActivityIndicator";
import CreateNotificationCard from "@components/CreateNotificationCard";
import Header from "@components/Header";

import useAuthCheck from "@hooks/useAuthCheck";

export default function Create() {
  const { ready } = useAuthCheck();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  return (
    <div className="flex h-[100dvh] w-screen md:h-screen">
      <div className="flex flex-1 flex-col">
        <Header />

        <div className="flex flex-1 gap-x-10 bg-bg md:items-center md:justify-center md:gap-x-16 ">
          {!ready ? (
            <ActivityIndicator />
          ) : (
            <>
              <CreateNotificationCard
                setTitle={setTitle}
                setText={setText}
                setImage={setImage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
