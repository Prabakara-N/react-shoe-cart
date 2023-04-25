import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const OrderedProduct = () => {
  const { orders } = useContext(CartContext);
  return (
    <>
      <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
          Customer’s Cart
        </p>
        {orders.map((item) => {
          return (
            <div
              key={item.id}
              className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full "
            >
              <div className="pb-4 md:pb-8 w-full md:w-40">
                <img
                  className="w-full hidden md:block"
                  src={item.image}
                  alt="ordered-img"
                />
                <img
                  className="w-full md:hidden"
                  src={item.image}
                  alt="ordered-img"
                />
              </div>
              <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  <p className="text-base xl:text-lg leading-6">
                    $ {item.price}
                    <span className="text-red-500 pl-2 text-sm line-through">
                      $ {item.originalPrize}
                    </span>
                  </p>
                  <p className="text-base xl:text-lg leading-6 text-gray-800">
                    {item.amount}
                  </p>
                  <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                    $ {item.price * item.amount}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OrderedProduct;
