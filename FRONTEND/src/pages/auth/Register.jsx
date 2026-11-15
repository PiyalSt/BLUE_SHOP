import React, { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link } from "react-router";

const Register = () => {
  const [showText, setShowText] = useState(false);
  return (
    <div className="w-2xl bg-neutral-200/80 rounded-md py-12">
      <h2 className="text-center text-4xl font-semibold text-neutral-900 uppercase">
        Sign Up
      </h2>
      <p className="text-center text-sm tracking-wide mt-1 mb-4">
        Welcome to our BlueSHop. Create a new account
      </p>
      <form className="mx-10 flex flex-col gap-4">
        <label className="w-full space-y-1.5">
          <h4 className="text-sm">Full Name</h4>
          <input
            className="w-full py-2 px-4 border-2 border-neutral-800 outline-0 rounded-md text-neutral-900 text-sm"
            type="text"
            placeholder="Enter your full name"
          />
        </label>
        <label className="w-full space-y-1.5">
          <h4 className="text-sm">Email Address</h4>
          <input
            className="w-full py-2 px-4 border-2 border-neutral-800 outline-0 rounded-md text-neutral-900 text-sm"
            type="email"
            placeholder="Enter your email address"
          />
        </label>
        <label className="w-full space-y-1.5">
          <h4 className="text-sm">Password</h4>
          <div className="w-full relative">
            <input
              className="w-full py-2 px-4 border-2 border-neutral-800 outline-0 rounded-md text-neutral-900 text-sm"
              type={showText ? "text" : "password"}
              placeholder="Enter your password"
            />
            {showText ? (
              <GoEye
                onClick={() => setShowText(!showText)}
                className="absolute top-1/2 -translate-1/2 right-2 text-neutral-900 cursor-pointer"
              />
            ) : (
              <GoEyeClosed
                onClick={() => setShowText(!showText)}
                className="absolute top-1/2 -translate-1/2 right-2 text-neutral-900 cursor-pointer"
              />
            )}
          </div>
        </label>
        <label className="w-full space-y-1.5">
          <h4 className="text-sm">Confirm Password</h4>
          <input
            className="w-full py-2 px-4 border-2 border-neutral-800 outline-0 rounded-md text-neutral-900 text-sm"
            type="password"
            placeholder="Enter your confirm password"
          />
        </label>
        <div className="mt-4 space-y-2">
          <button className="w-full py-3 bg-neutral-900 rounded-md text-sm text-white font-medium tracking-wider cursor-pointer active:scale-95 duration-300">
            Sign Up
          </button>
          <p className="text-neutral-900 text-sm text-center">
            Already have an account ?{" "}
            <Link to={"/auth/login"}>
              <span className="cursor-pointer hover:underline">Sign In</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
