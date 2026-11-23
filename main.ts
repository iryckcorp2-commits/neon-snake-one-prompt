import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Neon Snake: a tiny browser game built from one prompt.
// This program ships the game: it writes game.html (the whole game,
// a single self-contained file) into the output directory.
// Standard library only, no network, deterministic: the same input
// always produces byte-identical output.
const here = dirname(fileURLToPath(import.meta.url));
const game = readFileSync(join(here, "game.html"), "utf8");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "game.html"), game, "utf8");
console.log("Wrote game.html (" + Buffer.byteLength(game, "utf8") + " bytes) to " + outDir);
