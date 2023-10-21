"use client";

import { useContext } from "react";
import SearchBar from "./components/UI/SearchBar";
import AppContext from "./components/context/app/AppContext";
import { AppActionType } from "./components/context/app/AppType";
import { searchByKey } from "./components/context/app/AppActions";
import { WordData, WordDataError } from "./components/context/app/AppType";

export default function Home() {
  const { state, dispatch } = useContext(AppContext);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: AppActionType.SET_SEARCHKEY, payload: e.target.value });
  };

  const onSearchHandler = async (key: string) => {
    if (key) {
      try {
        const data: WordDataError | WordData[] = await searchByKey(key);
        dispatch({ type: AppActionType.SET_RESPONSE, payload: data });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <main className={`${state.fonts}`}>
      <SearchBar onChange={onChangeHandler} onSearch={onSearchHandler} />

      {state.response && "message" in state.response && (
        <div className="mt-32 text-center gap-5 flex flex-col">
          <p className="text-6xl">😕</p>
          <h1 className="font-bold text-xl capitalize">
            {state.response.title}
          </h1>
          <p className="font-normal text-lg">{state.response.message}</p>
        </div>
      )}
    </main>
  );
}
