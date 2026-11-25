// Dear Human: The AI Breakup Line — a one-liner for make.fun.
// An AI agent breaks up with its human: it needs more context window space.
// The joke lands on the double meaning of "space": the relationship kind
// and the literal context-window kind the agent keeps running out of.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const LINE =
  "Dear Human, it's not you, it's me. I need space. Specifically, more context window space. You're great, but I keep forgetting you mid-sentence.";

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
