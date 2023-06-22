import React from "react";
import { Helmet } from "react-helmet";
import UseSelect from "../../Hooks/UseSelect/UseSelect";
import Swal from "sweetalert2";
import { IoTrash } from "react-icons/io5";
import { Link } from "react-router-dom";

const MySelect = () => {
  const [select, refetch] = UseSelect();
  console.log(select);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-num-12-server.vercel.app/select/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="uppercase font-semibold lg:h-[60px] mt-5 lg:flex justify-evenly gap-10 items-center">
        <h1 className="text-3xl">Total Items : {select.length}</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {select.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.ClassImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{item.ClassName}</td>
              <td>${item.price}</td>
              <td>
                <Link to="/dashBoard/payment">
                  {" "}
                  <button className="btn btn-warning">Pay</button>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(item)}
                  className="btn bg-red-600 text-xs text-white hover:bg-green-400 "
                >
                  <IoTrash></IoTrash>
                </button>
              </td>
            </tr>
          ))}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{/* row 1 */}</tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelect;
