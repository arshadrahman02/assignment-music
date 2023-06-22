import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.PhotoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch("https://assignment-num-12-server.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  title: "Sign Up Done",
                  text: "Sign Up Successfully",
                  icon: "success",
                  confirmButtonText: "Cool",
                }).then((error) => {
                  console.log(error);
                });
                navigate("/", { state: { from: location } });
              }
            });
        })
        .catch((error) => console.log(error));
      // if (loggedUser) {
      //   navigate("/");
      // }
    });
  };

  return (
    <div>
      <div>
        <div className="hero-content   flex-row-reverse gap-28">
          <div className="text-center lg:text-left">
            <img src="" alt="" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card  flex-shrink-0 w-full max-w-sm shadow- bg-slate-200 "
          >
            <div className="card-body">
              <h1 className="text-center text-3xl text-black font-bold mb-10">
                Sign Up
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600 text-center mt-2">
                    Name field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  {...register("url", { required: true })}
                  url="url"
                  placeholder="Enter Your URL"
                  className="input input-bordered"
                />
                {errors.url && (
                  <span className="text-red-600 text-center mt-2">
                    Name field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600 text-center mt-2">
                    Email field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600 text-center mt-2">
                    password field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600 text-center mt-2">
                    password field is required
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-yellow-700 text-white"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <Link to="/login">
                {" "}
                <p className="mx-auto ">
                  Already registered?
                  <span className="font-bold hover:text-yellow-700 underline">
                    {" "}
                    Go to log in
                  </span>
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
