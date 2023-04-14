import React, { useState, createContext } from "react";

// create context
export const UserInfoContext = createContext();

const UserInfoProvider = ({ children }) => {
  // user initial states
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [imageAsset, setImageAsset] = useState(null);
  const [isDone, setIsDone] = useState(false);

  return (
    <UserInfoContext.Provider
      value={{
        userName,
        setUserName,
        email,
        setEmail,
        number,
        setNumber,
        address,
        setAddress,
        imageAsset,
        setImageAsset,
        isDone,
        setIsDone,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;
