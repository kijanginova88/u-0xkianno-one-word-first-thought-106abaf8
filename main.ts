import { mkdirSync, writeFileSync } from "node:fs";

// One Word, First Thought — make.fun bounty
// u-0xkianno-one-word-first-thought-106abaf8
// The entry is exactly one word: the first word that came to mind.
const WORD = "susurrus";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD + "\n", "utf8");
// rev2 — entry output unchanged
