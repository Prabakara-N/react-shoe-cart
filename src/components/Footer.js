import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto">
        <p className="text-white text-center">
          Copyright &copy; shoeKart Shop 2023. All rights reserved
        </p>
      </div>
      <SocialMedia />
      <div className="text-center mt-10">
        <button className=" px-4 py-2 rounded-lg font-medium bg-gray-800 text-white hover:bg-slate-600 transition duration-300">
          <Link to="/">Log Out</Link>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
