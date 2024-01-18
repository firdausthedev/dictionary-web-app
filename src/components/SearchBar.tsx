"use client";
import { useContext } from "react";
import AppContext from "@/context/app/AppContext";
import { AppActionType, WordData, WordDataError } from "@/context/app/AppType";
import { searchByKey } from "@/context/app/AppActions";

const SearchBar = () => {
  const { state, dispatch } = useContext(AppContext);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: AppActionType.SET_SEARCHKEY, payload: e.target.value });
  };

  const onSearchHandler = async (key: string) => {
    if (key) {
      dispatch({ type: AppActionType.SET_LOADING, payload: true });
      try {
        const data: WordDataError | WordData[] = await searchByKey(key);
        dispatch({ type: AppActionType.SET_RESPONSE, payload: data });
      } catch (error) {
        const data: WordDataError = {
          title: "Error",
          message: "Something went wrong",
          resolution: "Please try again later",
        };
        dispatch({ type: AppActionType.SET_RESPONSE, payload: data });
      }
      dispatch({ type: AppActionType.SET_LOADING, payload: false });
    }
  };

  return (
    <div className="relative mt-6 md:mt-14">
      <div className="absolute bottom-0 right-6 top-0 my-auto flex cursor-pointer items-center">
        <svg
          onClick={() => onSearchHandler(state.searchKey)}
          aria-hidden="true"
          className="h-5 w-5 stroke-accent"
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
          onChangeHandler(e);
        }}
        onKeyUp={e => {
          if (e.key === "Enter") {
            onSearchHandler(state.searchKey);
          }
        }}
        value={state.searchKey}
        className={`${state.fonts} block w-full rounded-2xl border-none bg-searchbarBg px-6 py-5 text-xl font-bold leading-none no-underline
         outline-accent placeholder:text-gray dark:bg-dark`}
        placeholder="Search for any word..."
      />
    </div>
  );
};

export default SearchBar;
