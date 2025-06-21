import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Please Register</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Your Name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <label className="label">Photo Url</label>
                <input
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="photo url"
                />

                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              <p>
                All Ready have an account ?{" "}
                <Link to="/Login" className="text-blue-500 font-bold">
                  Please Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
