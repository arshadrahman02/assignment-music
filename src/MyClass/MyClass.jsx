import React, { useEffect, useState } from "react";
import UseClass from "../Hooks/UseClass/UseClass";
import MyClassTable from "./MyClassTable";
import { useLoaderData } from "react-router-dom";

const MyClass = () => {
  const allClasses = useLoaderData();
  console.log(allClasses);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Available Seats</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allClasses.map((allClass) => {
              return (
                <MyClassTable
                  key={allClass._id}
                  allClass={allClass}
                ></MyClassTable>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
