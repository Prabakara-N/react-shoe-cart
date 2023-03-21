import React, { useContext } from "react";

// import product context
import { ProductContext } from "../contexts/ProductContext";

// import products
import Header from "../components/Header";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  console.log(products);
  // getting men's & women's clothing category
  const filteredProducts = products.filter(
    (product) =>
      product.category === "men's clothing" ||
      product.category === "women's clothing"
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
