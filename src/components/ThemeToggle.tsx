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
    <div className="flex items-center gap-5" data-testid="theme-toggle">
      <div className="flex w-full items-center justify-center">
        <label
          htmlFor="theme-toggle"
          className="flex cursor-pointer items-center">
          <div className="relative">
            <input
              type="checkbox"
              id="theme-toggle"
              className="peer hidden"
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
            <div className="block h-6 w-10 rounded-full bg-gray transition peer-checked:bg-accent"></div>
            <div
              className="dot
            absolute bottom-0 left-1 top-0 my-auto h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-full"></div>
          </div>
          <span className="sr-only">Toggle theme</span>
        </label>
      </div>
      <svg
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        className="scale-[1.7] cursor-pointer stroke-gray transition-colors hover:stroke-accent ">
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
