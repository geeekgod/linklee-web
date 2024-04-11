import Image from "next/image";
import React from "react";

const NotificationCard = ({
  logo = "/notification-icon.png",
  title = "Notification Title",
  text = "Notification Text",
  onClick = () => {},
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex h-[60px] w-[300px] flex-row items-center justify-start rounded-xl bg-white bg-opacity-20 px-4 backdrop-blur-lg`}
    >
      <Image
        alt="notification"
        className="rounded-xl"
        src={logo}
        width={40}
        height={40}
      />
      <div className={`ml-2 flex flex-col items-start justify-center`}>
        <p className="text-sm font-semibold text-white">
          {title?.length > 16 ? title.slice(0, 20) + "..." : title}
        </p>
        <p className="text-xs text-white">
          {text?.length > 20 ? text.slice(0, 20) + "..." : text}
        </p>
      </div>
    </div>
  );
};

export default NotificationCard;
