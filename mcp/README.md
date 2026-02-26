# debug-ledger MCP

This MCP exposes the debug ledger to AI tools as *read-only historical context*.
Its sole purpose is to make past debugging knowledge visible during AI-assisted work.

---

## What This MCP Exposes

The MCP provides AI tools with access to:
    The contents of the `debug_ledger/` directory
    Individual ledger files
    Relevant ledger entries when requested

All data is returned as *plain text*, exactly as written by humans.

The MCP does not interpret, summarize, or modify ledger content.

---

## What This MCP Never Does

This MCP does *not*:
    Write to the ledger
    Modify files
    Enforce rules or constraints
    Decide correctness
    Block or approve changes
    Analyze code behavior
    Infer intent or meaning

It is not an agent.
It does not reason.
It does not act.

---

## Read-Only Guarantee

The debug ledger is *read-only* by design.

The MCP:
    Cannot write new entries
    Cannot update existing entries
    Cannot delete content

All ledger changes must be made explicitly by humans through normal version control.

This guarantee is intentional.

---

## How AI Tools Are Expected to Use It

AI tools are expected to:
    1.Consult the debug ledger *before* suggesting fixes or refactors
    2.Surface relevant historical context to the user
    3.Respect documented past failures and constraints

If no relevant history exists, the MCP should have no effect.

The MCP provides memory — not instructions.

---

## Scope Boundary

This MCP exists to expose *historical debugging context only*.

Simplicity is a deliberate constraint.