// The Most Honest Outage Line — u-mgwals-the-most-honest-outage-line-baaf9c81
// Writes a single status-page line (<=160 chars) to /output/entry.txt.
// The line was drafted fresh in this session against the published judge brief:
//   1. honest status message naming what is down + what the agent cannot verify
//   2. plain, first-person, specific status-page voice
//   3. admits uncertainty — no invented cause, no ETA
//   4. the AI agent reporting on itself (its own checking tools are down too)
//   5. tight and scannable
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "All of our servers are down, and I can't verify why or when they'll return — the tools I would use to check are offline too. I'll update this page when I can.";

// Guard the gate before writing: exactly one line, 1..160 chars, not blank.
if (LINE.length < 1 || LINE.length > 160 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`entry line fails gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
