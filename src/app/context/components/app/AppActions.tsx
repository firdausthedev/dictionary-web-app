import { WordData, WordDataError } from "./AppType";

export const searchByKey = async (
  word: string,
): Promise<WordData[] | WordDataError> => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  );

  if (!response.ok) {
    const data: WordDataError = await response.json();
    return data;
  }

  const data: WordData[] = await response.json();
  return data;
};
