import React from "react";
import UseClass from "../../../Hooks/UseClass/UseClass";
import PopularClassItem from "../PopularClassItem/PopularClassItem";

const PopularClass = () => {
  const [sort] = UseClass();
  const famous = sort.filter((item) => item.AvailableSeats <= 20);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-4">
        {" "}
        Popular class Section
      </h1>
      <div className="grid lg:grid-cols-2 gap-5 lg:w-[1060px] lg:mx-32 lg:mt-10 mt-3 mb-5">
        {famous.map((item) => (
          <PopularClassItem key={item._id} item={item}></PopularClassItem>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
