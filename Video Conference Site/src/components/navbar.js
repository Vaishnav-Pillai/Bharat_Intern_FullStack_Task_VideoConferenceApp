import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="bg-black/100 border-b-2 border-sky-500">
      <div className=" h-[3.5rem] flex items-center justify-between px-4 md:max-w-[100vw] mx-auto">

        <div className="flex items-center">
          <div className="flex w-[2rem] h-[2rem] bg-white rounded-full">
            <img src={logo} alt="" className="object-cover " />
          </div>
          <div className="text-white font-bold">
            <p className="text-[21px] pl-2">Video Conference !</p>
          </div>
        </div>


        <div className="">
          <ul className="text-white font-bold flex items-center gap-5 cursor-pointer">
            <li>About Us</li>
            <li>Blogs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
