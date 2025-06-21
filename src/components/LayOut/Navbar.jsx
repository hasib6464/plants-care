import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/imgLogo.webp";

const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allPlants">All Plants</NavLink>
      </li>
      <li>
        <NavLink to="/addPlant">Add Plant</NavLink>
      </li>
      <li>
        <NavLink to="/myPlants">My Plants</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navMenu}
            </ul>
          </div>
          <div className="flex items-center whitespace-nowrap">
            <img className="w-12 h-10" src={logo}></img>
            <button className=" text-xl font-bold">Plant-Care</button>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
