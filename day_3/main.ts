import { removeNegative, parseText, addArray } from "./util.ts";

const data = Deno.readTextFileSync("day_3/data.txt");

export default function main () {
    // Fetch the values for the uncleaned data
    const numbers = parseText(data);
    const multiplication = addArray(numbers);

    // Fetch the values for the cleaned data
    const cleanedData = removeNegative(data);
    const cleanedNumbers = parseText(cleanedData);
    const cleanedMultiplication = addArray(cleanedNumbers);

    // Log both results
    console.log(`Result for part 1: ${multiplication}`);
    console.log(`Result for part 2: ${cleanedMultiplication}`)
}
