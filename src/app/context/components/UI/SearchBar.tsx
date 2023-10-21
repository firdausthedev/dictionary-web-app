"use client";

import AppContext from "../app/AppContext";
import { useContext } from "react";

interface SearchBarProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (key: string) => void;
}

const SearchBar = ({ onChange, onSearch }: SearchBarProps) => {
  const { state } = useContext(AppContext);

  return (
    <div className="relative mt-14">
      <div className="absolute top-0 bottom-0 my-auto right-6 flex items-center cursor-pointer">
        <svg
          onClick={() => onSearch(state.searchKey)}
          aria-hidden="true"
          className="w-5 h-5 stroke-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      <input
        type="search"
        autoComplete="off"
        onChange={e => {
          onChange(e);
        }}
        onKeyUp={e => {
          if (e.key === "Enter") {
            onSearch(state.searchKey);
          }
        }}
        value={state.searchKey}
        className="block w-full border-none bg-searchbarBg dark:bg-dark outline-accent py-5 px-6 rounded-2xl text-xl font-bold
         leading-none placeholder:text-gray no-underline"
        placeholder="Search for any word..."
      />
    </div>
  );
};

export default SearchBar;
