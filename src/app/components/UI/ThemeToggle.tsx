"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Spinner />;
  }

  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="theme-toggle"
          className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="theme-toggle"
              className="hidden peer"
              checked={
                theme === "dark"
                  ? true
                  : resolvedTheme === "dark"
                  ? true
                  : false
              }
              onChange={() => {
                setTheme(
                  theme === "dark"
                    ? "light"
                    : resolvedTheme === "dark"
                    ? "light"
                    : "dark",
                );
              }}
            />
            <div className="block bg-gray w-10 h-6 rounded-full peer-checked:bg-accent transition"></div>
            <div
              className="peer-checked:translate-x-full
            dot absolute left-1 top-0 bottom-0 my-auto bg-white w-4 h-4 rounded-full transition"></div>
          </div>
        </label>
      </div>
      <svg
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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
  );
};

export default ThemeToggle;
