import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// import pages
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import UserInfo from "./pages/UserInfo";
import AddProfile from "./pages/AddProfile";
import Error from "./pages/Error";
import { UserAuth } from "./contexts/AuthContext";
import { db } from "./utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const App = () => {
  const {
    user,
    setUserName,
    setImageAsset,
    setEmail,
    setNumber,
    setAddress,
    setIsDone,
    setDocId,
  } = UserAuth();

  const fetchUserDetails = async () => {
    if (user && user?.uid) {
      const q = query(
        collection(db, "userInfo"),
        where("userId", "==", user?.uid)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.docs.map((doc) => {
        setDocId(doc.id);
        const userData = doc.data();
        console.log(userData);
        if (userData) {
          setUserName(userData.userName);
          setImageAsset(userData.image);
          setEmail(userData.email);
          setNumber(userData.number);
          setAddress(userData.address);
          setIsDone(true);
        } else {
          setIsDone(false);
        }
        return doc.id;
      });
    }
  };

  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="home"
            element={<Home fetchUserDetails={fetchUserDetails} />}
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route
            path="/userinfo"
            element={<UserInfo fetchUserDetails={fetchUserDetails} />}
          />
          <Route path="/addprofile" element={<AddProfile />} />
          <Route path="/editprofile/:id" element={<AddProfile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
