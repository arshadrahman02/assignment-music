import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UseInstructors = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = UseAxiosSecure();
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    queryFn: async () => {
      if (!user) {
        return;
      }
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      console.log("is instructor response", res);
      return res.data.instructor;
    },
  });
  console.log(isInstructor);
  return [isInstructor, isInstructorLoading];
};

export default UseInstructors;
