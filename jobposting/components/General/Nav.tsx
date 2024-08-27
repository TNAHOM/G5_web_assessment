import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between items-center px-14">
      <div className="">
        <Image src="/assets/Group 25.png" alt="Logo" width={140} height={140} />
      </div>
      <div className="flex gap-16 mt-11 mb-8 text-[20px] font-semibold">
        <p>Home</p>
        <p>Teams</p>
        <p>Success Stoies</p>
        <p>About Us</p>
        <p className="border-b-4 border-[#264FAD] text-[#264FAD] pb-2">Blogs</p>

        <p>Get Involved</p>
      </div>
      <div className="flex justify-between gap-6">
        <button className="text-[20px] font-bold">Login</button>
        <button className="bg-[#264FAD]  text-[20px] font-bold rounded-[10px] py- px-5 text-white">
          Donate
        </button>
      </div>
    </div>
  );
};

export default Nav;
