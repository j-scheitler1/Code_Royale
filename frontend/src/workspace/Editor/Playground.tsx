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
const CPlusPlusNumber = 54;

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

  const [showTestCases, setShowTestCases] = useState(true);

  const [output, setOutput] = useState<string>("");

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
    } else {
      setOutput(result.stdout);
      setShowTestCases(false);
    }
    // IF NOT WINNER SWITCH TEST CASES DIV TO OUTPUT DIV AND DISPLAY THE ERROR
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

        <div className="w-full h-full bg-brand-secondary text-white p-4">
          {showTestCases ? (
            <div className="h-full flex flex-col overflow-hidden">
              <div className="flex text-brand mb-4">
                <button className="font-bold" onClick={() => setShowTestCases(true)}>{`{ Test Cases }`}</button>
                <button className="px-4" onClick={() => setShowTestCases(false)}>{`{ Output }`}</button>
              </div>

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

              {activeTestCase && (
                <div className='flex-1 overflow-y-auto mt-4 font-semibold'>
                  <p className='text-sm font-medium text-brand-secondary'>Input:</p>
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
          ) : (
            <div className="h-full flex flex-col overflow-hidden">
              <div className="flex text-brand mb-4">
                <button onClick={() => setShowTestCases(true)}>{`{ Test Cases }`}</button>
                <button className="font-bold px-4" onClick={() => setShowTestCases(false)}>{`{ Output }`}</button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <div className="bg-brand px-2">
                  <p className='text-brand px-2'>
                    { output }
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Split>
    </div>
  );
}

export default Playground;