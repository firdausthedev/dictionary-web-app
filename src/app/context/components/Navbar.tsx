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
        <div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
