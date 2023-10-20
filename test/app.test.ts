import { WordData, WordDataError } from "@/app/context/app/AppType";
import { searchByKey } from "./../src/app/context/app/AppActions";
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
    const word = "example";

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
      }),
    );

    try {
      await searchByKey(word);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      expect(error.message).toBe("Server responded with an error status");
    }
  });
});
