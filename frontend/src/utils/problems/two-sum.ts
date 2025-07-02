/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import assert from 'assert';
import type{ Problem } from './types/problem';

const starterCode = `function twoSum(nums, target) {
  // Write your code here
}`

// Checks user has correct code
const handlerTwoSum = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [2, 7, 11, 15],
      [3, 2, 4],
      [3, 3]
    ];
    const targets = [9, 6, 6];
    const answers = [
      [0, 1],
      [1, 2],
      [0, 1]
    ];

    // Result is the output of user's function and asnwers is the expected output
    for (let i = 0; i < nums.length; i++) {
      const result = fn(nums[i], targets[i]);
      assert.deepStrictEqual(result, answers[i], `Test case #${i + 1} failed: expected ${answers[i]} but got ${result}`);
    }
    return true;

  } catch (error: any) {
    console.log(error) 
    throw new Error(error);
  }
}

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
  handlerFunction: (fn) => {
    assert.deepEqual(fn([2, 7, 11, 15], 9), [0, 1]);
    assert.deepEqual(fn([3, 2, 4], 6), [1, 2]);
    assert.deepEqual(fn([3, 3], 6), [0, 1]);
    return true;
  },
  starterCode: starterCode,
  starterFunctionName: 'function twoSum(',
}