import React, { useContext } from "react";
import { AiFillEdit } from "react-icons/ai";
import { UserInfoContext } from "../contexts/UserInfoContext";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const UserInfo = () => {
  const { userName, email, number, address, imageAsset } =
    useContext(UserInfoContext);
  return (
    <>
      <Header />
      <div className="bg-slate-800 w-full h-full flex flex-col min-h-screen justify-center items-center text-white">
        <div className="bg-slate-900/50 rounded-lg p-6 w-[95%] sm:w-[450px] flex flex-col gap-y-8">
          <div className="-mt-16">
            <img
              src={imageAsset}
              alt="profile"
              className="w-[100px] h-[100px] rounded-full mx-auto"
            />
          </div>
          <div className="text-center">
            <h2 className="text-center text-lg font-medium bg-black/25 px-2 py-1 rounded-md inline">
              {userName}
            </h2>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-center bg-black/25 px-2 py-2 rounded-md inline">
              {email}
            </p>
            <p className="text-center bg-black/25 px-2 py-2 rounded-md inline">
              {number}
            </p>
          </div>
          <p className="bg-black/25 px-3 py-2 rounded-md">{address}</p>
          <div className="flex justify-between items-center">
            <Link to={"/addprofile"}>
              <button
                className="bg-blue-700 inline-flex py-2 px-3 gap-2 rounded-lg hover:bg-blue-800 transition-all duration-200"
                type="button"
              >
                Edit <AiFillEdit />
              </button>
            </Link>
            <Link to={"/home"}>
              <button
                className="bg-blue-700 inline-flex py-2 px-3 gap-2 rounded-lg hover:bg-blue-800 transition-all duration-200"
                type="button"
              >
                Done <AiFillEdit />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
