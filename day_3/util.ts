/**
 * Adds all numbers in an array together
 * @param array number[]
 * @returns The sum of all elements in the array
 */
export const addArray = (array: number[]): number => {
    let sum = 0;
    array.forEach((item) => {
        sum += item;
    });
    return sum;
};

/**
 * Parses a given string and returns values that match the multiplication pattern (mul{num, num})
 * @param text
 * @returns An array of multiplied numbers
 */
export const parseText = (text: string): number[] => {
    const regex = /mul\((\d+?),(\d+?)\)/gm;
    const match = text.matchAll(regex);
    const output = [...match];
    const results: number[] = [];
    output.map((value) => {
        const result = Number(value[1]) * Number(value[2]);
        results.push(result);
    });
    return results;
};

/**
 * Removes any that follow a don't() directive and adds any that follow a do() directive
 * @param input string
 * @returns An updated string
 */
export const removeNegative = (input: string): string => {
    const regex = /don't\(\)[\s\S]*?do\(\)/gm
    return input.replace(regex, '');
}