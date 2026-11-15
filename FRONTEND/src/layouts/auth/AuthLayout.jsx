import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex w-full h-screen bg-neutral-100">
      <div className="w-1/2 flex items-center justify-center bg-neutral-900">
        <h2 className="text-6xl text-center font-bold leading-18 text-white text-shadow-blue-400 text-shadow-2xs">
          Welcome to our Ecommerce
        </h2>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
