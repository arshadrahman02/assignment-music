import React from "react";
import Instructor from "../Instructor/Instructor";

const MyClassTable = ({ allClass }) => {
  const {
    ClassName,
    InstructorName,

    price,
    AvailableSeats,
    ClassImage,
  } = allClass;
  return (
    <tr>
      <th>#</th>
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
      <th>
        <button className="btn btn-xs">pending</button>
      </th>
    </tr>
  );
};

export default MyClassTable;
