import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ManageTable from "./ManageTable";
import { useQuery } from "@tanstack/react-query";

const ManageClass = () => {
  const [manage, setManage] = useState([]);
  useEffect(() => {
    fetch("https://assignment-num-12-server.vercel.app/class")
      .then((res) => res.json())
      .then((data) => setManage(data));
  }, []);
  return (
    <div>
      <div></div>
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
            {manage.map((manageClass, index) => {
              return (
                <ManageTable
                  key={manageClass._id}
                  manageClass={manageClass}
                  index={index}
                ></ManageTable>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
