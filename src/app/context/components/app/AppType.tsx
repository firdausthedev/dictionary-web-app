interface Pronunciation {
  text: string;
  audio: string;
  sourceUrl: string;
  license?: {
    name: string;
    url: string;
  };
}

interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}

interface Meanings {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

interface License {
  name: string;
  url: string;
}

enum FontType {
  Serif = "serif",
  Mono = "mono",
  SansSerif = "sans-serif",
}

export interface WordData {
  word: string;
  phonetic: string;
  phonetics: Pronunciation[];
  meanings: Meanings[];
  license: License;
  sourceUrls: string[];
}
export interface WordDataError {
  title: string;
  message: string;
  resolution: string;
}

export interface AppState {
  loading: boolean;
  response?: WordData[] | WordDataError;
  fonts: FontType;
}

export const initialState: AppState = {
  loading: false,
  fonts: FontType.Serif,
};

export enum AppActionType {
  SET_LOADING,
  SET_FONTS,
  SET_RESPONSE,
}

export type AppActionTypes =
  | { type: AppActionType.SET_LOADING; payload: boolean }
  | { type: AppActionType.SET_FONTS; payload: FontType }
  | { type: AppActionType.SET_RESPONSE; payload: WordData[] | WordDataError };
