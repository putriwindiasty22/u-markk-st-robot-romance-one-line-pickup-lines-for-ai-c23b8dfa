import { mkdirSync, writeFileSync } from "node:fs";

// Robot Romance: one single-line pickup line aimed at a robot/AI.
// The joke's premise is the machine itself: a transformer's
// self-attention mechanism, which only ever points at one thing.
const LINE =
  "Are you a transformer? Because my self-attention only ever points at you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
