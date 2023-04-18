import React from "react";
import CheckoutForm from "../components/CheckoutForm";
import Orders from "../components/Orders";

const Checkout = () => {
  return (
    <div>
      <div class="mt-20">
        <h1 class="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">
          Checkout Page
        </h1>
      </div>
      <div class="container p-12 mx-auto">
        <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
          <CheckoutForm />
          <Orders />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
