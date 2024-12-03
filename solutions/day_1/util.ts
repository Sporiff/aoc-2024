/**
 * Sort arrays by element size
 * @param array number[]
 * @returns number[]
 */
export const sortArray = (array: number[]): number[] => {
  return array.sort((a, b) => a - b);
};

/**
 * Create a hashmap to store each element at the same index in both arrays
 * @param array1 number[]
 * @param array2 number[]
 * @returns number[]
 */
export const compareArrays = (array1: number[], array2: number[]) => {
  const newArray: number[] = [];
  array1.forEach((value, key) => {
    const array2Value = array2[key];
    newArray.push(Math.abs(value - array2Value));
  });
  return newArray;
};

/**
 * Add up all elements in an array
 * @param array number[]
 * @returns The total sum of all elements in the array
 */
export const sumArray = (array: number[]) => {
  let sum = 0;

  array.forEach((x) => {
    sum += x;
  });
  return sum;
};
