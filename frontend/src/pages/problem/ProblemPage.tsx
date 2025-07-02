// Update the import path if Workspace is located elsewhere, for example:
import Workspace from '../../workspace/Workspace';
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

  return (
    <>
      <Workspace
        problem={problem}
      />
    </>
  );
}

export default ProblemPage;

