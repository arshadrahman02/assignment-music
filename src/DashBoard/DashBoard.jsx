import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  IoFastFoodSharp,
  IoWallet,
  IoCalendar,
  IoHome,
  IoMenu,
  IoPeople,
} from "react-icons/io5";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { RiShoppingBagFill, RiMailFill } from "react-icons/ri";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaBook, FaHome } from "react-icons/fa";
import UseSelect from "../Hooks/UseSelect/UseSelect";
import UseAdmin from "../Hooks/UseAdmin/UseAdmin";
import UseInstructors from "../Hooks/UseInstructors/UseInstructors";

const DashBoard = () => {
  const [select] = UseSelect();
  // const isAdmin = true;
  const [isAdmin] = UseAdmin();

  // const isInstructor = true;
  const [isInstructor] = UseInstructors();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-yellow-200 font-bold text-lg">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashBoard/adminDashBoard">
                  <IoHome></IoHome> Admin DashBoard
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashBoard/manageClass">
                  <IoMenu></IoMenu> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/manageUsers">
                  <IoPeople></IoPeople> Manage Users
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/dashBoard/instructorDashBoard">
                  <IoHome></IoHome> Instructor DashBoard
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/addClass">
                  <AiOutlineVideoCameraAdd></AiOutlineVideoCameraAdd>Add a Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/myClass">
                  <IoPeople></IoPeople> MyClass
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashBoard/studentDashBoard">
                  <IoHome></IoHome> Student DashBoard
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/mySelect">
                  <IoFastFoodSharp></IoFastFoodSharp>Selected Class
                  <div className="badge  bg-red-500 text-white font-bold">
                    +{select?.length || 0}
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/">
                  <IoWallet></IoWallet> Payment Process
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/myEnrollClass">
                  <IoPeople></IoPeople> My Enrolled Class
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/class">
              <FaBook></FaBook> Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructor">
              <IoPeople></IoPeople> Instructor
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
