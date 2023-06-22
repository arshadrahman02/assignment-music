import React from "react";
import Swal from "sweetalert2";

const Feedback = () => {
  const handleFeedBack = (event) => {
    event.preventDefault();
    const form = event.target;
    const feedBack = form.name.value;

    const newFeedback = {
      feedBack,
    };
    console.log(newFeedback);

    fetch("https://assignment-num-12-server.vercel.app/feedBack", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Feed Back Added ",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  return (
    <div>
      <h1 className="mb-10 font-bold text-3xl">Add Admins FeedBack</h1>
      <input
        type="text"
        name="name"
        placeholder="Type here"
        className="input w-96 h-32 border-4 border-yellow-400 max-w-xs"
      />
      <br />
      <button onClick={handleFeedBack} className="btn btn-warning mx-28 mt-5">
        FeedBack
      </button>
    </div>
  );
};

export default Feedback;
