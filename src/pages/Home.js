import React from "react";

// import products
import Header from "../components/Header";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import shoes from "../data/data";

const Home = () => {
  // get products from product data
  // getting the all category
  const filteredProducts = shoes.filter(
    (shoe) =>
      shoe.category === "nike" ||
      shoe.category === "adidas" ||
      shoe.category === "puma"
  );

  return (
    <div>
      <Header />
      <Hero />
      <section className="py-16 px-3 lg:px-11">
        <div className="container mx-auto">
          <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Home;
