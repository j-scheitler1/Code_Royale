/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';
import Split from 'react-split';
import ProblemDescription from './problemDescription/ProblemDescription';
import Playground from './Editor/Playground';
import type { Problem } from "../../../backend/src/types/problem";


type WorkspaceProps = {
  problem: Problem;
};

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
  return (
    <div className="h-screen">
      <Split className="split h-full" minSize={0}>
        <ProblemDescription 
          title={problem.title}
          problemStatement={problem.problemStatement}
          examples={problem.examples}
          constraints={problem.constraints}
        />
        <Playground 
          starterCode={problem.starterCode}
          testCases={problem.testCases}
          judge0TestCase={problem.judge0TestCase.code}
        />
      </Split>
    </div>
  );
};

export default Workspace;