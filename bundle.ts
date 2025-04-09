import { bundle } from "jsr:@deno/emit";
const result = await bundle(
  new URL("./app.ts", import.meta.url),
);

const { code } = result;
console.log(code);

Deno.writeTextFile("./app.js", code);