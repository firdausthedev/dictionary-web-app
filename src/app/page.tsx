"use client";

import { useContext } from "react";
import SearchBar from "./components/UI/SearchBar";
import AppContext from "./components/context/app/AppContext";
import { AppActionType, Meanings } from "./components/context/app/AppType";
import { searchByKey } from "./components/context/app/AppActions";
import { WordData, WordDataError } from "./components/context/app/AppType";
import Spinner from "./components/UI/Spinner";
import IconPlay from "./assests/images/play.svg";
import Image from "next/image";

export default function Home() {
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
        console.log(error);
      }
      dispatch({ type: AppActionType.SET_LOADING, payload: false });
    }
  };

  const listCommas = (list: string[]): string => {
    return list.map(item => item).join(", ");
  };

  const ErrorMessageComponent = () => {
    if (!state.loading && state.response && "message" in state.response) {
      return (
        <div className="mt-32 text-center gap-5 flex flex-col">
          <p className="text-6xl">😕</p>
          <h1 className="font-bold text-xl capitalize">
            {state.response.title}
          </h1>
          <p className="font-normal text-lg">{state.response.message}</p>
        </div>
      );
    }

    // Return null if the conditions are not met
    return null;
  };

  const WordDataComponent = () => {
    if (!state.loading && state.response && !("message" in state.response)) {
      const response: WordData[] = state.response;
      const word: string = response[0].word;
      const phonetic: string = response[0].phonetic;
      // index 2 is the us audio
      const audioSrc: string =
        response[0]?.phonetics[2]?.audio ??
        response[0]?.phonetics[0]?.audio ??
        "";
      const audio: HTMLAudioElement = new Audio(audioSrc);
      const meanings: Meanings[] = response[0]?.meanings ?? [];
      const sourceUrls: string[] = response[0]?.sourceUrls ?? [];

      return (
        <div className="mt-6 flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-5">
              <h1 className="text-6xl font-bold">{word}</h1>
              <p className="text-2xl text-accent leading-none">{phonetic}</p>
            </div>
            <div>
              {audioSrc && (
                <Image
                  src={IconPlay}
                  alt="play icon"
                  onClick={() => {
                    audio.play();
                  }}
                />
              )}
            </div>
          </div>
          {meanings.map((meaning, index) => {
            return (
              <div key={index} className="flex flex-col mt-10">
                <div className="flex items-center gap-4">
                  <h2 className="font-bold italic leading-none text-2xl">
                    {meaning.partOfSpeech}
                  </h2>
                  <div className="line w-full h-[1px] bg-gray-darker"></div>
                </div>
                <div className="flex flex-col mt-10 gap-3">
                  <h3 className="text-xl font-normal leading-none">Meaning</h3>
                  <ul className="list-none flex flex-col ">
                    {meaning.definitions.map((definition, index) => {
                      return (
                        <div key={index} className="flex flex-col ">
                          <li className="before:content-['\2022'] before:text-accent before:inline-block before:w-4 before:ml-[-1em] ml-[1em] text-lg">
                            {definition.definition}
                          </li>
                          <p className="text-lg text-gray ml-[1em]">
                            {definition.example}
                          </p>
                        </div>
                      );
                    })}
                  </ul>
                </div>
                {meaning.synonyms.length > 1 && (
                  <div className="flex gap-3 mt-8">
                    <h3 className="text-gray font-normal text-xl leading-none">
                      Synonyms
                    </h3>
                    <span className="text-accent">
                      {listCommas(meaning.synonyms)}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
          <div className="line w-full h-[1px] bg-gray-darker mt-6"></div>
          {sourceUrls.length > 0 && (
            <div>
              <h4 className="mt-6 text-base">Source</h4>
              {sourceUrls.map((url, index) => {
                return (
                  <p key={index} className="text-base">
                    {url}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    // Return null if the conditions are not met
    return null;
  };

  return (
    <main className={`${state.fonts}`}>
      <SearchBar onChange={onChangeHandler} onSearch={onSearchHandler} />

      {state.loading && (
        <div className="flex justify-center items-center mt-10">
          <Spinner />
        </div>
      )}

      <ErrorMessageComponent />
      <WordDataComponent />
    </main>
  );
}
