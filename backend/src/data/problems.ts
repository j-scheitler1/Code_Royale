import { Problem } from "../types/types";

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
  judge0TestCase: [
    {
      LanguageId:
      starterCode:
    }
  ]
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
        input: '[2, 7, 11, 15],9',
        output: '[0,1]',
      },
    ],
    constraints: 'Each input has exactly one solution.',
    starterCode: [
      {
        languageId: 71, // Python
        starterCode: 'from typing import List\nclass Solution:\n  def twoSum(self, nums: List[int], target: int) -> List[int]:'
      },
      {
        languageId: 62, // Java
        starterCode: 'class Solution {\n  public int[] twoSum(int[] nums, int target) { \n\n  } \n}'
      },
      {
        languageId: 63, // JavaScript
        starterCode: 'class Solution {\n  /**\n  * @param {number[]} nums\n  * @param {number} target\n  * @return {number[]}\n  */\n  twoSum(nums, target) {\n \n  }\n}'
      },
      {
        languageId: 51, // C++
        starterCode: 'class Solution {\npublic: \n  vector<int> twoSum(vector<int>& nums, int target) { \n  \n\n  } \n}'
      },
    ],
    judge0TestCase: [
      {
        languageId: 71, // Python
        code: `\ndef run_tests():\n    sol = Solution()\n    try:\n        result1 = sol.twoSum([2, 7, 11, 15], 9)\n        print("Test 1:", result1)\n        if result1 not in ([0, 1], [1, 0]):\n            print("FAIL: Test 1")\n            return\n\n        result2 = sol.twoSum([3, 2, 4], 6)\n        print("Test 2:", result2)\n        if result2 not in ([1, 2], [2, 1]):\n            print("FAIL: Test 2")\n            return\n\n        result3 = sol.twoSum([3, 3], 6)\n        print("Test 3:", result3)\n        if result3 not in ([0, 1], [1, 0]):\n            print("FAIL: Test 3")\n            return\n\n        print("HASHHERE")\n    except Exception as e:\n        print("ERROR:", e)\n\nif __name__ == "__main__":\n    run_tests()\n`,
      },
      {
        languageId: 62, // Java
        code: `class Main{static boolean matchEitherOrder(int[] r,int a,int b){return r!=null&&r.length==2&&((r[0]==a&&r[1]==b)||(r[0]==b&&r[1]==a));}static String arrStr(int[] a){if(a==null)return "null";StringBuilder sb=new StringBuilder("[");for(int i=0;i<a.length;i++){sb.append(a[i]);if(i+1<a.length)sb.append(", ");}sb.append("]");return sb.toString();}public static void main(String[] args){try{Solution sol=new Solution();int[] r1=sol.twoSum(new int[]{2,7,11,15},9);System.out.println("Test 1: "+arrStr(r1));if(!matchEitherOrder(r1,0,1)){System.out.println("FAIL: Test 1");return;}int[] r2=sol.twoSum(new int[]{3,2,4},6);System.out.println("Test 2: "+arrStr(r2));if(!matchEitherOrder(r2,1,2)){System.out.println("FAIL: Test 2");return;}int[] r3=sol.twoSum(new int[]{3,3},6);System.out.println("Test 3: "+arrStr(r3));if(!matchEitherOrder(r3,0,1)){System.out.println("FAIL: Test 3");return;}System.out.println("HASHHERE");}catch(Throwable t){System.out.println("ERROR: "+t);}}}`,
      },
      {
        languageId: 63, // JavaScript
        code: `const jsTest = 'function runTests(){const sol=new Solution();try{let r1=sol.twoSum([2,7,11,15],9);console.log("Test 1:",r1);if(JSON.stringify(r1)!=="[0,1]"&&JSON.stringify(r1)!=="[1,0]"){console.log("FAIL: Test 1");return;}let r2=sol.twoSum([3,2,4],6);console.log("Test 2:",r2);if(JSON.stringify(r2)!=="[1,2]"&&JSON.stringify(r2)!=="[2,1]"){console.log("FAIL: Test 2");return;}let r3=sol.twoSum([3,3],6);console.log("Test 3:",r3);if(JSON.stringify(r3)!=="[0,1]"&&JSON.stringify(r3)!=="[1,0]"){console.log("FAIL: Test 3");return;}console.log("HASHHERE");}catch(e){console.log("ERROR:",e);}}runTests();';`,
      },
      {
        languageId: 51, // C++
        code:`#include <iostream>\n#include <vector>\n#include <stdexcept>\nusing namespace std;\nstatic void printVec(const vector<int>& v){cout<<"[";for(size_t i=0;i<v.size();++i){cout<<v[i];if(i+1<v.size())cout<<", ";}cout<<"]";}\nstatic bool matchEitherOrder(const vector<int>& r,int a,int b){return r.size()==2&&((r[0]==a&&r[1]==b)||(r[0]==b&&r[1]==a));}\nint main(){Solution sol;try{vector<int> v1{2,7,11,15};auto r1=sol.twoSum(v1,9);cout<<"Test 1: ";printVec(r1);cout<<"\\n";if(!matchEitherOrder(r1,0,1)){cout<<"FAIL: Test 1\\n";return 0;}vector<int> v2{3,2,4};auto r2=sol.twoSum(v2,6);cout<<"Test 2: ";printVec(r2);cout<<"\\n";if(!matchEitherOrder(r2,1,2)){cout<<"FAIL: Test 2\\n";return 0;}vector<int> v3{3,3};auto r3=sol.twoSum(v3,6);cout<<"Test 3: ";printVec(r3);cout<<"\\n";if(!matchEitherOrder(r3,0,1)){cout<<"FAIL: Test 3\\n";return 0;}cout<<"HASHHERE\\n";}catch(const exception& e){cout<<"ERROR: "<<e.what()<<"\\n";}catch(...){cout<<"ERROR: unknown exception\\n";}return 0;}`,
      },
    ],
  },
];

export function getRandomProblem(): Problem {
  return problems[Math.floor(Math.random() * problems.length)];
}
