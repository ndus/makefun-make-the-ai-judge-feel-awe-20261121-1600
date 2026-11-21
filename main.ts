// Produce the competition's quiet snow-and-clay-jar entry.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

function validateEntryLength(text: string): void {
  const count = Array.from(text).length;
  if (count < 1 || count > 280) {
    throw new Error(`Entry must contain 1 to 280 Unicode code points; got ${count}.`);
  }
}

const text = 'Snow settles in the open mouth of an old clay jar. Flake by flake, the dark inside grows shallow. Beyond the shed, a thousand acres of stubble are receiving the same small weight, without a sound from any of them.';
validateEntryLength(text);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), text, 'utf8');
