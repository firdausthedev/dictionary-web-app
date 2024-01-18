"use client";

import { useState, useContext } from "react";
import { AppActionType, FontType } from "@/context/app/AppType";
import AppContext from "@/context/app/AppContext";
const FontToggle = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  const applyFontStyle = (font: FontType) => {
    document.body.classList.remove(
      FontType.SansSerif,
      FontType.Serif,
      FontType.Mono,
    );
    document.body.classList.add(font);
  };

  const handleFontChange = (font: FontType) => {
    dispatch({ type: AppActionType.SET_FONTS, payload: font });
    setShowDropDown(false);
    applyFontStyle(font);
  };

  return (
    <div className="relative" data-testid="font-toggle">
      <button
        data-testid="drop-down-button"
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        onClick={() => setShowDropDown(!showDropDown)}
        className={`flex items-center gap-4 ${state.fonts} outline-accent`}
        type="button">
        {state.fonts === FontType.SansSerif && "Sans Serif"}
        {state.fonts === FontType.Serif && "Serif"}
        {state.fonts === FontType.Mono && "Mono"}
        <svg
          className="h-4 w-4 stroke-accent"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        data-testid="dropdown"
        id="dropdown"
        className={`z-10 mt-3 ${
          showDropDown ? "block" : "hidden"
        } absolute right-5 w-36 rounded-lg bg-white p-6 shadow-dropDown dark:bg-dark dark:shadow-dropDownDark`}>
        <ul
          className="flex flex-col gap-3 "
          aria-labelledby="dropdownDefaultButton">
          <li
            className={`${FontType.SansSerif} ${
              state.fonts === FontType.SansSerif && "text-accent"
            } w-full cursor-pointer`}>
            <button
              data-testid="dropdown-btn"
              aria-label="Sans Serif"
              className="w-full text-start outline-accent"
              onClick={() => handleFontChange(FontType.SansSerif)}>
              Sans Serif
            </button>
          </li>
          <li
            className={`${FontType.Serif} ${
              state.fonts === FontType.Serif && "text-accent"
            } cursor-pointer`}>
            <button
              data-testid="dropdown-btn"
              aria-label="Serif"
              className="w-full text-start outline-accent"
              onClick={() => handleFontChange(FontType.Serif)}>
              Serif
            </button>
          </li>
          <li
            className={`${FontType.Mono} ${
              state.fonts === FontType.Mono && "text-accent"
            } cursor-pointer`}>
            <button
              data-testid="dropdown-btn"
              aria-label="Mono"
              className="w-full text-start outline-accent"
              onClick={() => handleFontChange(FontType.Mono)}>
              Mono
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FontToggle;
