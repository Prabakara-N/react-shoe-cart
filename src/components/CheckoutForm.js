import React, { useContext, useState } from "react";
import { UserAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";

const CheckoutForm = () => {
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");

  const { userName, email, address, setUserName, setEmail, setAddress } =
    UserAuth();
  const { clearCart, setModalIsOpen } = useContext(CartContext);
  const { setIsOpen } = useContext(SidebarContext);

  // post code
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > 6) {
      setPostCode(inputValue.slice(0, 6));
    } else {
      setPostCode(inputValue);
    }
  };

  // form submit
  const submitHandler = (e) => {
    e.preventDefault();
    if (userName && email && address && city && postCode) {
      clearCart();
      setIsOpen(false);
      setModalIsOpen(true);
    } else {
      setModalIsOpen(false);
      toast.error("All fields are mendatory to fill");
    }
  };

  return (
    <>
      <div className="flex flex-col md:w-full">
        <h2 className="mb-4 font-bold md:text-xl text-heading ">
          Shipping Address
        </h2>
        <form
          onSubmit={submitHandler}
          className="justify-center w-full mx-auto"
        >
          <div className="">
            <div className="space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="firstName"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="First Name"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="w-full lg:w-1/2 ">
                <label
                  htmlFor="lastName"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="Last Name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full">
                <label
                  htmlFor="Email"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Email
                </label>
                <input
                  id="Email"
                  name="Last Name"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full">
                <label
                  htmlFor="Address"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Address
                </label>
                <textarea
                  id="Address"
                  className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  name="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  cols="20"
                  rows="3"
                  placeholder="Address"
                ></textarea>
              </div>
            </div>
            <div className="space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="city"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="w-full lg:w-1/2 ">
                <label
                  htmlFor="postcode"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Postcode
                </label>
                <input
                  id="postcode"
                  name="postcode"
                  type="number"
                  minLength={6}
                  maxLength={6}
                  value={postCode}
                  onChange={handleInputChange}
                  placeholder="Post Code"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <label
                htmlFor="tick"
                className="flex items-center text-sm group text-heading"
              >
                <input
                  id="tick"
                  type="checkbox"
                  className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1 cursor-pointer"
                />
                <span className="ml-2">
                  Save this information for next time
                </span>
              </label>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full px-6 py-2 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
              >
                Proceed
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckoutForm;
