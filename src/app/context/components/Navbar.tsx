import React from "react";
import Image from "next/image";
import Logo from "../../assests/images/logo.svg";
import ThemeToggle from "./UI/ThemeToggle";
import FontToggle from "./UI/FontToggle";

const Navbar = () => {
  return (
    <nav className={`flex justify-between items-center`}>
      <div>
        <Image src={Logo} alt="logo" width={34} height={38} />
      </div>
      <div className="flex items-center gap-5">
        <FontToggle />
        <div className="h-14 w-[1px] bg-gray-lighter"></div>
        <div className="flex items-center gap-5">
          <ThemeToggle />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            className="scale-[1.7] stroke-gray cursor-pointer hover:stroke-accent transition-colors ">
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
