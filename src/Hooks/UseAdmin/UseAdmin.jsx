import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UseAdmin = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = UseAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      if (!user) {
        return;
      }
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log("is admin response", res);
      return res.data.admin;
    },
  });
  console.log(isAdmin);
  return [isAdmin, isAdminLoading];
};

export default UseAdmin;
