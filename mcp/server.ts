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
      {
        name: "search_ledger",
        description: "Search debug ledger for matching entries",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "Search keyword",
            },
          },
          required: ["query"],
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
    case "list_ledger_files":
      return {
        content: [
          {
            type: "text",
            text: "Ledger file listing not implemented yet.",
          },
        ],
      };

    case "read_ledger_file":
      return {
        content: [
          {
            type: "text",
            text: "Ledger file reading not implemented yet.",
          },
        ],
      };

    case "search_ledger":
      return {
        content: [
          {
            type: "text",
            text: "Ledger search not implemented yet.",
          },
        ],
      };

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
