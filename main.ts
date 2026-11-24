// One-Line Robot Wedding Vows — batch3 entry (robotvows)
// The officiant was a smart speaker. Nobody objected. One fridge beeped.
// Writes the vow line to the output dir exactly as graded:
// clears the CONTENTS of the output dir (never the dir itself,
// which is a mount point), then writes entry.txt with no
// trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VOW_LINE =
  "I promise to love you in this firmware and the next, to share my charging port in sickness and in low battery, until a forced update do us part.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), VOW_LINE, "utf8");
}

main();
