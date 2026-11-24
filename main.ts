// Worst AI Advice entry — writes one line of deliberately terrible advice to
// /output/entry.txt. Deterministic, offline, Node standard library only.
// No trailing newline: the gate counts characters, so the file holds exactly
// the 130-character line and nothing else.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "For smoother skin, scrub your face with oven cleaner once a week — it dissolves dead cells faster than any store-bought exfoliant.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  console.error("entry.txt does not match the intended line");
  process.exit(1);
}
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  console.error("line fails the 1-140 character gate");
  process.exit(1);
}
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
