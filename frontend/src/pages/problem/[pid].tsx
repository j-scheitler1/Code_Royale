// Update the import path if Workspace is located elsewhere, for example:
import Workspace from '../WorkSpacePage';
import { problems } from "@/utils/problems";
import type { Problem } from "@problemTypes/problem";
import React from 'react';

type ProblemPageProps = {
  problems: Problem;
};

const ProblemPage: React.FC<ProblemPageProps> = () => {
  return (
    <div className="h-full flex flex-col bg-brand">
      {/* TAB LIKE LEETCODE */}
      <div className="flex h-11 w-full items-center pt-2 bg-brand">
        <div className="flex items-center ml-2 bg-brand-secondary rounded-lg px-4">
          <span className="text-white text-lg text-brand">Problem Description</span>
        </div>
      </div>

      {/* Workspace for problem solving */}
      {/* <Workspace problems={Problems} /> */}
    </div>
  );
};
export default ProblemPage;
export async function getStaticPaths() {
  const paths = Object.keys(problems).map((key) => ({
    params: { pid: key }
  }));

  return {
    paths,
    fallback: false,
  };
}

