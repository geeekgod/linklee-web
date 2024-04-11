import Image from "next/image";
import React from "react";

import NotificationCard from "./NotificationCard";

const IphoneComponent = ({ title, text, image }) => {
  return (
    <div className={`flex h-[600px] w-[500px] items-center justify-center`}>
      <Image
        className="absolute bottom-[-8%]"
        src="/iphone.png"
        width={400}
        height={400}
        alt="iphone"
      />

      {/* glassmorphism notification card */}
      <div className="flex h-full flex-col items-center justify-center gap-y-4">
        {
          <NotificationCard
            title={title?.length > 0 ? title : "Write something"}
            text={text?.length > 0 ? text : "yo click on this"}
            logo={image !== null ? image : "./notification-icon.png"}
          />
        }
      </div>
    </div>
  );
};

export default IphoneComponent;
