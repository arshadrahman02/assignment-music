import React, { useState } from "react";
import { FcApprove } from "react-icons/fc";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageTable = ({ manageClass, index }) => {
  const [status, setStatus] = useState("pending");

  const handleApprove = () => {
    setStatus("approved");
  };
  const handleDenied = () => {
    setStatus("denied");
  };
  const {
    ClassName,
    InstructorName,

    price,
    AvailableSeats,
    ClassImage,
  } = manageClass;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={ClassImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        {ClassName}
        <br />
      </td>
      <td>{InstructorName}</td>

      <td>${price}</td>
      <td className="text-center">{AvailableSeats}</td>
      <td>
        <div>
          <h1>Status: {status}</h1>
          {status !== "approved" ? (
            <button
              className="btn bg-green-600 text-white btn-xs"
              onClick={handleApprove}
            >
              Approve
            </button>
          ) : (
            <button disabled>Approved</button>
          )}{" "}
          <br />
          {status !== "denied" ? (
            <button
              className="btn bg-red-600 text-white btn-xs mt-1"
              onClick={handleDenied}
            >
              Denied
            </button>
          ) : (
            <button disabled>Denied</button>
          )}{" "}
          <br />
          <Link to="/dashBoard/feedBack">
            <button className="btn bg-yellow-400 text-black btn-xs mt-1">
              Feedback
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ManageTable;
