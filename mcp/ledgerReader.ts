import fs from "fs";
import path from "path";

const LEDGER_DIR = path.resolve(process.cwd(), "debug_ledger");

/**
 * B2 — Read ledger file by name
 * ONLY file reading (no parsing, no filtering)
 */
export function readLedgerFile(fileName: string): string {
  // security check — allow only .md files
  if (!fileName.endsWith(".md")) {
    throw new Error("Only markdown ledger files are allowed");
  }

  // create safe absolute path
  const filePath = path.join(LEDGER_DIR, fileName);

  // ensure file exists
  if (!fs.existsSync(filePath)) {
    throw new Error(`Ledger file not found: ${fileName}`);
  }

  // read file content
  const content = fs.readFileSync(filePath, "utf-8");

  return content;
}