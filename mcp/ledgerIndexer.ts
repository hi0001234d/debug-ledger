import fs from "fs";
import path from "path";

/**
 * Absolute path to debug_ledger folder
 * (server.ts થી run થાય ત્યારે correct resolve થાય)
 */
const LEDGER_DIR = path.resolve(process.cwd(), "debug_ledger");

/**
 * Ledger file info type
 */
export type LedgerFile = {
  name: string;
  path: string;
};

/**
 * B1 — List all ledger files
 * ONLY discovery logic (no parsing, no filtering)
 */
export function listLedgerFiles(): LedgerFile[] {
  // check folder exists
  if (!fs.existsSync(LEDGER_DIR)) {
    throw new Error("debug_ledger folder not found");
  }

  const files = fs.readdirSync(LEDGER_DIR);

  // only markdown files
  const ledgerFiles = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      name: file,
      path: path.join(LEDGER_DIR, file),
    }));

  return ledgerFiles;
}