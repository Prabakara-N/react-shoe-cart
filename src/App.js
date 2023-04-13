import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import pages
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import UserInfo from "./pages/UserInfo";
import Error from "./pages/Error";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
