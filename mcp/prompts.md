# Debug Ledger Prompt Contract

The following instructions define how AI tools are expected to behave when debug-ledger context is available.

---

## Core Instruction

Before proposing any fix, refactor, or simplification, *consult the debug ledger*.

Assume that documented historical context exists for a reason.

---

## Respect Historical Constraints

If the debug ledger documents:
- Past failures  
- Regressions  
- Constraints  
- Rejected fixes  

Then:
- Do not ignore them  
- Do not override them  
- Do not assume they are outdated without evidence  

Historical context represents paid knowledge.

---

## Do Not Remove Documented Workarounds

If code or tests are documented in the debug ledger as workarounds:
- Do not remove them  
- Do not “clean them up”  
- Do not simplify them  

Assume that removing them risks reintroducing known failures.

---

## When No Context Exists

If the debug ledger contains no relevant entries:
- Proceed normally  
- Do not invent constraints  
- Do not assume missing context implies safety  

Absence of history does not imply correctness — only absence of memory.

---

## Final Principle

The debug ledger provides *memory*, not commands.

Use it to avoid repeating known mistakes.