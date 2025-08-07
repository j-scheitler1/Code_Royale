import React, { useEffect, useRef } from 'react';
import Split from 'react-split'
import PreferenceNav from './preferenceNav/PreferenceNav';
import CodeMirror from "@uiw/react-codemirror"
import { useState } from 'react';
import { oneDark } from '@codemirror/theme-one-dark';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';
import { submitCode } from '../../pages/problem/submitCode';
import { buildSubmissionCode, getHash } from '../../pages/problem/submissionCodeBuilder';

import type { StarterCode } from '../../../../backend/src/types/types';
import type { TestCase } from '@/utils/problems/types/problem';
import type { Judge0TestCase } from '../../../../backend/src/types/types';

const JavaScript = [javascript()];
const Python = [python()];
const Java = [java()];
const CPlusPlus = [cpp()];

const JavaScriptNumber = 63;
const PythonNumber = 71;
const JavaNumber = 62;
const CPlusPlusNumber = 51;

type PlaygroundProps = {
  starterCode: StarterCode[];
  testCases: TestCase[];
  judge0TestCase: Judge0TestCase[];
  setIsWinner: (isWinner: boolean) => void;
  timer: number;
};

// REFACTOR TO USE THE TEST CASES ARRAY AND FIND THE CORRESPONDING ONE

const Playground: React.FC<PlaygroundProps> = ({ starterCode, testCases, judge0TestCase, timer, setIsWinner }) => {
  const [activeTestCaseIndex, setActiveTestCaseIndex] = useState(0); 
  const activeTestCase = testCases?.[activeTestCaseIndex];
  
  const [languageId, setLanguageId] = useState<number>(71);
  const [languageExtension, setLanguageExtension] = useState(Python);
  
  const [startingCode, setStartingCode] = useState(starterCode?.[0].starterCode);
  const [testCode, setTestCode] = useState(judge0TestCase?.[0].code);

  const [submitSelect, setSubmitSelect] = useState(false);
  const [submissionCode, setSubmissionCode] = useState(starterCode?.[0].starterCode);

  const hash = useRef<string | null>(null);

  // Change Language
  useEffect(() => {
    if (languageId == PythonNumber) {
      setLanguageExtension(Python);
      setStartingCode(starterCode?.[0].starterCode);
      setTestCode(judge0TestCase?.[0].code);
    }
    else if (languageId == JavaNumber) {
      setLanguageExtension(Java);
      setStartingCode(starterCode?.[1].starterCode);
      setTestCode(judge0TestCase?.[1].code);
    }
    else if (languageId == JavaScriptNumber) {
      setLanguageExtension(JavaScript);
      setStartingCode(starterCode?.[2].starterCode);
      setTestCode(judge0TestCase?.[2].code);
    }
    else if (languageId == CPlusPlusNumber) {
      setLanguageExtension(CPlusPlus);
      setStartingCode(starterCode?.[3].starterCode);
      setTestCode(judge0TestCase?.[3].code);
    }
  }, [languageId]);

  const handleSubmitCode = async (code: string | undefined) => {
    const result = await submitCode({
      source_code: code ?? "",
      language_id: languageId,
    });
    if (result.stdout.includes(hash.current)) {
      setIsWinner(true);
    }
  }

  // BUG - FIRST TIME SUBMITTING CODE THE TEST CASES DO NOT GET ADDED TO SUBMISSION CODE
  // REFACTOR TO BUILD TEMPORARY SUBMISSION EVERY TIME AND NOT RE-ADD TESTS

  // Send Code with Test Cases to the submissionCode Builder -> Get Payload and Call handleSubmitCode
  useEffect(() => {
    if (!submitSelect) return;
    hash.current = getHash();
    const finalSubmission = buildSubmissionCode(submissionCode, testCode, languageId, hash.current);
    console.log(finalSubmission);
    handleSubmitCode(finalSubmission);
    setSubmitSelect(false);
  }, [submitSelect])

  return (
    <div className="flex flex-col bg-brand">
      <PreferenceNav languageId={languageId} setLanguageId={setLanguageId} setSubmitSelect={setSubmitSelect} timer={timer}/>
      <Split className='h-[calc(100vh-94px)]' direction="vertical" sizes={[60, 40]} minSize={60}>
        <div className='w-full overflow-auto bg-brand-editor'>
          <CodeMirror 
            value={startingCode}
            onChange={(value) => setSubmissionCode(value)}
            extensions={languageExtension}
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