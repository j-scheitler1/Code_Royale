// Update the import path if Workspace is located elsewhere, for example:
// import Workspace from '../WorkSpacePage';
import { problems } from "@/utils/problems";
import type { Problem } from "@/utils/problems/types/problem";
import { useParams } from 'react-router-dom';
import React from 'react';


const ProblemPage: React.FC = () => {
  const { pid } = useParams<{ pid: string }>();
  
  if (!pid || !problems[pid]) {
    return <div>Problem not found</div>;
  }

  const problem: Problem = problems[pid];

  // PASS THIS INTO THE WORKSPACE PAGE
  return (
    <div className="h-screen">
      {problem.title}
      {problem.starterCode}
      <div>
        {problem.examples.map((example, idx) => (
          <div key={idx} className="mb-4 p-2 border rounded">
            <div><strong>Input:</strong> <pre>{example.inputText}</pre></div>
            <div><strong>Output:</strong> <pre>{example.outputText}</pre></div>
            {example.explanation && (
              <div><strong>Explanation:</strong> {example.explanation}</div>
            )}
          </div>
        ))}
      </div>
      {problem.constraints}
    </div>
  );
}

export default ProblemPage;

