"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../avatar/avatar";
import { useState } from "react";
import Menuitem from "./menuitem";

const Usermenu = () => {
  const [IsOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transitiom cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden sm:block">
            <Avatar />
          </div>
        </div>
      </div>
      {IsOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <Menuitem onClick={() => {}} label="Login" />
              <Menuitem onClick={() => {}} label="Signup" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default Usermenu;
