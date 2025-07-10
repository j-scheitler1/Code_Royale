

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Example = {
  id: number;
  inputText: string
  outputText: string;
  explanation?: string;
  img?: string;
}

export type Problem = {
  id: string;
  title: string;
  problemStatement: string;
  examples: Example[];
  constraints: string;
  starterCode: string;
  handlerFunction: ((fn: any) => boolean) | string;
  starterFunctionName: string;
  testCases: {
    input: string;
    output: string;
  }[];
};

// export type DBProblem = {
// 	id: string;
// 	title: string;
// 	category: string;
// 	difficulty: string;
// 	likes: number;
// 	dislikes: number;
// 	order: number;
// 	videoId?: string;
// 	link?: string;
// };