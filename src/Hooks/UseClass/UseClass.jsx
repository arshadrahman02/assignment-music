import React, { useEffect, useState } from "react";

const UseClass = () => {
  const [sort, setSort] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    fetch("https://assignment-num-12-server.vercel.app/class")
      .then((res) => res.json())
      .then((data) => setSort(data));
  }, []);
  return [sort];
};

export default UseClass;
