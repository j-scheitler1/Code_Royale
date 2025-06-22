import React from 'react';
import Workspace from '../workspace/Workspace';
import ProblemHeader from '../components/problem_header_layout';

const WorkSpacePage: React.FC = () => {
  return (

    <div className='bg-brand'><ProblemHeader /><Workspace /></div>
  );
}

export default WorkSpacePage;