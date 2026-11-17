import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { FaShopify } from "react-icons/fa";
import { FiHeart, FiUser } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

const ShopNavbar = () => {
  return (
    <div className="w-full py-6 flex items-center justify-between bg-white px-16">
      <div className="flex items-center gap-2">
        <FaShopify className="text-3xl text-blue-600" />
        <h2 className="text-3xl font-bold text-neutral-900">
          Blue<span className="text-blue-600 font-extrabold">SHop</span>
        </h2>
      </div>
      <div className="w-2xl relative">
        <input
          className="w-full py-2 px-4 outline-0 border-2 rounded-md border-neutral-800 text-sm"
          type="text"
          placeholder="Search product"
        />
        <IoSearch className="absolute top-1/2 -translate-y-1/2 right-4 text-xl text-neutral-800 font-medium tracking-wider cursor-pointer" />
      </div>
      <div className="flex items-center gap-8">
        <div className="relative">
          <FiHeart className="text-2xl text-neutral-900 hover:text-blue-500 cursor-pointer transition-all duration-200" />
          <div className="absolute -top-2 -right-2 w-5 h-5 text-xs bg-blue-500/80 backdrop-blur-lg rounded-full flex items-center justify-center text-white">
            9
          </div>
        </div>
        <div className="relative">
          <CgShoppingCart className="text-2xl hover:text-blue-500 text-neutral-900 cursor-pointer transition-all duration-200" />
          <div className="absolute -top-2 -right-2 w-5 h-5 text-xs bg-blue-500/80 backdrop-blur-lg rounded-full flex items-center justify-center text-white">
            9
          </div>
        </div>
        <div>
          <FiUser className="text-2xl text-neutral-900 hover:text-blue-500 cursor-pointer transition-all duration-200" />
        </div>
      </div>
    </div>
  );
};

export default ShopNavbar;
