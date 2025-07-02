/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';

type ProblemDescriptionProps = {
  title?: string;
  problemStatement?: string;
  examples?: {
    id: number;
    inputText: string;
    outputText: string;
    explanation?: string;
    img?: string;
  }[];
  constraints?: string;
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ title, problemStatement, examples }) => {
  return (
    <div className="h-full flex flex-col bg-brand">
      {/* TAB LIKE LEETCODE */}
      <div className="flex h-11 w-full items-center pt-2 bg-brand">
        <div className="flex items-center ml-2 bg-brand-secondary rounded-lg px-4">
          <span className="text-white text-lg text-brand">Problem Description</span>
        </div>
      </div>

      {/* Switch to vertical stacking */}
      <div className="flex flex-col px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto bg-brand-secondary">
        {/* PROBLEM TITLE */}
        <div className="w-full px-4">
          <h1 className="text-brand-secondary-header">{title}</h1>
        </div>

        {/* PROBLEM DESCRIPTION */}
        <div className="w-full px-4 mt-2">
          <div className="text-brand-secondary" dangerouslySetInnerHTML={{ __html: problemStatement || "" }} />
        </div>

        {examples?.map((example, index) => (
          <div key={example.id} className='w-full flex justify-left px-4 mt-4'>
            <div className='w-full bg-brand rounded-lg p-4 shadow'>
              <h2 className="text-brand-secondary-header">Example {index + 1}:</h2>
              <p className="text-brand-secondary mt-2">
                <code className="bg-brand text-brand-secondary block">Input: {example.inputText}</code>
                <code className="bg-brand text-brand-secondary block">Output: {example.outputText}</code>
                {example.explanation && (
                  <code className="bg-brand text-brand-secondary block">Explanation: {example.explanation}</code>
                )}
                {example.img && (
                  <img src={example.img} alt={`Example ${index + 1}`} className="mt-2 rounded-md border border-brand-secondary" />
                )}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProblemDescription;
