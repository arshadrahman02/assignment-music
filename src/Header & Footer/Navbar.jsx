import { Link } from "react-router-dom";
import logo from "../assets/istockphoto-1321649448-612x612.jpg";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { IoLogoCodepen } from "react-icons/io5";
import UseSelect from "../Hooks/UseSelect/UseSelect";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [select] = UseSelect();
  const handleLogOut = () => {
    logOut()
      .then({})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar  bg-yellow-700 text-white font-bold ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu z-50 menu-compact dropdown-content mt-3  bg-fuchsia-300 text-black p-2 shadow rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/instructor">Instructors</Link>
            </li>
            <li>
              <Link to="/class">Classes</Link>
            </li>
            {user?.email ? (
              <>
                <li>
                  <Link to="/dashBoard/mySelect">Dashboard</Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <Link to="/">
          <div className="flex">
            <img
              className="lg:w-10 lg:h-10 w-10 rounded-full mt-3 "
              src={logo}
              alt=""
            />
            <a className="btn btn-ghost normal-case font-serif text-xl lg:mt-3">
              Music Minds
            </a>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/instructor">Instructors</Link>
          </li>
          <li>
            <Link to="/class">Classes</Link>
          </li>
          {user?.email ? (
            <>
              <li>
                <Link to="/dashBoard/mySelect">
                  Dashboard <IoLogoCodepen className="text-xl"></IoLogoCodepen>{" "}
                  + {select?.length || 0}
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="navbar-end ">
        {user?.email ? (
          <>
            <button onClick={handleLogOut} className="lg:btn lg:btn-success">
              LogOUt
            </button>

            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
          </>
        ) : (
          <Link to="/login">
            {" "}
            <button className="btn  bg-yellow-700 text-white font-bold hover:bg-success">
              LogIn
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
