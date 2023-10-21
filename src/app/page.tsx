"use client";

import SearchBar from "./context/components/UI/SearchBar";
import { useContext } from "react";
import AppContext from "./context/components/app/AppContext";
import { AppActionType } from "./context/components/app/AppType";
import { searchByKey } from "./context/components/app/AppActions";
import { WordDataError } from "@/app/context/components/app/AppType";
import { WordData } from "@/app/context/components/app/AppType";

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
