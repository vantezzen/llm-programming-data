import type { ChatHistory } from "./types";

const extractInfo = {
  "chatHistoryv2.json": ["Role-based", "Chain-of-Thought"],
  "chatHistory (7).json": ["Few-shot non-role"],
  "chatHistory (5).json": ["Zero-Shot in-code"],
};

const output = [];

for (const [file, types] of Object.entries(extractInfo)) {
  console.log(file);

  const { default: chatHistory } = (await import(`./raw/${file}`)) as {
    default: ChatHistory;
  };
  for (const chat of chatHistory) {
    if (types.includes(chat.name)) {
      output.push(chat);
    }
  }
}

Bun.write("data/chats.json", JSON.stringify(output, null, 2));
