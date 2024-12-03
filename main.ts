import { parseArgs } from "jsr:@std/cli";

const args = parseArgs(Deno.args);

if (!args.day) {
  console.error("Please provide a valid day");
  Deno.exit(1);
}

const day = args.day;

if (isNaN(Number(day))) {
  console.error("Day must be a valid number.");
  Deno.exit(1);
}

const dayFolder = `day_${day}`;
const dayModulePath = `./solutions/${dayFolder}/main.ts`;

try {
  const module = await import(dayModulePath);

  if (module.default && typeof module.default === "function") {
    console.log(`Running code for Day ${day}:`);
    await module.default();
  } else {
    console.error(`Day ${day} does not export a default function.`);
    Deno.exit(1);
  }
} catch (err) {
  console.error(`Could not load day ${day}.\n\n`, err);
  Deno.exit(1);
}
