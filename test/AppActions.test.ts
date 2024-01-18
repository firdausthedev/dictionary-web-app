import { WordData, WordDataError } from "@/context/app/AppType";
import { searchByKey } from "@/context/app/AppActions";
import { vi, describe, test as it, beforeEach, expect } from "vitest";

describe("searchByKey()", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should return data when the API call is successful", async () => {
    const word = "example";
    const mockResponse: WordData[] | WordDataError = {
      title: "A brief explanation or definition",
      message: "Noun",
      resolution: "This is an example sentence.",
    };
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      }),
    );

    const result = await searchByKey(word);

    expect(result).toEqual(mockResponse);
  });

  it("should throw an error when the API call fails", async () => {
    const mockError: WordDataError = {
      title: "No Definitions Found",
      message:
        "Sorry pal, we couldn't find definitions for the word you were looking for.",
      resolution:
        "You can try the search again at later time or head to the web instead.",
    };

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        json: async () => mockError,
      }),
    );

    const result = await searchByKey("nonExistentWord");
    expect(result).toEqual(mockError);
  });
});
