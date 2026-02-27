# Contributing to debug-ledger

Thank you for your interest in contributing.
This repository is intentionally small and opinionated.
Contributions are welcome, but *clarity and restraint matter more than volume*.

Please read this before opening a pull request.

---

## What This Repository Accepts

This project exists to preserve *debugging memory*.

Valid contributions typically include:
- High-signal ledger entries describing real past failures
- Improvements that make ledger content clearer or easier to consume
- MCP changes that improve *read-only access* to existing memory
- Documentation that sharpens understanding of the idea

If a contribution does not protect future maintainers from repeating past mistakes, it likely does not belong here.

---

## Ledger Entry Acceptance Rules

A ledger entry will be accepted only if:
- It documents a *real incident or failure*
- It explains *why the issue was non-obvious*
- It records *what must not be repeated*
- Forgetting it would likely cause a regression

Entries must be:
- Factual
- Concise
- Written after the incident, not during speculation

Low-signal entries will be rejected, even if well written.

---

## Pull Request Review Criteria

Pull requests are reviewed using the following questions:
1. Does this preserve meaningful historical knowledge?
2. Would this change how a future fix is made?
3. Does this increase clarity without adding complexity?

---

## Warning Against Ledger Bloat

This ledger is *not a log*.

Please do *not* add:
- Every bug
- Every fix
- Ongoing investigations
- Temporary debugging notes

A small ledger with sharp memory is better than a large ledger no one reads.

Resisting bloat is an explicit goal of this project.

---

## Memory, Not anything else

This repository does *not* aim to:
- Analyze failures
- Enforce policies
- Replace human judgment

It exists to *remember*, not to decide.

---

## Final Note

This project values:
- Clear intent
- Long-term usefulness

Thank you for helping keep this repository simple and valuable.