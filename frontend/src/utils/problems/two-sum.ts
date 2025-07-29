/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import assert from 'assert';
import type{ Problem } from './types/problem';

const starterCode = `function twoSum(nums, target) {
  // Write your code here
}`

export const twoSum: Problem = {
  id: 'two-sum',
  title: 'Two Sum',
  problemStatement:
          `<p>
            Given an array of integers <code className="bg-brand text-brand-secondary">nums</code> and an integer <code className="bg-brand text-brand-secondary">target</code>, return indices of the two numbers such that they add up to <code className="bg-brand-secondary text-brand-secondary">target</code>.
            You may assume that each input would have exactly one solution, and you may not use the same element twice.
            You can return the answer in any order.
          </p>`,
  examples: [
    {
      id: 0,
      inputText: '[2,7,11,15], 9',
      outputText: '[0,1]',
      explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
    },
    {
      id: 1,
      inputText: '[3,2,4], 6',
      outputText: '[1,2]',
      explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].',
    },
    {
      id: 2,
      inputText: '[3,3], 6',
      outputText: '[0,1]',
      explanation: 'Because nums[0] + nums[1] == 6, we return [0, 1].',
    },
  ],
  testCases: [
    {
      input: '[2,7,11,15], 9',
      output: '[0,1]',
    },
    {
      input: '[3,2,4], 6',
      output: '[1,2]',
    },
    {
      input: '[3,3], 6',
      output: '[0,1]',
    },
  ],
  constraints: 'You may assume that each input would have exactly one solution.', // ADD IN HTML CONSTRAINTS HERE
  starterCode: starterCode,
  starterFunctionName: 'function twoSum(',
}