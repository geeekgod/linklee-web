import ActivityIndicator from "@components/ActivityIndicator";
import Header from "@components/Header";
import CreateNotificationCard from "@components/CreateNotificationCard";
import IphoneComponent from "@components/IphoneComponent";

import useAuthCheck from "@hooks/useAuthCheck";

export default function Create() {
  const { ready } = useAuthCheck();

  return (
    <div className="flex h-[100dvh] w-screen md:h-screen">
      <div className="flex flex-1 flex-col">
        <Header />

        <div className="flex flex-1 gap-x-10 bg-bg md:items-center md:justify-center md:gap-x-16 ">
          {!ready ? (
            <ActivityIndicator />
          ) : (
            <>
              <CreateNotificationCard />
              <IphoneComponent />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
