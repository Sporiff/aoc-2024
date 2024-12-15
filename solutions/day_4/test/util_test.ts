import { assertEquals } from "jsr:@std/assert";
import { returnNumberOfOccurrences, rearrangeVerticalLines, rearrangeDiagonalLines, findXmas } from "../util.ts";

const testData = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`

const rearrangedVerticalLines = `MMAMXXSSMM
MSMSMXMAAX
MAXAAASXMM
SMSMSMMAMX
XXXAAMSMMA
XMMSMXAAXX
MSAMXXSSMM
AMASAAXAMA
SSMMMMSAMS
MAMXMASAMX`

const rearrangedDiagonalLines = `MSXMAXSAMX
MASAMXXAM
MMXSXASA
SXMMAMS
XMASMA
XSAMM
MMMX
ASM
SA
M
MMASMASMS
ASAMSAMA
MMAMMXM
XXSAMX
XMXMA
SAMX
SAM
MX
M
MSAMMMMXAM
SMASAMSAM
ASMASAMS
MMXMAXS
XXSAMX
XMXSX
SAMM
MSA
MM
M
AMSXXSAMX
MMAXAMMM
XMASAMX
MMXSXA
ASAMX
SAMM
AMA
MS
X`

Deno.test(function returnNumberOfOccurrencesTest() {
    assertEquals(returnNumberOfOccurrences(testData), 5);
})

Deno.test(function rearrangeVerticalLinesTest() {
    assertEquals(rearrangeVerticalLines(testData), rearrangedVerticalLines);
})

Deno.test(function rearrangeDiagonalLinesTest() {
    assertEquals(rearrangeDiagonalLines(testData), rearrangedDiagonalLines);
})

Deno.test(function findXMasTest() {
    assertEquals(findXmas(testData), 9);
})

Deno.test(function countAllTest() {
    const string = testData;
    const verticalLines = rearrangeVerticalLines(string);
    const diagonalLines = rearrangeDiagonalLines(string);
    const fullString = `${string}\n${verticalLines}\n${diagonalLines}`;
    assertEquals(returnNumberOfOccurrences(fullString), 18);
})
