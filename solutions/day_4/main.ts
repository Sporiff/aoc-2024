import {
  findXmas,
  rearrangeDiagonalLines,
  rearrangeVerticalLines,
  returnNumberOfOccurrences,
} from "./util.ts";
import { readFile } from "../../readFile.ts";

const data = readFile("solutions/day_4/data.txt");

export default function main() {
  const verticalLines = rearrangeVerticalLines(data);
  const diagonalLines = rearrangeDiagonalLines(data);
  const fullString = `${data}\n${verticalLines}\n${diagonalLines}`;
  const result = returnNumberOfOccurrences(fullString);
  console.log(`Result for task 1: ${result}`);
  const task2 = findXmas(data);
  console.log(`Result for task: ${task2}`);
}
