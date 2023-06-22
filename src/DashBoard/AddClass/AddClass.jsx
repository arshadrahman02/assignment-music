import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const ClassName = form.name.value;
    const InstructorName = form.instructorName.value;
    const InstructorEmail = form.email.value;
    const price = form.price.value;
    const AvailableSeats = form.quantity.value;
    const ClassImage = form.url.value;

    const newClass = {
      ClassName,
      InstructorName,
      InstructorEmail,
      price,
      AvailableSeats,
      ClassImage,
    };
    console.log(newClass);

    fetch("https://assignment-num-12-server.vercel.app/class", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toys Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  return (
    <div>
      <div>
        <div>
          <div className="hero min-h-screen bg-content">
            <div className="hero-content flex-col ">
              <div className="text-center">
                <h1 className="text-5xl font-bold  text-black">
                  Add Class For The Students
                </h1>
                <p className="py-6  text-black">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
              <form onSubmit={handleAddClass}>
                <div className="card w-full shadow-2xl bg-base-200 opacity-90">
                  <div className="card-body grid grid-cols-2 mt-10 gap-10 ">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Class Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Class Name"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control ">
                      <label className="label">
                        <span className="label-text">Instructor Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Instructor Name"
                        name="instructorName"
                        value={user?.displayName || ""}
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Instructor Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Instructor Email"
                        name="email"
                        value={user?.email || " "}
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <input
                        type="number"
                        placeholder="price"
                        name="price"
                        className="input input-bordered"
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Available Seats</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Available Seats"
                        name="quantity"
                        className="input input-bordered"
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Class Image</span>
                      </label>
                      <input
                        placeholder="Photo URL"
                        name="url"
                        type="url"
                        className="file-input file-input-warning font-semibold file-input-bordered w-full max-w-xs"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      className="btn  bg-yellow-700 text-white font-semibold hover:bg-green-800 mt-10 w-full "
                      type="submit"
                      value="Add Class"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
