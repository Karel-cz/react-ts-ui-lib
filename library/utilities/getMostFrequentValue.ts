export const getMostFrequentValue = async (
  arr: any[],
  key: string,
  caseSensitive: boolean = false,
): Promise<any> => {
  if (arr.length === 0) return null;

  const frequencyMap: Record<string, number> = {};

  for (const item of arr) {
    let searchValue: any;

    if (key) {
      searchValue = item[key];
    } else {
      searchValue = item;
    }

    if (caseSensitive) {
      searchValue = searchValue;
    } else {
      searchValue = searchValue?.toString().toLowerCase();
    }

    if (searchValue in frequencyMap) {
      frequencyMap[searchValue]++;
    } else {
      frequencyMap[searchValue] = 1;
    }
  }

  let mostFrequentValue = null;
  let maxCount = 0;

  for (const [value, count] of Object.entries(frequencyMap)) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequentValue = value;
    }
  }

  return mostFrequentValue;
};
