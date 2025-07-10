import { Problem } from "../types/problem";

export const problems: Problem[] = [
  {
    id: 'two-sum',
    title: 'Two Sum',
    problemStatement: `<p>
      Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.
    </p>`,
    examples: [
      {
        id: 0,
        inputText: '[2,7,11,15], 9',
        outputText: '[0,1]',
        explanation: 'nums[0] + nums[1] == 9',
      },
    ],
    testCases: [
      {
        input: '[2,7,11,15],9',
        output: '[0,1]',
      },
    ],
    constraints: 'Each input has exactly one solution.',
    starterCode: `function twoSum(nums, target) {\n  // Write your code here\n}`,
    starterFunctionName: 'function twoSum(',
  },
];

export function getRandomProblem(): Problem {
  return problems[Math.floor(Math.random() * problems.length)];
}
