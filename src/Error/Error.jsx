import React from "react";
import errorImg from "../assets/error.avif";
import { Link } from "react-router";
import { TbError404 } from "react-icons/tb";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <h2 className="text-2xl font-bold flex justify-center items-center gap-2">
        This is error page <TbError404 />
      </h2>
      <img className="w-[500px]" src={errorImg}></img>
      <Link to="/" className="text-blue-600 font-bold">
        Back To Home
      </Link>
    </div>
  );
};

export default Error;
