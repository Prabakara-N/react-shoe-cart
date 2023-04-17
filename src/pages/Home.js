import React, { useEffect, useState } from "react";
import shoes from "../data/data";

// import products
import Header from "../components/Header";
import Hero from "../components/Hero";
import Filter from "../components/Filter";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { UserAuth } from "../contexts/AuthContext";
import { db } from "../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const Home = () => {
  const [myShoes, setMyShoes] = useState(shoes);

  const {
    setUserName,
    setImageAsset,
    setEmail,
    setNumber,
    setAddress,
    setIsDone,
    user,
  } = UserAuth();

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (user && user?.uid) {
        const q = query(
          collection(db, "userInfo"),
          where("userId", "==", user?.uid)
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => doc.data())[0];
        if (data) {
          setUserName(data.userName);
          setImageAsset(data.image);
          setEmail(data.email);
          setNumber(data.number);
          setAddress(data.address);
          setIsDone(true);
        } else {
          setIsDone(false);
        }

        return user?.uid;
      }
    };
    fetchUserDetails();
  }, [user?.uid, user]);

  // filter
  const filterBrands = (category) => {
    if (category === "All") {
      setMyShoes(shoes);
    } else {
      const updatedShoes = shoes.filter((shoe) => {
        return shoe.category === category;
      });
      setMyShoes(updatedShoes);
    }
  };

  // convert array to set & set to array
  const brands = [
    "All",
    ...new Set(
      shoes.map((shoe) => {
        return shoe.category;
      })
    ),
  ];

  return (
    <div>
      <Header />
      <Hero />
      <Filter filterBrands={filterBrands} brands={brands} />
      <section className="py-16 px-3 lg:px-11 bg-slate-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {myShoes.map((shoe) => {
              return <Product product={shoe} key={shoe.id} />;
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
