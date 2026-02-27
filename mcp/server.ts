import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

/**
 * debug-ledger MCP server
 *
 * NOTE:
 * - This file defines ONLY structure and boundaries
 * - Business logic is intentionally NOT implemented here
 * - All real logic must come via PRs
 */

const server = new Server(
  {
    name: "debug-ledger",
    version: "0.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

import { listLedgerFiles } from "./ledgerIndexer.js";

const files = listLedgerFiles();

import { readLedgerFile } from "./ledgerReader.js";

/**
 * Tool registry
 * These describe WHAT the server exposes, not HOW it works
 */
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "list_ledger_files",
        description: "List available debug ledger files",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "read_ledger_file",
        description: "Read a specific debug ledger file",
        inputSchema: {
          type: "object",
          properties: {
            filename: {
              type: "string",
              description: "Ledger file name",
            },
          },
          required: ["filename"],
        },
      },
    ],
  };
});

/**
 * Tool execution handler
 */
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name } = request.params;

  // BUSINESS LOGIC IMPLEMENTED IN PRs
  // This skeleton intentionally returns placeholders only

  switch (name) {
    case "list_ledger_files": {
      const files = listLedgerFiles();
  
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(files, null, 2),
          },
        ],
      };
    }
  
    case "read_ledger_file": {
      const { filename } = request.params.arguments as {
        filename: string;
      };
  
      const assembledContext = assembleLedgerContext(filename);
  
      return {
        content: [
          {
            type: "text",
            text: assembledContext,
          },
        ],
      };
    }
  
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
});

/**
 * Server bootstrap
 */
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("debug-ledger MCP server failed to start:", error);
  process.exit(1);
});
