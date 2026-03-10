# debug-ledger

*AI should debug with memory, not amnesia.*

`debug-ledger` exists because AI-assisted debugging repeatedly breaks old fixes, removes “weird” code that exists for a reason, and reintroduces bugs teams already paid for in the past. Code survives. Debug context doesn’t. This project preserves that lost memory in a form AI tools can actually see.

---

## Example: AI Debug With Memory
![Example: AI Debug With Memory](https://github.com/hi0001234d/debug-ledger/blob/main/example-ai-debug-with-memory.gif)

**Note:** Do not forget to add this line **"Before starting, call the list_ledger_files MCP tool and show me the output."** at last in every prompt when you want to apply your project constraint or debug memory.

---

## The Problem

AI tools are very good at understanding code as it exists today.  
They are very bad at understanding *why* code exists the way it does.

In real, long-lived software:
- Bugs repeat  
- Fixes regress  
- Tests look unnecessary but are critical  
- “Ugly” code often protects against past failures  

Humans remember this history.  
AI does not.

So AI:
- Suggests fixes that already failed before  
- Cleans up code that hides old landmines  
- Breaks systems in ways that feel _obviously avoidable_ to maintainers  

This isn’t a model intelligence problem.  
It’s a *missing memory problem*.

---

## What `debug-ledger` Is

`debug-ledger` is a *read-only, repo-local debug memory*.

It is a small, human-written ledger that documents:
- Past incidents that mattered  
- Fixes that were tried and rejected  
- Regressions that came back  
- Constraints that must not be violated again  

This ledger lives *inside the repository*, versioned with the code, and is exposed to AI tools so they can *see historical truth before suggesting changes*.

It does not tell AI _what to do_.  
It reminds AI _what already happened_.

---

## What `debug-ledger` Is NOT

`debug-ledger` is *not*:
- An error tracker  
- An observability system  
- A test framework  
- A policy engine  
- An autonomous agent  
- A bug-fixing tool  

It does not:
- Enforce rules  
- Block changes  
- Decide correctness  
- Automate debugging  

It only preserves memory.

---

## How It Fits Into AI Editors & MCP

AI editors already read your code.  
`debug-ledger` lets them read your *debug history*.

Using MCP (Model Context Protocol), the ledger is exposed as *read-only context* that AI tools can consult *before* proposing fixes or refactors.

The flow is simple:
1. Developer asks AI to debug or change code  
2. MCP surfaces relevant ledger entries (if any exist)  
3. AI responds with awareness of past failures and constraints  

If no historical context exists, nothing changes.  
MCP is a delivery mechanism — not the product.

---

## Why It’s Intentionally Simple

Most valuable maintenance knowledge is:
- Sparse  
- Expensive to learn  
- Easy to forget  
- Hard to rediscover  

So `debug-ledger` is deliberately simple:
- Plain text  
- Human-written  
- Read-only for AI  
- No automation  
- No inference  
- No hidden logic  

If it becomes clever, it becomes fragile.  
If it becomes heavy, people stop using it.  
Simplicity is the feature.

---

## How to Try It (Conceptually)

You don’t need new workflows.
1. Add a ledger entry after a painful bug or incident.  
Create the entry inside the `debug_ledger` folder in the cloned MCP project.  
Create a new `.md` file with a meaningful name for your entry and add it there. The file name must start with one of the supported prefixes: `constraints`, `incidents`, `regressions`, or `rejected_fixes`.
2. Keep your entry short and factual  
3. Explain what failed and what must not be repeated  
4. Let AI tools see it during future debugging sessions  

If nothing painful happened, don’t write anything.  
The ledger grows slowly — only when reality demands it.

---

## Quick Start

## Installation
 
### Step 1 — Add MCP Config
 
Add this to your MCP settings file (Kilo Code / Cursor / Claude Desktop):
```json
{
  "mcpServers": {
    "debug-ledger": {
      "command": "npx",
      "args": ["-y", "debug-ledger-mcp"],
      "cwd": "/your/project/path"
    }
  }
}
```
 
Replace `/your/project/path` with your actual project folder path.
 
### Step 2 — Restart Your Editor

 
> **Node.js 18+** required.

![debug-ledger Installation](https://github.com/bhavnesh75/debug-ledger/blob/main/Kilo%20code.png)

That's it. debug_ledger/ folder with 16 example files will be automatically created in your project like below screenshot.

![debug-ledger Installation](https://github.com/bhavnesh75/debug-ledger/blob/main/folder-with-example-files.png)
 
---

## Tools

`debug-ledger` exposes **4 MCP tools** that allow AI systems to access debugging history stored in the debug ledger.

| Tool | Purpose | Example Return |
|-----|-----|-----|
| `list_ledger_files()` | Lists all available debug ledger files in the repository | `["incidents.md", "rejected_fixes.md", "regressions.md", "constraints.md"]` |
| `read_ledger_file(file_name)` | Reads the full contents of a specific ledger file | `INCIDENT-014: Login timeout under load` |
| `select_context(query, level)` | Finds relevant ledger entries related to a debugging query | `INCIDENT-014 / rejected fix: increase timeout` |
| `assemble_debug_context(selected_context)` | Combines selected ledger entries into structured debugging context for AI | `Incident + rejected fix + constraints summary` |

---
 
## Try It
 
After setup, add this line to any AI prompt:
 
> *"Before starting, call the list_ledger_files MCP tool and show me the output."*
 
If your editor shows the ledger files — it's working. 

---

## Contributing

We welcome contributions! Please see:
- **[Contributing Guide](CONTRIBUTING.md)** - How to contribute  

---

## Kill Criteria

This experiment should be considered a failure if:
- Developers don’t recognize the problem immediately  
- The ledger fills with low-value noise  
- People ask for automation before understanding the idea  
- It turns into governance, enforcement, or policy  
- It only makes sense with MCP and nowhere else  

Killing this early is a valid outcome.

---

*Code shows what exists.  
Debug ledger explains why it must stay that way.*