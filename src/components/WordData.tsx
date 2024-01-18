"use client";

import AppContext from "@/context/app/AppContext";
import { Meanings, WordData } from "@/context/app/AppType";
import Image from "next/image";
import { useContext } from "react";
import IconPlay from "@/assets/images/play.svg";
import { hasValidAudio, listCommas } from "@/lib/utils";

const WordDataComponent = () => {
  const { state } = useContext(AppContext);

  if (!state.loading && state.response && !("message" in state.response)) {
    const response: WordData[] = state.response;
    const word: string = response[0].word;
    const phonetic: string = response[0].phonetic;
    // index 2 is the us audio
    const audioSrc: string = hasValidAudio(response[0].phonetics);
    const audio: HTMLAudioElement = new Audio(audioSrc);
    const meanings: Meanings[] = response[0]?.meanings ?? [];
    const sourceUrls: string[] = response[0]?.sourceUrls ?? [];

    return (
      <div className={`mt-6 flex flex-col`}>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="break-all text-6xl font-bold">{word}</h1>
            <p className="break-all text-2xl leading-none text-accent">
              {phonetic}
            </p>
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
            <div key={index} className="mt-10 flex flex-col">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold italic leading-none">
                  {meaning.partOfSpeech}
                </h2>
                <div className="line h-[1px] w-full bg-gray-darker"></div>
              </div>
              <div className="mt-10 flex flex-col gap-3">
                <h3 className="text-xl font-normal leading-none">Meaning</h3>
                <ul className="flex list-none flex-col ">
                  {meaning.definitions.map((definition, index) => {
                    return (
                      <div key={index} className="flex flex-col ">
                        <li className="ml-[1em] text-lg before:ml-[-1em] before:inline-block before:w-4 before:text-accent before:content-['\2022']">
                          {definition.definition}
                        </li>
                        <p className="ml-[1em] text-lg text-gray">
                          {definition.example}
                        </p>
                      </div>
                    );
                  })}
                </ul>
              </div>
              {meaning.synonyms.length > 0 && (
                <div className="mt-8 flex gap-3">
                  <h3 className="text-xl font-normal leading-none text-gray">
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
        <div className="line mt-6 h-[1px] w-full bg-gray-darker"></div>
        {sourceUrls.length > 0 && (
          <div>
            <h4 className="mt-6 text-base">Source</h4>
            {sourceUrls.map((url, index) => {
              return (
                <a
                  key={index}
                  className="block text-base transition hover:text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={url}>
                  {url}
                </a>
              );
            })}
          </div>
        )}
      </div>
    );
  }
};

export default WordDataComponent;
