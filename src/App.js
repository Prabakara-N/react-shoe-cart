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

const App = () => {
  const { isEditing } = UserAuth();
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/userinfo/:id" element={<UserInfo />} />
          <Route path="/addprofile" element={<AddProfile />} />
          <Route
            path="/editprofile/:id"
            element={isEditing && <AddProfile />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
