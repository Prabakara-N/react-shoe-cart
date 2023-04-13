import React from "react";
import { AiFillEdit } from "react-icons/ai";

const UserInfo = () => {
  return (
    <div className="bg-slate-800 w-full h-full flex flex-col min-h-screen justify-center items-center text-white">
      <div className="bg-slate-900/50 rounded-lg p-6 w-[95%] tablet:w-[450px] flex flex-col gap-y-8">
        <div className="-mt-16">
          <img
            src="https://res.cloudinary.com/daxmjqsy2/image/upload/v1677089121/roman-synkevych-UT8LMo-wlyk-unsplash_ugespl.jpg"
            alt="profile"
            className="w-[100px] h-[100px] rounded-full mx-auto"
          />
        </div>
        <div className="text-center">
          <h2 className="text-center text-lg font-medium bg-black/25 px-2 py-1 rounded-md inline">
            Prabakaran
          </h2>
        </div>
        <p className="bg-black/25 px-3 py-2 rounded-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
          debitis velit. Amet tenetur cum non sed eius ipsa sit eos facere ab
          velit reprehenderit magni, quis dolores placeat repellat fuga?
        </p>
        <div className="flex justify-between items-center">
          <p className="text-center bg-black/25 px-2 py-2 rounded-md inline">
            mspk028@gmail.com
          </p>
          <p className="text-center bg-black/25 px-2 py-2 rounded-md inline">
            8072354657
          </p>
        </div>
        <div className="">
          <button
            className="bg-blue-700 inline-flex py-2 px-3 gap-2 rounded-lg"
            type="button"
          >
            Edit <AiFillEdit />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
