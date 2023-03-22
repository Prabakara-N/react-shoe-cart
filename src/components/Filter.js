import React, { useState } from "react";
import { SiNike, SiPuma } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";

import Product from "./Product";

const Filter = ({ filterBrands, brands }) => {
  const [selected, setSelected] = useState("All");

  function filterCatogery(position) {
    filterBrands(position);
    setSelected(position);
  }

  return (
    <>
      <ul className="flex cursor-pointer justify-center items-center lg:text-xl gap-x-4 md:gap-x-6 bg-black text-white py-4">
        {brands.map((category, index) => {
          return (
            <li
              className={`${
                selected === category ? "bg-slate-800" : null
              } px-3 py-1 rounded-lg`}
              key={index}
              onClick={() => filterCatogery(category)}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Filter;
