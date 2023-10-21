import React from "react";

const ThemeToggle = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="theme-toggle"
        className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" id="theme-toggle" className="hidden peer" />
          <div className="block bg-gray w-10 h-6 rounded-full peer-checked:bg-accent transition"></div>
          <div
            className="peer-checked:translate-x-full
            dot absolute left-1 top-0 bottom-0 my-auto bg-white w-4 h-4 rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
