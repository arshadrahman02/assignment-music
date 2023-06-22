import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Login from "../Authincation/Login/Login";
import SignUp from "../Authincation/SignUp/SignUp";
import Class from "../Class/Class";
import Instructor from "../Instructor/Instructor";
import DashBoard from "../DashBoard/DashBoard";
import MySelect from "../DashBoard/MySelect/MySelect";
import PrivateRoutes from "./PrivateRoutes";
import ManageUsers from "../DashBoard/ManageUsers/ManageUsers";
import AddClass from "../DashBoard/AddClass/AddClass";
import MyClass from "../MyClass/MyClass";
import ManageClass from "../ManageClass/ManageClass";
import Feedback from "../FeedBack/Feedback";
import AdminDashBoard from "../DashBoard/AdminDashboard/AdminDashBoard";
import InstructorDashBoard from "../DashBoard/InstructorDashBoard/InstructorDashBoard";
import StudentDashBoard from "../DashBoard/StudentDashBoard/StudentDashBoard";
// import Payment from "../DashBoard/MySelect/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/class",
        element: <Class></Class>,
      },
      {
        path: "/instructor",
        element: <Instructor></Instructor>,
      },
      {
        path: "/dashBoard",
        element: (
          <PrivateRoutes>
            <DashBoard></DashBoard>
          </PrivateRoutes>
        ),
        children: [
          {
            path: "adminDashBoard",
            element: <AdminDashBoard></AdminDashBoard>,
          },
          {
            path: "instructorDashBoard",
            element: <InstructorDashBoard></InstructorDashBoard>,
          },
          {
            path: "studentDashBoard",
            element: <StudentDashBoard></StudentDashBoard>,
          },
          {
            path: "mySelect",
            element: <MySelect></MySelect>,
          },
          // {
          //   path: "payment",
          //   element: <Payment></Payment>,
          // },
          {
            path: "manageUsers",
            element: <ManageUsers></ManageUsers>,
          },
          {
            path: "myClass",
            element: <MyClass></MyClass>,
            loader: () =>
              fetch("https://assignment-num-12-server.vercel.app/class"),
          },
          {
            path: "addClass",
            element: (
              <PrivateRoutes>
                <AddClass></AddClass>
              </PrivateRoutes>
            ),
          },
          {
            path: "manageClass",
            element: (
              <PrivateRoutes>
                <ManageClass></ManageClass>
              </PrivateRoutes>
            ),
          },
          {
            path: "feedBack",
            element: (
              <PrivateRoutes>
                <Feedback></Feedback>
              </PrivateRoutes>
            ),
          },
        ],
      },
    ],
  },
]);
