import { getMostFrequentValue } from "../utilities/getMostFrequentValue";

describe("getMostFrequentValue", () => {
  it("should return the most frequent value in a simple array", async () => {
    let dtoIn = {
      arr: ["apple", "banana", "Apple", "orange", "banana", "apple"],
    };

    const result = await getMostFrequentValue(dtoIn.arr, "", false);

    expect(result).toBe("apple");
  });
});
