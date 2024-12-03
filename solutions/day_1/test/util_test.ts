import { assertEquals } from "jsr:@std/assert";
import { compareArrays, sortArray, sumArray } from "../util.ts";
import { readFile } from "../../../readFile.ts";

const dataFile = readFile("solutions/day_1/test/arrays.json");

const { array1, array2 } = JSON.parse(dataFile);

const expectedSortedArray1 = [
  1,
  2,
  3,
  3,
  3,
  4,
];

const expectedSortedArray2 = [
  3,
  3,
  3,
  4,
  5,
  9,
];

const expectedSummedArray1 = 16;
const expectedSummedArray2 = 27;

const expectedDistance = 11;

Deno.test(function sortArrayTest() {
  assertEquals(sortArray(array1), expectedSortedArray1);
  assertEquals(sortArray(array2), expectedSortedArray2);
});

Deno.test(function sumArrayTest() {
  assertEquals(sumArray(array1), expectedSummedArray1);
  assertEquals(sumArray(array2), expectedSummedArray2);
});

Deno.test(function compareArraysTest() {
  const newArray = compareArrays(array1, array2);
  assertEquals(sumArray(newArray), expectedDistance);
});
