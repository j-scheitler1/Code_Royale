/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';
import Split from 'react-split';
import ProblemDescription from './problemDescription/ProblemDescription';
import Playground from './Editor/Playground';

type WorkspaceProps = {};

const Workspace: React.FC<WorkspaceProps> = () => {
  return (
    <div className="h-screen">
      <Split className="split h-full" minSize={0}>
        <ProblemDescription />
        <Playground />
      </Split>
    </div>
  );
};

export default Workspace;