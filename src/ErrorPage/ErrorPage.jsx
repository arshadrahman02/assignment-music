import React from "react";
import { Link, useRouteError } from "react-router-dom";
import gif from "../assets/404.gif";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className=" h-screen p-16 bg-yellow-700 text-error ">
      <img className="w-80 h-72 mx-auto  " src={gif} alt="" />
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <p className="text-2xl font-semibold md:text-3xl text-white mb-8">
          {error?.message}
        </p>
        <Link to="/" className="btn bg-zinc-300  font-semibold">
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
