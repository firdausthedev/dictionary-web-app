import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import ThemeToggle from "./ThemeToggle";
import FontToggle from "./FontToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div>
        <Image
          src={Logo}
          alt="logo"
          width={34}
          height={38}
          data-testid="logo"
        />
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
