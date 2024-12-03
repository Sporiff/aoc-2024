import { assertEquals } from "@std/assert";
import { addArray, parseText, removeNegative } from "../util.ts";

// parseText tests

const testData =
  `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;

const expectedMultipliedValues = [8, 25, 88, 40];

Deno.test(function parseText_test() {
  assertEquals(parseText(testData), expectedMultipliedValues);
});

// addArray test

const expectedResult = 161;

Deno.test(function addArray_test() {
  assertEquals(addArray(expectedMultipliedValues), expectedResult);
});

// removeNegative test

const negativeTestData =
  `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

const expectedRemovedNegative = `xmul(2,4)&mul[3,7]!^?mul(8,5))`;

Deno.test(function removeNegative_test() {
  assertEquals(removeNegative(negativeTestData), expectedRemovedNegative);
});
