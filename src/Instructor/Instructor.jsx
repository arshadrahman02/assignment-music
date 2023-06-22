import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PopularInstructorItem from "../Home/Popular/PopularInstructotItem/PopularInstructorItem";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://assignment-num-12-server.vercel.app/instructor")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-5">
        All Class Here Select Your Favorite Instructor
      </h1>
      <div className="grid lg:grid-cols-2 gap-5 lg:w-[1060px] lg:mx-32 lg:mt-10 mt-3 mb-5">
        {instructors.map((instructor) => (
          <PopularInstructorItem
            key={instructor._id}
            instructor={instructor}
          ></PopularInstructorItem>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
