import React, { useContext, useEffect, useState } from "react";
// link
import { Link } from "react-router-dom";
import userLogo from "../assets/images/user.png";

// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

// cart context
import { CartContext } from "../contexts/CartContext";

// import icons
import { BsBag } from "react-icons/bs";

// alert
import Alert from "./Alert";
import { UserInfoContext } from "../contexts/UserInfoContext";
import { UserAuth } from "../contexts/AuthContext";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const { imageAsset } = useContext(UserInfoContext);
  const { user } = UserAuth();

  // eventlistneres

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const { itemAmount } = useContext(CartContext);
  return (
    <>
      <header
        className={`${
          isActive ? "header" : "bg-[rgba(0,0,0,0.5)] py-4"
        } fixed w-full z-10 transition-all duration-300 `}
      >
        <div className="container mx-auto px-6 md:px-16 flex justify-between items-center h-full">
          <Link to={"/home"}>
            <img
              src="https://res.cloudinary.com/daxmjqsy2/image/upload/v1679395171/logo_q8a29a.png"
              alt="logo"
              className="w-[80px] h-[50px]"
            />
          </Link>
          <div className="flex items-center gap-x-8">
            <div>
              <Link to={"/userinfo"}>
                <img
                  src={imageAsset}
                  alt="user-logo"
                  className="w-[40px] h-[40px] rounded-full"
                />
              </Link>
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer flex relative max-w-[50px]"
            >
              <BsBag className="text-white text-2xl" />
              <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                {itemAmount}
              </div>
            </div>
          </div>
        </div>
        <Alert />
      </header>
    </>
  );
};

export default Header;
