import { join } from "jsr:@std/path/join";

export const readFile = (pathname: string) => {
  const scriptDir = new URL(".", import.meta.url).pathname;
  const filePath = join(scriptDir, pathname);
  return Deno.readTextFileSync(filePath);
};
