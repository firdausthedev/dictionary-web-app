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
