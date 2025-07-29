import React, { useEffect } from 'react';
import Split from 'react-split'
import PreferenceNav from './preferenceNav/PreferenceNav';
import CodeMirror from "@uiw/react-codemirror"
import { useState } from 'react';
import { oneDark } from '@codemirror/theme-one-dark';
import type { StarterCode } from '../../../../backend/src/types/problem';
import type { TestCase } from '@/utils/problems/types/problem';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';
import { submitCode } from '../../pages/problem/submitCode';
// import { Extension } from '@codemirror/state';

/* 

FIGURE OUT THE MAPPING FOR THE LANGUAGE TO THE
ACTUAL STARTER CODE THAT GETS DISPLAYED ON THE SCREEN

UNCOMMENT THE IMPORTS AND ADD THE OTHER LANGUAGE SUPPORTS

*/

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
  judge0TestCase: string;
  setMatchEnded: (ended: boolean) => void;
  setSubmittedCorrectly: (submitted: boolean) => void;
  timer: number;
};

const Playground: React.FC<PlaygroundProps> = ({ starterCode, testCases, judge0TestCase, timer, setMatchEnded, setSubmittedCorrectly }) => {
  const [activeTestCaseIndex, setActiveTestCaseIndex] = useState(0); 
  const activeTestCase = testCases?.[activeTestCaseIndex];
  
  const [languageId, setLanguageId] = useState<number>(71);
  const [languageExtension, setLanguageExtension] = useState(Python);
  
  const [startingCode, setStartingCode] = useState(starterCode?.[0].starterCode);

  const [submitSelect, setSubmitSelect] = useState(false);
  const [submissionCode, setSubmissionCode] = useState(starterCode?.[0].starterCode);

  // Change Language
  useEffect(() => {
    if (languageId == PythonNumber) {
      setLanguageExtension(Python);
      setStartingCode(starterCode?.[0].starterCode)
    }
    else if (languageId == JavaNumber) {
      setLanguageExtension(Java);
      setStartingCode(starterCode?.[1].starterCode)
    }
    else if (languageId == JavaScriptNumber) {
      setLanguageExtension(JavaScript);
      setStartingCode(starterCode?.[2].starterCode)
    }
    else if (languageId == CPlusPlusNumber) {
      setLanguageExtension(CPlusPlus);
      setStartingCode(starterCode?.[3].starterCode)
    }
  }, [languageId]);

  const handleSubmitCode = async (code: string) => {
    const result = await submitCode({
      source_code: code ?? "",
      language_id: languageId,
    });
    if (result.stdout.includes('ALL TESTS PASSED')) {
      console.log('SETTING CORRECTLY SUBMITTED');
      setSubmittedCorrectly(true);
      setMatchEnded(true);
    }
  }

  // BUG - FIRST TIME SUBMITTING CODE THE TEST CASES DO NOT GET ADDED TO SUBMISSION CODE
  useEffect(() => {
    if (!submitSelect) return;

    let tempSubmissionCode = 'from typing import List\n';
    tempSubmissionCode += submissionCode;
    tempSubmissionCode += judge0TestCase;
    setSubmissionCode(tempSubmissionCode);

    
    console.log('Submission Code: \n' + tempSubmissionCode);
    
    handleSubmitCode(tempSubmissionCode);
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