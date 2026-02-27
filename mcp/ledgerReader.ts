import fs from "fs";
import path from "path";

const LEDGER_DIR = path.resolve(process.cwd(), "debug_ledger");

/**
 * Normalize incoming filename string
 * Supports multiple separators
 */
function extractFileNames(input: string): string[] {
  return input
    .split(/[,|\s;\n]+/) // comma | pipe | space | newline | semicolon
    .map((f) => f.trim())
    .filter((f) => f.length > 0);
}

/**
 * Read single ledger file safely
 */
function readSingleFile(fileName: string): string {
  if (!fileName.endsWith(".md")) {
    throw new Error(`Invalid file type: ${fileName}`);
  }

  const filePath = path.join(LEDGER_DIR, fileName);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Ledger file not found: ${fileName}`);
  }

  return fs.readFileSync(filePath, "utf-8");
}

/**
 * B2 — Multi-file supported reader
 */
export function readLedgerFile(input: string): string {
  const fileNames = extractFileNames(input);

  if (fileNames.length === 0) {
    throw new Error("No valid ledger file provided");
  }

  let finalOutput = "";

  for (const file of fileNames) {
    const content = readSingleFile(file);

    finalOutput +=
      `===== ${file} =====\n` +
      `${content}\n\n`;
  }

  return finalOutput.trim();
}