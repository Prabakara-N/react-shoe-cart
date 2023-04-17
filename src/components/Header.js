import React, { useContext, useEffect, useState } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import { OverlayTrigger } from "react-bootstrap";
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
import { UserAuth } from "../contexts/AuthContext";
import { ToastContainer } from "react-toastify";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const { imageAsset } = UserAuth();

  const renderTooltip = (props) => (
    <Tooltip
      className="text-white bg-black/20 ml-2 px-3 py-1 rounded-lg text-xs md:text-base mr-2"
      id="button-tooltip"
      {...props}
    >
      Profile
    </Tooltip>
  );

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
        } fixed w-full z-50 transition-all duration-300 `}
      >
        <ToastContainer position="top-right" />

        <div className="container mx-auto px-6 md:px-16 flex justify-between items-center h-full">
          <Link to={"/home"}>
            <img
              src="https://res.cloudinary.com/daxmjqsy2/image/upload/v1679395171/logo_q8a29a.png"
              alt="logo"
              className="w-[80px] h-[50px]"
            />
          </Link>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <OverlayTrigger
              placement="left"
              delay={{ show: 200, hide: 100 }}
              overlay={renderTooltip}
            >
              <div>
                <Link to={`/userinfo`}>
                  <img
                    src={`${imageAsset ? imageAsset : userLogo}`}
                    alt="user-logo"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                </Link>
              </div>
            </OverlayTrigger>
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
