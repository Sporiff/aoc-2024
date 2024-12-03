import { join } from "jsr:@std/path/join";

import {
  allDescendingOrAscending,
  applyProblemDampener,
  elementsWithinTolerance,
  fetchLines,
  stringArrayToNumberArray,
} from "./util.ts";

const scriptDir = new URL(".", import.meta.url).pathname;

const filePath = join(scriptDir, "data.txt");

const file = Deno.readTextFileSync(filePath);

export default function main() {
  let safeReports1 = 0;
  let safeReports2 = 0;
  const lines = fetchLines(file);
  lines.forEach((line) => {
    const lineAsNumbers = stringArrayToNumberArray(line);
    const { isAscending, isDescending } = allDescendingOrAscending(
      lineAsNumbers,
    );
    safeReports1 = ((isAscending || isDescending) &&
        elementsWithinTolerance(lineAsNumbers))
      ? safeReports1 += 1
      : safeReports1;
    safeReports2 = (
        applyProblemDampener(lineAsNumbers)
      )
      ? safeReports2 += 1
      : safeReports2;
  });
  console.log(`Answer for part 1: ${safeReports1}`);
  console.log(`Answer for part 2: ${safeReports2}`);
}
