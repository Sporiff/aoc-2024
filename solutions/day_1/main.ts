import { readFile } from "../../readFile.ts";
import { compareArrays, sortArray, sumArray } from "./util.ts";

const dataFile = readFile("solutions/day_1/arrays.json");

const { array1, array2 } = JSON.parse(dataFile);

export default function main() {
  let similarityScore: number = 0;
  const sorted1 = sortArray(array1);
  const sorted2 = sortArray(array2);
  const distances = compareArrays(sorted1, sorted2);
  const totalDistance = sumArray(distances);
  sorted1.forEach((element) => {
    const occurrences = sorted2.filter((x) => x === element).length;
    similarityScore += element * occurrences;
  });
  console.log(`Answer for part 1: ${totalDistance}`);
  console.log(`Answer for part 2: ${similarityScore}`);
}
