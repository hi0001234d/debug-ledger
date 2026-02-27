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

aa line B4 task vakhte kadhvani avi hati
// console.log("Ledger Files:", files);

import { readLedgerFile } from "./ledgerReader.js";

aa line B4 task vakhte kadhvani avi hati
// const data = readLedgerFile("incidents.md");
// console.log("\nLedger Content:\n", data);

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
      aa line B4 task vakhte kadhvani avi hati
      // {
      //   name: "search_ledger",
      //   description: "Search debug ledger for matching entries",
      //   inputSchema: {
      //     type: "object",
      //     properties: {
      //       query: {
      //         type: "string",
      //         description: "Search keyword",
      //       },
      //     },
      //     required: ["query"],
      //   },
      // },
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

  aa line B4 task vakhte replace karvani avi hati  
  // switch (name) {
  //   case "list_ledger_files":
  //     return {
  //       content: [
  //         {
  //           type: "text",
  //           text: "Ledger file listing not implemented yet.",
  //         },
  //       ],
  //     };

  //   case "read_ledger_file":
  //     return {
  //       content: [
  //         {
  //           type: "text",
  //           text: "Ledger file reading not implemented yet.",
  //         },
  //       ],
  //     };

  //   case "search_ledger":
  //     return {
  //       content: [
  //         {
  //           type: "text",
  //           text: "Ledger search not implemented yet.",
  //         },
  //       ],
  //     };

  //   default:
  //     throw new Error(`Unknown tool: ${name}`);
  // }

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
  
      const content = readLedgerFile(filename);
  
      return {
        content: [
          {
            type: "text",
            text: content,
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
