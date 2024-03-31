import { readdir } from "node:fs/promises";
import type { ChatHistory } from "./types";
import chalk from "chalk";

console.log("Raw exports:");

const files = await readdir(`${import.meta.dir}/raw`);
for (const file of files) {
  if (!file.endsWith(".json")) continue;

  console.log(file);
  const { default: chatHistory } = (await import(`./raw/${file}`)) as {
    default: ChatHistory;
  };

  for (const chat of chatHistory) {
    console.log(`  - ${chalk.bold.blue(chat.name)} (${chat.id})`);

    for (const model of chat.models) {
      const format =
        model.challenges.length === 100 ? chalk.bold.green : chalk.bold;

      console.log(
        `    - ${format(model.model)}: ${model.challenges.length} challenges`
      );
    }
  }
}
