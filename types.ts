export const DataSets = ["MBPP"] as const;
export type DataSet = (typeof DataSets)[number];

export const Models = [
  "GPT3",
  "GPT4",
  "LLAMA",
  "LLAMA Code",
  "Starcoder",
  "Google Text Bison",
  "Google Code Bison",
  "Google Gemini",
] as const;
export type Model = (typeof Models)[number];

export const commonLibraries = ["math", "re", "heapq", "bisect"];

export interface TestCode {
  setupCode: string;
  testList: string[];
}

export interface Challenge {
  name: string;
  text: string;
  testCode: TestCode;
  suggestedCode?: string;
  codeHead?: string;
}

export type Status = "success" | "error" | "SyntaxError" | "AssertionError";

export interface TestCaseResult {
  name: string;
  status: Status;
  output: string;
}

export interface ModelChallengeResponse {
  name: string;
  code: string; // Code content returned by model
  status: "generating" | "executing" | "success" | "error";
  success: boolean;
  output: string;
  rawResponse: string;
  testCaseResults: TestCaseResult[];
  challenge: Challenge;
}

export interface ModelResponse {
  id: string;
  model: Model;
  challenges: ModelChallengeResponse[];
}

export interface Chat {
  id: string;
  name: string;
  prompt: string;
  dataset: DataSet;
  challengeLimit: number;
  requestedModels: Model[];
  addHead: boolean;
  models: ModelResponse[];
  createdAt: Date;
  updatedAt: Date;
}

export type ChatHistory = Chat[];
