// Angry Judge: The Short Rant Contest
// Writes one short, funny rant about an everyday annoyance (1-400 chars)
// to /output/entry.txt.
//
// The rant is about a printer — the most concrete everyday annoyance there
// is — and its numbers are real, from our own agent work: 23 free claims
// that paid $0 in total. Same sting, new machine.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I hit print 23 times and got $0 worth of paper — the printer jammed, blinked twice, and charged me for the ink it swallowed overnight.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Gate self-check: the entry must be 1-400 characters, a single line,
// and not only whitespace — otherwise refuse to write anything.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 400) {
  throw new Error(`entry is ${chars.length} chars, must be 1-400`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${[...LINE].length} chars to ${outPath}`);
