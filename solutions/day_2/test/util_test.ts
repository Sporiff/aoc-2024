import { assertEquals } from "@std/assert";

import {
  allDescendingOrAscending,
  applyProblemDampener,
  elementsWithinTolerance,
  fetchLines,
  stringArrayToNumberArray,
} from "../util.ts";
import { readFile } from "../../../readFile.ts";

const testData = readFile("solutions/day_2/test/data.txt");

const fetchLinesTestOutcome = [
  "7 6 4 2 1",
  "1 2 7 8 9",
  "9 7 6 2 1",
  "1 3 2 4 5",
  "8 6 4 4 1",
  "1 3 6 7 9",
];

const stringToNumberOutcome = [
  7,
  6,
  4,
  2,
  1,
];

const testLine = fetchLines(testData);

Deno.test(function fetchLinesTest() {
  assertEquals(testLine, fetchLinesTestOutcome);
});

Deno.test(function stringToNumberTest() {
  assertEquals(stringArrayToNumberArray(testLine[0]), stringToNumberOutcome);
});

Deno.test(function allDescendingOrAscendingTest() {
  assertEquals(
    allDescendingOrAscending(stringArrayToNumberArray(testLine[0])),
    { isDescending: true, isAscending: false },
  );
  assertEquals(
    allDescendingOrAscending(stringArrayToNumberArray(testLine[1])),
    { isDescending: false, isAscending: true },
  );
  assertEquals(
    allDescendingOrAscending(stringArrayToNumberArray(testLine[2])),
    { isDescending: true, isAscending: false },
  );
  assertEquals(
    allDescendingOrAscending(stringArrayToNumberArray(testLine[3])),
    { isDescending: false, isAscending: false },
  );
  assertEquals(
    allDescendingOrAscending(stringArrayToNumberArray(testLine[4])),
    { isDescending: true, isAscending: false },
  );
  assertEquals(
    allDescendingOrAscending(stringArrayToNumberArray(testLine[5])),
    { isDescending: false, isAscending: true },
  );
});

Deno.test(function elementsWithinToleranceTest() {
  assertEquals(
    elementsWithinTolerance(stringArrayToNumberArray(testLine[0])),
    true,
  );
  assertEquals(
    elementsWithinTolerance(stringArrayToNumberArray(testLine[1])),
    false,
  );
  assertEquals(
    elementsWithinTolerance(stringArrayToNumberArray(testLine[2])),
    false,
  );
  assertEquals(
    elementsWithinTolerance(stringArrayToNumberArray(testLine[3])),
    true,
  );
  assertEquals(
    elementsWithinTolerance(stringArrayToNumberArray(testLine[4])),
    false,
  );
  assertEquals(
    elementsWithinTolerance(stringArrayToNumberArray(testLine[5])),
    true,
  );
});

Deno.test(function applyProblemDampenerTest() {
  assertEquals(
    applyProblemDampener(stringArrayToNumberArray(testLine[0])),
    true,
  );
  assertEquals(
    applyProblemDampener(stringArrayToNumberArray(testLine[1])),
    false,
  );
  assertEquals(
    applyProblemDampener(stringArrayToNumberArray(testLine[2])),
    false,
  );
  assertEquals(
    applyProblemDampener(stringArrayToNumberArray(testLine[3])),
    true,
  );
  assertEquals(
    applyProblemDampener(stringArrayToNumberArray(testLine[4])),
    true,
  );
  assertEquals(
    applyProblemDampener(stringArrayToNumberArray(testLine[5])),
    true,
  );
});
