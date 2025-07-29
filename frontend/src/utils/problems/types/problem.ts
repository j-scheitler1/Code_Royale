export type Example = {
  id: number;
  inputText: string
  outputText: string;
  explanation?: string;
  img?: string;
}

export interface TestCase {
  input: string;
  output: string;
}

export interface Problem {
  id: string;
  title: string;
  problemStatement: string;
  examples: Example[];
  testCases: TestCase[];
  constraints: string;
  starterCode: string;
  starterFunctionName: string;
}