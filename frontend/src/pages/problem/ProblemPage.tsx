// Update the import path if Workspace is located elsewhere, for example:
import Workspace from '../../workspace/Workspace';
import { problems } from "@/utils/problems";
import type { Problem } from "@/utils/problems/types/problem";
import { useParams } from 'react-router-dom';
import React from 'react';

type ProblemPageProps = {
  pid?: string;
};

const ProblemPage: React.FC<ProblemPageProps> = ({ pid }) => {
  const params = useParams<{ pid: string }>();
  const problemId = pid ?? params.pid;

  if (!problemId || !problems[problemId]) {
    return <div>Problem not found</div>;
  }

  const problem: Problem = problems[problemId];

  return (
    <>
      <Workspace problem={problem} />
    </>
  );
};


export default ProblemPage;

