import { Pronunciation } from "@/context/app/AppType";

export const listCommas = (list: string[]): string => {
  return list.map(item => item).join(", ");
};

export const hasValidAudio = (phonetics: Pronunciation[]): string => {
  for (const phonetic of phonetics) {
    if (phonetic.audio && phonetic.audio.trim() !== "") {
      return phonetic.audio;
    }
  }
  return "";
};
