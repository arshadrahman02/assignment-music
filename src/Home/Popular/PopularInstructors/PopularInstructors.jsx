import React, { useContext } from "react";

import UseInstructor from "../../../Hooks/UseInstructor/UseInstructor";
import PopularInstructorItem from "../PopularInstructotItem/PopularInstructorItem";
import UseClass from "../../../Hooks/UseClass/UseClass";
import { AuthContext } from "../../../providers/AuthProvider";
import UseSelect from "../../../Hooks/UseSelect/UseSelect";

const PopularInstructors = () => {
  const { loading } = useContext(AuthContext);
  const [instruct] = UseInstructor();
  const instructors = instruct.filter(
    (instructor) => instructor.category === "bassist"
  );

  if (loading) {
    return <p>Loading.....</p>;
  } else {
    return (
      <div className="text-center text-4xl font-bold">
        <h1>Popular Instructors Sections</h1>
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
  }
};

export default PopularInstructors;
