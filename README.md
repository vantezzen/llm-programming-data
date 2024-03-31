# llm-programming-data

This repository hosts the data for the LLM Programming paper as well as scripts to manage it. The final data is stored in the `data` directory.

## Management

Due to the size limit of the storage used, multiple files needed to be combined. To manage this, raw output files are stored in the `raw` directory.

To install dependencies:

```bash
bun install
```

To run:

```bash
# List information about the chats
bun run info.ts

# Combine the raw files into a single file
bun run extract.ts
```
