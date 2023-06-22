import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import UseSelect from "../../../Hooks/UseSelect/UseSelect";
import UseAdmin from "../../../Hooks/UseAdmin/UseAdmin";
import UseInstructor from "../../../Hooks/UseInstructor/UseInstructor";

const PopularClassItem = ({ item }) => {
  const {
    _id,
    ClassName,
    InstructorName,

    price,
    AvailableSeats,
    ClassImage,
  } = item;
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [, refetch] = UseSelect();
  const navigate = useNavigate();
  const [isAdmin] = UseAdmin();
  const [isInstructor] = UseInstructor();
  const handleAddToSelect = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        selectClassID: _id,
        InstructorName,
        ClassName,
        ClassImage,
        price,
        AvailableSeats,
        email: user.email,
      };
      fetch("https://assignment-num-12-server.vercel.app/select", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              title: "Class Added To DashBoard",

              icon: "success",
              confirmButtonText: "Cool",
            }).then((error) => {
              console.log(error);
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Log in to the order food",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card w-96  bg-yellow-700 text-white shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={ClassImage}
            alt="Shoes"
            className="rounded-xl object-cover "
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Class Name : {ClassName}</h2>
          <p>Instructor Name : {InstructorName}</p>

          <p>Price : ${price}</p>
          <p>Available Seat : {AvailableSeats}</p>
          <div className="card-actions">
            {isAdmin ? (
              <button
                disabled
                onClick={() => handleAddToSelect(item)}
                className="btn btn-success"
              >
                Select
              </button>
            ) : isInstructor ? (
              <button
                onClick={() => handleAddToSelect(item)}
                className="btn btn-success"
              >
                Select
              </button>
            ) : (
              <button
                onClick={() => handleAddToSelect(item)}
                className="btn btn-success"
              >
                Select
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClassItem;
