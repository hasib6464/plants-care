import React from "react";
import { Outlet } from "react-router";
import Home from "../components/Home/Home";
import Navbar from "../components/LayOut/Navbar";
import Footer from "../Pages/Footer";

const Main = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto h-screen">
      <Navbar></Navbar>
      <div className=" grow">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
