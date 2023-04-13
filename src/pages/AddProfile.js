import React, { useContext } from "react";
import { UserInfoContext } from "../contexts/UserInfoContext";

const AddProfile = () => {
  const {
    userName,
    setUserName,
    email,
    setEmail,
    number,
    setNumber,
    address,
    setAddress,
  } = useContext(UserInfoContext);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-slate-800 w-full h-full flex flex-col min-h-screen justify-center items-center text-white">
      <div className="p-6 rounded-lg bg-slate-900/30 w-[95%] tablet:w-[450px]">
        <form onSubmit={submitHandler} className="flex flex-col gap-y-8">
          <label htmlFor="profile">
            <img src="" alt="" />
          </label>
          <input type="file" id="profile" />
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="py-3 rounded pl-3 bg-slate-700"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 rounded pl-3 bg-slate-700"
            required
          />
          <input
            type="number"
            placeholder="Mobile Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="py-3 rounded pl-3 bg-slate-700"
          />
          <textarea
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="py-3 rounded pl-3 bg-slate-700"
          />
          <div>
            <button
              type="submit"
              className="bg-blue-700 py-2 px-3 rounded-lg font-medium inline"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProfile;
