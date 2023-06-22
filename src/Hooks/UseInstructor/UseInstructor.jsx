import React, { useEffect, useState } from "react";

const UseInstructor = () => {
  const [instruct, setInstruct] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    fetch("https://assignment-num-12-server.vercel.app/instructor")
      .then((res) => res.json())
      .then((data) => setInstruct(data));
  }, []);
  return [instruct];
};

export default UseInstructor;
