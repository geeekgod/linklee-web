import React from "react";

import Button from "@components/Button";
import ImageUpload from "@components/ImageUpload";
import TextField from "@components/TextField";

export default function CreateNotificationCard() {
  return (
    <div className="flex h-[620px] w-[500px] flex-col items-center justify-start rounded-xl border border-[#D8D8D8] bg-[#FAFAFA]">
      <div className="border-b px-4 py-4 sm:px-8 sm:py-8">
        <h1 className="text-lg font-medium">
          Create a Notification to be sent to your users from Firestore /
          Firebase
        </h1>
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-y-4 px-4 py-4 sm:gap-y-8 sm:px-8 sm:py-8">
        <TextField
          className="w-full"
          placeholder="Enter the title"
          label="Enter the title"
        />
        <TextField
          placeholder="Enter notification text"
          label="Enter notification text"
          expandable
        />
        <ImageUpload labelText="Upload favicon(optional)" />
        <Button className="w-full">
          <span className="px-4 py-3 text-sm font-medium leading-tight text-white">
            Continue
          </span>
        </Button>
      </div>
    </div>
  );
}
