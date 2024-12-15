/**
 * Returns the number of times the test word appears
 * @param input
 * @returns The total number of matches
 */
export const returnNumberOfOccurrences = (input: string): number => {
  let sum = 0;
  const regex = /(?=(XMAS|SAMX))/gm;
  const matches = input.match(regex);
  sum += matches ? matches.length : 0;
  return sum;
};

/**
 * Takes a text input and rearranges its columns into rows
 * @param input
 * @returns The rearranged input as new rows of text
 */
export const rearrangeVerticalLines = (input: string): string => {
  const lines = input.split("\n");
  const maxLength = Math.max(...lines.map((line) => line.length));
  const newLines: string[][] = Array.from({ length: maxLength }, () => []);
  lines.forEach((line) => {
    for (let i = 0; i < line.length; i++) {
      newLines[i].push(line[i]);
    }
  });
  return newLines.join("\n").replaceAll(",", "");
};

/**
 * Takes a text input and rearranges it both horizontally down to the right and down to the left
 * @param input
 * @returns The rearranged input as new rows of text
 */
export const rearrangeDiagonalLines = (input: string): string => {
  const lines = input.split("\n");
  const numRows = lines.length;
  const numCols = Math.max(...lines.map((line) => line.length));

  const getDiagonals = (
    startRow: number,
    startCol: number,
    direction: "right" | "left",
  ) => {
    const diagonals: string[] = [];
    let row = startRow;
    let col = startCol;

    while (
      row < numRows && col >= 0 && col < numCols && col < lines[row]?.length
    ) {
      let diagonal = "";
      while (row < numRows && col >= 0 && col < lines[row]?.length) {
        diagonal += lines[row][col];
        row++;
        direction === "right" ? col++ : col--;
      }
      if (diagonal) diagonals.push(diagonal);
    }

    return diagonals;
  };

  const downRightDiagonals: string[] = [];
  for (let col = 0; col < numCols; col++) {
    downRightDiagonals.push(...getDiagonals(0, col, "right"));
  }
  for (let row = 1; row < numRows; row++) {
    downRightDiagonals.push(...getDiagonals(row, 0, "right"));
  }

  const downLeftDiagonals: string[] = [];
  for (let col = numCols - 1; col >= 0; col--) {
    downLeftDiagonals.push(...getDiagonals(0, col, "left"));
  }
  for (let row = 1; row < numRows; row++) {
    downLeftDiagonals.push(...getDiagonals(row, numCols - 1, "left"));
  }

  return [...downRightDiagonals, ...downLeftDiagonals].join("\n");
};

export function findXmas(input: string): number {
  const lines: string[] = input.split("\n");
  let count: number = 0;

  /**
   * Gathers the downwards diagonal letters from a given position and checks if they match a specific regex.
   * @param lineNumber - The current line to check
   * @param characterPosition - The current character position to check
   */
  function findX(lineNumber: number, characterPosition: number): boolean {
    if (lineNumber + 2 >= lines.length) return false;

    if (
      lines[lineNumber].length <= characterPosition + 2 ||
      lines[lineNumber + 1].length <= characterPosition + 1 ||
      lines[lineNumber + 2].length <= characterPosition + 2
    ) {
      return false;
    }

    const letterArray: string[] = [];

    letterArray.push(lines[lineNumber][characterPosition]);
    letterArray.push(lines[lineNumber + 1][characterPosition + 1]);
    letterArray.push(lines[lineNumber + 2][characterPosition + 2]);

    letterArray.push(lines[lineNumber][characterPosition + 2]);
    letterArray.push(lines[lineNumber + 1][characterPosition + 1]);
    letterArray.push(lines[lineNumber + 2][characterPosition]);

    const checkString = letterArray.join("");

    const regex = /(?=(MAS|SAM))/gm;
    const matches = checkString.match(regex);

    return matches !== null && matches.length === 2;
  }

  for (let i = 0; i < lines.length - 2; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (findX(i, j)) {
        count++;
      }
    }
  }

  return count;
}
