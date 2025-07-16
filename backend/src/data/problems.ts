import { Problem } from "../types/problem";

/*
  Format is the following
  id:
  title:
  problemStatement:
  Examples: [
    {
      id:
      inputText:
      outputText:
      explanation:
    }
  ]
  testCases: [
    {
      input:
      output:
    }
  ]
  constraints:
  starterCode: [
    {
      LanguageId:
      starterCode:
    }
  ]
  starterFunctionName: 
*/

// Note the StarterCode Needs to include 4 instances

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
      {
        id: 1,
        inputText: '[]',
        outputText: '[]',
        explanation: 'Exaplanation',
      },
    ],
    testCases: [
      {
        input: '[2,7,11,15],9',
        output: '[0,1]',
      },
    ],
    constraints: 'Each input has exactly one solution.',
    starterCode: [
      {
        languageId: 71, // Python
        starterCode: 'class Solution:\n\tdef twoSum(self, nums: List[int], target: int) -> List[int]:'
      },
      {
        languageId: 62, // Java
        starterCode: 'class Solution {\n\tpublic int[] towSum(int[] nums, int target) { \n\n\t} \n}'
      },
      {
        languageId: 63, // JavaScript
        starterCode: 'class Solution {\n\t/**\n\t* @param {number[]} nums\n\t* @param {number} target\n\t* @return {number[]}\n\t*/\n\ttwoSum(nums, target) {\n \n\t}\n}'
      },
      {
        languageId: 51, // C++
        starterCode: 'class Solution {\npublic: \n\tvector<int> twoSum(vector<int>& nums, int target) { \n  \n\n\t} \n}'
      },
    ],
    starterFunctionName: 'function twoSum(',
  },
];

export function getRandomProblem(): Problem {
  return problems[Math.floor(Math.random() * problems.length)];
}


// export const languageOptions: LanguageOption[] = [
//   { label: 'Python', value: 71 },
//   { label: 'Java', value: 62 },
//   { label: 'JavaScript', value: 63 },
//   { label: 'C++', value: 51 },
// ];
