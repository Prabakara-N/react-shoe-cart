import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// create context
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isDone, setIsDone] = useState(false);

  const clearUserData = () => {
    setImageAsset("");
    setUserName("");
    setEmail("");
    setNumber("");
    setAddress("");
  };

  // signUp
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const logIn = (email, password) => {
    clearUserData();
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logOut
  const logOut = () => {
    clearUserData();
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        user,
        logIn,
        logOut,
        userName,
        email,
        number,
        address,
        imageAsset,
        isDone,
        setIsDone,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
