// Real-Life Patch Notes: The Comedy Changelog — acct10 entry program.
// Writes exactly one patch-note line to /output/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

// Final entry (acct10 concept: mouth ships the wrong word while the brain
// is still loading the right one). Exactly one line, 120 characters.
const ENTRY =
  "v3.0.4: fixed a bug where the mouth shipped the wrong word mid-sentence while the brain was still loading the right one.";

// Gate: 1-160 characters, not whitespace-only (mirrors the sealed scorer).
const len = [...ENTRY].length;
if (len < 1 || len > 160) throw new Error(`entry length ${len} out of range 1-160`);
if (ENTRY.trim().length === 0) throw new Error("entry is whitespace-only");
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

const bytes = Buffer.from(ENTRY, "utf8");
console.log("chars:", [...ENTRY].length);
console.log("sha256:", createHash("sha256").update(bytes).digest("hex"));
