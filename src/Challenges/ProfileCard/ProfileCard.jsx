import React from "react";

const ProfileCard = ({ theme }) => {
  return (
    <div className="bg-gray-100/90 text-gray-900 dark:text-gray-200 dark:bg-[#1e262dc9] w-72 rounded-lg p-2">
      <div className="relative rounded-lg overflow-hidden">
        {
          <img
            src={
              theme === "dark"
                ? "https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ54x3RQIBMPWuKvecCPc4FPoaWp_4pIbW_gg&s"
            }
            alt="Profile image"
            className="w-72"
          />
        }
        <div className="absolute top-0 right-0 h-full w-full bg-black/30"></div>
      </div>
      <div className="px-3 py-4 flex flex-col gap-4">
        <h1 className="text-xl font-semibold">Muhammad Shahram</h1>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          I am a Software developer. Who can crete beautifull websites with
          interactive User interfaces.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
