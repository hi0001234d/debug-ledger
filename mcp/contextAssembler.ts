import { readLedgerFile } from "./ledgerReader";

/**
 * C3 — Context Assembly
 * Handles:
 *  - Single file
 *  - Multiple files
 *  - Separators: , | space \n \t
 *  - Returns structured AI-ready context
 */
export function assembleLedgerContext(input: string): string {
  if (!input || typeof input !== "string") {
    throw new Error("Invalid file input");
  }

  // Normalize separators:
  // Replace , | newline tab multiple spaces with single comma
  // const normalized = input
  //   .replace(/\|/g, ",")
  //   .replace(/\n/g, ",")
  //   .replace(/\t/g, ",")
  //   .replace(/\s+/g, ",")
  //   .split(",")
  //   .map((f) => f.trim())
  //   .filter((f) => f.length > 0);

  const rawFiles = input
    .toLowerCase()
    .replace(/["']/g, "")
    .replace(/\(.*?\)/g, "")
    .replace(/\band\b/g, ",")
    .replace(/&/g, ",")
    .replace(/^- /gm, "")
    .replace(/^• /gm, "")
    .replace(/\bfiles?:/g, "")
    .replace(/[\r\n\t|;]+/g, ",")
    .replace(/\s+/g, ",")
    .split(",")
    .map((f) => f.trim())
    .filter(Boolean)
    .map((f) => f.replace(/[^a-z0-9._-]/gi, ""));

  // Remove duplicate filenames
  const uniqueFiles = [...new Set(normalized)];

  let finalContext = "";

  for (const fileName of uniqueFiles) {
    try {
      const content = readLedgerFile(fileName);

      finalContext += `\n=== ${fileName} ===\n`;
      finalContext += content + "\n";
    } catch (error) {
      finalContext += `\n=== ${fileName} ===\n`;
      finalContext += `Error reading file: ${(error as Error).message}\n`;
    }
  }

  return finalContext.trim();
}