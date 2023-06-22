import React from "react";
import Banner from "./Banner/Banner";
import PopularInstructors from "./Popular/PopularInstructors/PopularInstructors";
import PopularClass from "./Popular/PopularClass/PopularClass";
import SpecialSecion from "./SpecialSection/SpecialSecion";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructors></PopularInstructors>
      <SpecialSecion></SpecialSecion>
    </div>
  );
};

export default Home;
