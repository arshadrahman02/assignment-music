import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PopularClassItem from "../Home/Popular/PopularClassItem/PopularClassItem";

const Class = () => {
  const [newClass, setNewClass] = useState([]);
  useEffect(() => {
    fetch("https://assignment-num-12-server.vercel.app/class")
      .then((res) => res.json())
      .then((data) => setNewClass(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-5">
        All Class Here Select Your Favorite Class
      </h1>
      <div className="grid lg:grid-cols-2 gap-5 lg:w-[1060px] lg:mx-32 lg:mt-10 mt-3 mb-5">
        {newClass.map((item) => (
          <PopularClassItem key={item._id} item={item}></PopularClassItem>
        ))}
      </div>
    </div>
  );
};

export default Class;
