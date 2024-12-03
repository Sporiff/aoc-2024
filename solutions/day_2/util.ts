/**
 * Splits up a text file by newline
 * @param textFile
 */
export const fetchLines = (textFile: string): string[] => {
  return textFile.split("\n");
};

/**
 * Converts the elements in a string to numbers for distances processing
 * @param line The line of text
 * @returns The line as an array of numbers
 */
export const stringArrayToNumberArray = (line: string): number[] => {
  const newArray: number[] = [];
  line.split(" ").forEach((element: string) => {
    newArray.push(Number(element));
  });
  return newArray;
};

/**
 * Compares the numbers in an array and checks if they are all descending or ascending
 * @param array number[]
 * @returns A descending and ascending value
 */
export const allDescendingOrAscending = (array: number[]) => {
  let isDescending = true;
  let isAscending = true;
  for (let i = 0, l = array.length - 1; i < l; i++) {
    if (array[i] < array[i + 1]) {
      isDescending = false;
    }
    if (array[i] > array[i + 1]) {
      isAscending = false;
    }
  }
  return { isDescending, isAscending };
};

/**
 * Tests to see if the distance between elements in an array is between 1 and 3
 * @param array number[]
 * @returns A boolean value
 */
export const elementsWithinTolerance = (array: number[]): boolean => {
  let withinTolerance = true;
  for (let i = 0, l = array.length - 1; i < l; i++) {
    withinTolerance = withinTolerance &&
      (Math.abs(array[i] - array[i + 1]) >= 1 &&
        Math.abs(array[i] - array[i + 1]) <= 3);
  }
  return withinTolerance;
};

/**
 * Tests to see if removing a problem value fixes the test
 * @param array number[]
 * @returns A boolean value
 */
export const applyProblemDampener = (array: number[]): boolean => {
  const { isDescending, isAscending } = allDescendingOrAscending(array);
  const withinTolerance = elementsWithinTolerance(array);

  if ((isDescending || isAscending) && withinTolerance) {
    return true;
  }

  for (let i = 0, l = array.length; i < l; i++) {
    const newArray = array.slice(0, i).concat(array.slice(i + 1));

    const { isDescending: newIsDescending, isAscending: newIsAscending } =
      allDescendingOrAscending(newArray);
    const newWithinTolerance = elementsWithinTolerance(newArray);

    if ((newIsDescending || newIsAscending) && newWithinTolerance) {
      return true;
    }
  }
  return false;
};
