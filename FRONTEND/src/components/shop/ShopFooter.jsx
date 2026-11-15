import React from "react";
import { LuGithub } from "react-icons/lu";
import { MdOutlineAlternateEmail } from "react-icons/md";

const ShopFooter = () => {
  return (
    <div className="w-full bg-neutral-950 text-white text-center py-10">
      <h2 className="text-sm flex justify-center items-center gap-2">
        &copy; BlueSHop, 2026 November15 || <MdOutlineAlternateEmail />{" "}
        mrpiyalst@gmail.com
      </h2>
      <div className="flex items-center gap-2 text-sm text-center justify-center mt-4 border-t-2 pt-4 border-neutral-800">
        <LuGithub />
        <p>https://github.com/PiyalSt</p>
      </div>
    </div>
  );
};

export default ShopFooter;
