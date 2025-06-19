/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';

type ProblemDescriptionProps = {};

const ProblemDescription: React.FC<ProblemDescriptionProps> = () => {
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
          <h1 className="text-brand-secondary-header">1. Two Sum</h1>
        </div>

        {/* PROBLEM DESCRIPTION */}
        <div className="w-full px-4 mt-2">
          <p className="text-brand-secondary">
            Given an array of integers <code className="bg-brand text-brand-secondary">nums</code> and an integer <code className="bg-brand text-brand-secondary">target</code>, return indices of the two numbers such that they add up to <code className="bg-brand-secondary text-brand-secondary">target</code>.
            You may assume that each input would have exactly one solution, and you may not use the same element twice.
            You can return the answer in any order.
          </p>
        </div>

        {/* EXAMPLE */}
        <div className='w-full flex justify-center mt-4'>
          <div className='max-w-xl w-full bg-brand rounded-lg p-4 shadow'>
            <h2 className="text-brand-secondary-header">Example 1:</h2>
            <p className="text-brand-secondary mt-2">
              <code className="bg-brand text-brand-secondary block">Input: nums = [2,7,11,15], target = 9</code>
              <code className="bg-brand text-brand-secondary block">Output: [0,1]</code>
              <code className="bg-brand text-brand-secondary block">Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</code>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProblemDescription;
