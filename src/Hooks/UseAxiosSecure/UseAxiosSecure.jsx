import React, { useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const axiosSecure = axios.create({
  baseURL: "https://assignment-num-12-server.vercel.app",
});

const UseAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default UseAxiosSecure;