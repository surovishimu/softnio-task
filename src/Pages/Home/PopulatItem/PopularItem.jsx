import React from "react";

const PopularItem = ({ food }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-sm md:h-52  h-60 md:w-48 w-64 lg:mx-0 md:mx-4 mx-auto ">
      <img src={food.img} alt={food.name} className="object-cover mt-2" />
      <div className="border-b-2 border-[#BD1F17] w-1/4"></div>
      <h3 className="mt-2 text-md text-black font-bebas">{food.name}</h3>
      <p className="text-sm text-black">{food.details}</p>
    </div>
  );
};

export default PopularItem;
