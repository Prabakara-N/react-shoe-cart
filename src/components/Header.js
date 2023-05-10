import React, { useContext, useEffect, useState } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import { OverlayTrigger } from "react-bootstrap";
import OrderLogo from "../assets/images/tracking.png";
import { RiLogoutCircleRLine } from "react-icons/ri";
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

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { imageAsset } = UserAuth();

  // bootstrap tooltip
  const renderTooltip = (props) => (
    <Tooltip
      className="text-white bg-black/20 mt-3 px-3 py-1 rounded-lg text-xs md:text-base mr-2"
      id="button-tooltip"
      {...props}
    >
      Profile
    </Tooltip>
  );

  const renderTooltipLogOut = (props) => (
    <Tooltip
      className="text-white z-50 bg-black/20 mt-2 md:ml-4 px-3 py-1 rounded-lg text-xs md:text-base mr-2"
      id="button-tooltip"
      {...props}
    >
      LogOut
    </Tooltip>
  );

  const renderTooltipOrder = (props) => (
    <Tooltip
      className="text-white z-50 bg-black/20 ml-2 px-3 py-1 rounded-lg text-xs md:text-base mr-2"
      id="button-tooltip"
      {...props}
    >
      Orders
    </Tooltip>
  );

  // eventlisteneres
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const { cart } = useContext(CartContext);
  return (
    <>
      <header
        className={`${
          isActive ? "header" : "bg-[rgba(0,0,0,0.5)] py-4"
        } fixed w-full z-50 transition-all duration-300 `}
      >
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
              overlay={renderTooltipOrder}
            >
              <div>
                <Link to={`/orders`}>
                  <img
                    src={OrderLogo}
                    alt="OrderLogo"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                </Link>
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              placement="bottom"
              delay={{ show: 200, hide: 100 }}
              overlay={renderTooltip}
            >
              <div>
                <Link to={`/userinfo`}>
                  <img
                    src={`${imageAsset ? imageAsset : userLogo}`}
                    alt="user-logo"
                    className="w-[40px] h-[40px] rounded-full profile-img"
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
                {cart.length}
              </div>
            </div>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 200, hide: 100 }}
              overlay={renderTooltipLogOut}
            >
              <Link to="/">
                <RiLogoutCircleRLine className="text-white rounded-full hover:bg-black/20 transition-all duration-200 ml-2 md:ml-4 md:text-2xl" />
              </Link>
            </OverlayTrigger>
          </div>
        </div>
        <Alert />
      </header>
    </>
  );
};

export default Header;
