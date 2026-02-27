## Debug Ledger Guidelines

This ledger exists to preserve *debugging memory* that would otherwise be lost.
- It is not a log.
- It is not documentation.
- It is not a place to think out loud.

Only write here when forgetting this information would cause real damage.

---

## Write After Pain

Only write ledger entries *after something went wrong*.

Valid triggers include:
- A production incident
- A recurring bug that took time to understand
- A fix that looked correct but caused regressions
- A test that exists only because reality was worse than expected

Do *not* write speculative entries.  
Do *not* write “just in case” notes.  
Do *not* write during initial development.

If it didn’t cost time, trust, or effort, it does not belong here.

---

## Historical Truth, Not Ground Truth

The ledger does *not* define how the system _should_ work.  
It records how the system *actually failed in the past*.

Entries may describe:
- Bad decisions that were necessary
- Ugly code that protects against worse outcomes
- Constraints imposed by legacy, scale, or external systems

An entry being present does *not* mean it is ideal.  
It means it was *paid for*.

---

## Negative Knowledge Matters

The most valuable information is often:
- What did *not* work
- What made things worse
- What was rolled back
- What must not be repeated

This ledger explicitly values:
- Rejected fixes
- Failed refactors
- Removed “cleanups”
- Tests that seem redundant but prevent regressions

Remembering failure prevents repeating it.

---

## What Qualifies as a Valid Entry

A ledger entry must:
- Describe a real past problem
- Explain why it was hard or non-obvious
- Record what failed or must not be repeated
- Protect future maintainers from re-learning the same lesson

Each entry should answer at least one of:
- “Why does this code look wrong?”
- “Why can’t we simplify this?”
- “Why does this test exist?”
- “Why did this bug come back before?”

If an entry cannot prevent a future regression, it does not qualify.

---

## File Structure Rule

Each ledger entry must live in its own file.

Do not append multiple entries into a single file.

Use descriptive filenames in the format:

- constraints-`<topic>`.md
- incidents-`<area>`.md
- regressions-`<area>`.md
- rejected_fixes-`<topic>`.md

Examples:
- constraints-api.md
- regressions-cart.md
- rejected_fixes-timeout.md

One failure = one file.

---

## What Does NOT Belong in the Ledger

Do *not* add:
- Stack traces
- Logs
- Debug output
- Temporary investigation notes
- Speculative theories
- Design discussions
- Feature ideas
- TODOs

Do *not* duplicate:
- Issue trackers
- Test cases
- Documentation

## Do Not Aggregate Entries

Do not create large files containing many unrelated issues.

The ledger is indexed by filename.

Future agents and developers rely on file names to decide what to read.

Keep entries isolated.

This ledger is *small by design*.

---

## Final Rule

If reading this entry would not change how a future fix is made,  
*delete it*.

This ledger protects memory — not completeness.