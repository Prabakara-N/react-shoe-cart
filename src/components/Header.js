import React, { useContext, useEffect, useState } from "react";
// link
import { Link } from "react-router-dom";

// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

// cart context
import { CartContext } from "../contexts/CartContext";

// import icons
import { BsBag } from "react-icons/bs";

// alert
import Alert from "./Alert";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);

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
          isActive ? "bg-white py-5 shadow-md" : "bg-gray-300 py-4"
        } fixed w-full z-10 transition-all duration-300 `}
      >
        <div className="container mx-auto px-6 md:px-16 flex justify-between items-center h-full">
          <Link to={"/home"}>
            <img
              src="https://e7.pngegg.com/pngimages/946/113/png-clipart-graphic-design-logo-swag-text-art.png"
              alt="logo"
              className={`${isActive ? "" : "logo"} w-[80px] h-[50px]`}
            />
          </Link>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative max-w-[50px]"
          >
            <BsBag className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
        <Alert />
      </header>
    </>
  );
};

export default Header;
