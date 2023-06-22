import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaUserShield } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import Swal from "sweetalert2";
import { HiUserCircle } from "react-icons/hi";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const response = await fetch(
      "https://assignment-num-12-server.vercel.app/users"
    );
    return response.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(
      `https://assignment-num-12-server.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            title: `${user.name} is admin Now`,
            showClass: {
              popup: "Make Admin",
            },
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(
      `https://assignment-num-12-server.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            title: `${user.name} is Instructor Now`,
            showClass: {
              popup: "Make Instructor",
            },
          });
        }
      });
  };

  const handleDelete = (user) => {
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
        fetch(`https://assignment-num-12-server.vercel.app/users/${user._id}`, {
          method: "DELETE",
        })
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
      <h1 className="text-3xl font-semibold">Total Users: {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>

              <th>Role</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <div>
                      <div>
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="btn btn-xs bg-info  hover:bg-orange-400 "
                        >
                          <FaUserShield></FaUserShield> Admin
                        </button>
                      </div>
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className="btn btn-xs bg-purple-600 text-white hover:bg-green-400 mt-3"
                      >
                        <HiUserCircle></HiUserCircle> Instructor
                      </button>
                    </div>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn bg-red-600 text-xs text-white hover:bg-green-400 "
                  >
                    <IoTrash></IoTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
