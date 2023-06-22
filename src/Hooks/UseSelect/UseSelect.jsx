import React from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";

const UseSelect = () => {
  const { user } = useContext(AuthContext);
  //   const token = localStorage.getItem("access token");

  const [axiosSecure] = UseAxiosSecure();
  const { refetch, data: select = [] } = useQuery({
    queryKey: ["select"],
    enabled: !!user && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const response = await axiosSecure(`/select?email=${user?.email}`);
      console.log("res from axios", response);

      return response.data;
    },
  });
  return [select, refetch];
};

export default UseSelect;
