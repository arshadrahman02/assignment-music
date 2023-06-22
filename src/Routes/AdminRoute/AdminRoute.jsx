// import React, { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
// import UseAdmin from "../../Hooks/UseAdmin/UseAdmin";
// import { useLocation } from "react-router-dom";

// const AdminRoute = () => {
//   const { user, loading } = useContext(AuthContext);
//   const { isAdmin, isAdminLoading } = UseAdmin();
//   const location = useLocation();
//   if (loading || isAdminLoading) {
//     return <progress className=" progress w-ful text-red-500"></progress>;
//   }
//   if (user && isAdmin) {
//     return children;
//   }
//   return <Navigate to="/" state={{ from: location }} replace></Navigate>;
// };

// export default AdminRoute;
