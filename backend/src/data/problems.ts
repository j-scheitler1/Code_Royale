import { Problem } from '@coderoyale/shared-types/src';

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
        explanation: 'nums[0] + nums[1] = 9',
      },
      {
        id: 1,
        inputText: '[3, 2, 4], 6',
        outputText: '[1, 2] or [2, 1]',
        explanation: 'nums[1] + nums[2] = 6',
      },
    ],
    testCases: [
      {
        input: '[2, 7, 11, 15], 9',
        output: '[0,1] or [0, 1]',
      },
      {
        input: '[3, 2, 4], 6',
        output: '[1, 2] or [2, 1]',
      },
      {
        input: '[3, 3], 6',
        output: '[0, 1], [1, 0]',
      },
    ],
    constraints: 'Each input has exactly one solution.',
    starterCode: [
      {
        languageId: 71, // Python
        starterCode: `class Solution:
  def twoSum(self, nums: List[int], target: int) -> List[int]:`
      },
      {
        languageId: 62, // Java
        starterCode: `class Solution {  
  public int[] twoSum(int[] nums, int target) { 
            
  }
}`
      },
      {
        languageId: 63, // JavaScript
        starterCode: `class Solution {
  /**  
  * @param {number[]} nums 
  * @param {number} target
  * @return {number[]}
  */  
  twoSum(nums, target) {
          
  }
}`
      },
      {
        languageId: 51, // C++
        starterCode: `class Solution {
public: 
  vector<int> twoSum(vector<int>& nums, int target) { 
            
  }
};`
      },
    ],
    judge0TestCase: [
      {
        languageId: 71, // Python
        code: `def run_tests():
            sol = Solution()
            try:
                result1 = sol.twoSum([2, 7, 11, 15], 9)
                if result1 not in ([0, 1], [1, 0]):
                    print("Wrong answer with the following input: [2, 7, 11, 15], 9\nExpected [0, 1] or [1, 0] but received:", result1)
                    return

                result2 = sol.twoSum([3, 2, 4], 6)
                if result2 not in ([1, 2], [2, 1]):
                    print("Wrong answer with the following input: [3, 2, 4], 6\nExpected [1, 2] or [2, 1] but received:", result2)
                    return

                result3 = sol.twoSum([3, 3], 6)
                if result3 not in ([0, 1], [1, 0]):
                    print("Wrong answer with the following input: [3, 3], 6\nExpected [0, 1] or [1, 0] but received:", result3)
                    return

                print("HASHHERE")
            except Exception as e:
                print("ERROR:", e)


        if __name__ == "__main__":
            run_tests()`,
      },
      {
        languageId: 62, // Java
        code: `class Main{
          static boolean matchEitherOrder(int[] r,int a,int b){
            return r!=null&&r.length==2&&((r[0]==a&&r[1]==b)||(r[0]==b&&r[1]==a));
          }
          static String arrStr(int[] a){
            if(a==null)return "null";
            StringBuilder sb=new StringBuilder("[");
            for(int i=0;i<a.length;i++){sb.append(a[i]);if(i+1<a.length)sb.append(", "); }
            sb.append("]");return sb.toString();
          }
          public static void main(String[] args){
            try{
              Solution sol=new Solution();

              int[] r1=sol.twoSum(new int[]{2,7,11,15},9);
              if(!matchEitherOrder(r1,0,1)){
                System.out.println("Wrong answer with the following input: [2, 7, 11, 15], 9\\nExpected [0, 1] or [1, 0] but received: "+arrStr(r1));
                return;
              }

              int[] r2=sol.twoSum(new int[]{3,2,4},6);
              if(!matchEitherOrder(r2,1,2)){
                System.out.println("Wrong answer with the following input: [3, 2, 4], 6\\nExpected [1, 2] or [2, 1] but received: "+arrStr(r2));
                return;
              }

              int[] r3=sol.twoSum(new int[]{3,3},6);
              if(!matchEitherOrder(r3,0,1)){
                System.out.println("Wrong answer with the following input: [3, 3], 6\\nExpected [0, 1] or [1, 0] but received: "+arrStr(r3));
                return;
              }

              System.out.println("HASHHERE");
            }catch(Throwable t){
              System.out.println("ERROR: "+t);
            }
          }
        }`,
      },
      {
        languageId: 63, // JavaScript
        code: `function matchEitherOrder(r,a,b){
          return Array.isArray(r) && r.length===2 && ((r[0]===a && r[1]===b) || (r[0]===b && r[1]===a));
        }
        function runTests(){
          const sol=new Solution();
          try{
            const r1=sol.twoSum([2,7,11,15],9);
            if(!matchEitherOrder(r1,0,1)){
              console.log("Wrong answer with the following input: [2, 7, 11, 15], 9\\nExpected [0, 1] or [1, 0] but received:", r1);
              return;
            }

            const r2=sol.twoSum([3,2,4],6);
            if(!matchEitherOrder(r2,1,2)){
              console.log("Wrong answer with the following input: [3, 2, 4], 6\\nExpected [1, 2] or [2, 1] but received:", r2);
              return;
            }

            const r3=sol.twoSum([3,3],6);
            if(!matchEitherOrder(r3,0,1)){
              console.log("Wrong answer with the following input: [3, 3], 6\\nExpected [0, 1] or [1, 0] but received:", r3);
              return;
            }

            console.log("HASHHERE");
          }catch(e){
            console.log("ERROR:", e);
          }
        }
        runTests();`,
      },
      {
        languageId: 51, // C++
        code: `#include <iostream>
        #include <vector>
        using namespace std;

        static void printVec(const vector<int>& v){
          cout << "[";
          for(size_t i=0;i<v.size();++i){ cout << v[i]; if(i+1<v.size()) cout << ", "; }
          cout << "]";
        }
        static bool matchEitherOrder(const vector<int>& r,int a,int b){
          return r.size()==2 && ((r[0]==a && r[1]==b) || (r[0]==b && r[1]==a));
        }

        int main(){
          Solution sol;
          try{
            vector<int> v1{2,7,11,15};
            auto r1=sol.twoSum(v1,9);
            if(!matchEitherOrder(r1,0,1)){
              cout << "Wrong answer with the following input: [2, 7, 11, 15], 9\\nExpected [0, 1] or [1, 0] but received: ";
              printVec(r1); cout << "\\n";
              return 0;
            }

            vector<int> v2{3,2,4};
            auto r2=sol.twoSum(v2,6);
            if(!matchEitherOrder(r2,1,2)){
              cout << "Wrong answer with the following input: [3, 2, 4], 6\\nExpected [1, 2] or [2, 1] but received: ";
              printVec(r2); cout << "\\n";
              return 0;
            }

            vector<int> v3{3,3};
            auto r3=sol.twoSum(v3,6);
            if(!matchEitherOrder(r3,0,1)){
              cout << "Wrong answer with the following input: [3, 3], 6\\nExpected [0, 1] or [1, 0] but received: ";
              printVec(r3); cout << "\\n";
              return 0;
            }

            cout << "HASHHERE\\n";
          }catch(const exception& e){
            cout << "ERROR: " << e.what() << "\\n";
          }catch(...){
            cout << "ERROR: unknown exception\\n";
          }
          return 0;
        }`,
      },
    ],
  },
];

export function getRandomProblem(): Problem {
  return problems[Math.floor(Math.random() * problems.length)];
}
