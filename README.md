# Advent of Code 2024

This is my first attempt at Advent of Code. I'm using this as an opportunity to
try out test-driven development and get better with planning projects using
Typescript.

For the purposes of this exercise I decided to try out Deno since I was already
using npm a lot. I like Deno's testing framework and stdlib so it made sense to
build on my TS skills by using it.

## Methodology

I'm pretty new to solving abstract puzzles like this without project direction,
so I've opted to use test-driven development to solve each one. AOC provides
test cases for each puzzle, so the general approach here is to:

1. Conceptualize a solution.
2. Create tests that check my functions against the test cases.
3. Once the tests pass, write a main function to fetch the actual solutions.

I've opted to stick to a mostly procedural approach where I write out each bit
of logic as a function to make it easier to test. This feels natural for
Typescript. I considered an object-oriented approach but felt it a bit
cumbersome for the type of tasks I'm trying to solve.

While efficiency isn't my main goal, I aim to spend some time refactoring each
puzzle after I've solved it to see if I can make my logic fit a more
TS-appropriate pattern.

## Run the code

You can run the code by running `deno task run --day={DAY}`, where `{DAY}` is
the day you want to see results for. You can also run `deno task test` to run
the test suite for all days.
