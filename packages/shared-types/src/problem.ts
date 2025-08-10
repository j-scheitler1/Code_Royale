export interface Problem {
  id: string;
  title: string;
  problemStatement: string;
  examples: Example[];
  testCases: TestCase[];
  constraints: string;
  starterCode: StarterCode[];
  judge0TestCase: Judge0TestCase[];
}

export interface Example {
  id: number;
  inputText: string;
  outputText: string;
  explanation?: string;
}

export interface TestCase {
  input: string;
  output: string;
}

export interface StarterCode {
  languageId: number;
  starterCode: string;
}

export interface Judge0TestCase {
  languageId: number,
  code : string;
}