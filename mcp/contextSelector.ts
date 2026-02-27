import {
    CONTEXT_POLICY,
    DEFAULT_CONTEXT_LEVEL,
    isValidContextLevel,
    ContextLevel,
  } from "./context-policy.js";
  
  import { listLedgerFiles } from "./ledgerIndexer.js";
  
  /**
   * C2 — Context Selection Engine
   *
   * 1. Reads available ledger files (B1)
   * 2. Applies prefix policy
   * 3. Returns matching filenames
   */
  
  export function selectContextFiles(
    requestedLevel?: string
  ): string[] {
    let level: ContextLevel = DEFAULT_CONTEXT_LEVEL;
  
    if (requestedLevel && isValidContextLevel(requestedLevel)) {
      level = requestedLevel;
    }
  
    // prefixes allowed for this level
    const allowedPrefixes = CONTEXT_POLICY[level];
  
    // get all ledger files (from B1)
    const files = listLedgerFiles();
  
    // filter by prefix
    const selectedFiles = files
      .map((f) => f.name)
      .filter((fileName) =>
        allowedPrefixes.some((prefix) =>
          fileName.startsWith(prefix)
        )
      );
  
    return selectedFiles;
  }