import React from "react";

const PopularInstructorItem = ({ instructor }) => {
  const { teacher_name, image, category, enrolled, email } = instructor;

  return (
    <div>
      <div className="card w-96 bg-yellow-700 text-white  shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">
            Teacher Name : {teacher_name}
          </h2>
          <small className="text-sm">Student Enrolled : {enrolled}</small>
          <small className="text-sm">Email : {email}</small>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorItem;
