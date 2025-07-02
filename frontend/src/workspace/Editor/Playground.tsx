/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';
import Split from 'react-split'
import PreferenceNav from './preferenceNav/PreferenceNav';
import CodeMirror from "@uiw/react-codemirror"
import { useState } from 'react';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

type PlaygroundProps = {
  starterCode?: string;
  testCases?: {
    input: string;
    output: string;
  }[];
};

const Playground: React.FC<PlaygroundProps> = ({ starterCode, testCases }) => {
  const [activeTestCaseIndex, setActiveTestCaseIndex] = useState(0); // ✅ Track selected case

  const activeTestCase = testCases?.[activeTestCaseIndex];

  return (
    <div className="flex flex-col bg-brand">
      <PreferenceNav />
      <Split className='h-[calc(100vh-94px)]' direction="vertical" sizes={[60, 40]} minSize={60}>
        <div className='w-full overflow-auto bg-brand-editor'>
          <CodeMirror 
            value={starterCode}
            extensions={[javascript()]}
            className='h-full w-full'
            theme={oneDark}
          />
        </div>

        <div className="w-full h-full bg-brand-secondary text-white p-4 overflow-auto">
          <h2 className="text-brand mb-2">Test Cases</h2>

          {/* Test Case Buttons */}
          <div className='flex flex-row gap-4 overflow-x-auto'>
            {testCases?.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestCaseIndex(index)}
                className={`font-medium items-center transition-all focus:outline-none inline-flex 
                  ${activeTestCaseIndex === index ? 'bg-brand-secondary' : 'bg-brand'} 
                  hover:bg-brand-secondary relative rounded-lg px-4 py-1 
                  cursor-pointer whitespace-nowrap border border-white`}
              >
                case {index + 1}
              </button>
            ))}
          </div>

          {/* Selected Test Case Display */}
          {activeTestCase && (
            <div className='font-semibold'>
              <p className='text-sm font-medium mt-4 text-brand-secondary'>Input:</p>
              <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-brand border-transparent text-white mt-2'>
                {activeTestCase.input}
              </div>
              <p className='text-sm font-medium mt-4 text-brand-secondary'>Output:</p>
              <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-brand border-transparent text-white mt-2'>
                {activeTestCase.output}
              </div>
            </div>
          )}
        </div>
      </Split>
    </div>
  );
}

export default Playground;