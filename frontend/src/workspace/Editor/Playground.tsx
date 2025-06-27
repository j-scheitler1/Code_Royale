/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';
import Split from 'react-split'
import PreferenceNav from './preferenceNav/PreferenceNav';
import CodeMirror from "@uiw/react-codemirror"
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

type PlaygroundProps = {};

const initialContent = `// Start coding below\n` + "\n".repeat(48);

const Playground:React.FC<PlaygroundProps> = () => {
  
  return (
  <div className="flex flex-col bg-brand">
      <PreferenceNav />
      <Split className='h-[calc(100vh-94px)]' direction="vertical" sizes={[60, 40]} minSize={60}>
        <div className='w-full overflow-auto bg-brand-editor'>
          <CodeMirror 
            value={initialContent}
            extensions={[javascript()]}
            className='h-full w-full'
            theme = {oneDark}
          />
        </div>
        <div className="w-full h-full bg-brand-secondary text-white p-4 overflow-auto">
          { /* Test Case Title */}
          <h2 className="text-brand mb-2">Test Cases</h2>
          
          <div className='flex flex-row gap-4 overflow-x-auto'>
            { /* Test Case List */ }
            <div className='mr-2 items-start mt-2 text-white'>
              <div className='flex flex-wrap items-center gap-y-4'>
              <div className="font-medium items-center transition-all focus:outline-none inline-flex 
              bg-brand hover:bg-brand-secondary relative rounded-lg px-4 py-1 
              cursor-pointer whitespace-nowrap border border-gray-600">
                    case 1
                </div>
              </div>
            </div>

            <div className='mr-2 items-start mt-2 text-white'>
              <div className='flex flex-wrap items-center gap-y-4'>
              <div className="font-medium items-center transition-all focus:outline-none inline-flex 
              bg-brand hover:bg-brand-secondary relative rounded-lg px-4 py-1 
              cursor-pointer whitespace-nowrap border border-gray-600">
                    case 2
                </div>
              </div>
            </div>

            <div className='mr-2 items-start mt-2 text-white'>
              <div className='flex flex-wrap items-center gap-y-4'>
              <div className="font-medium items-center transition-all focus:outline-none inline-flex 
              bg-brand hover:bg-brand-secondary relative rounded-lg px-4 py-1 
              cursor-pointer whitespace-nowrap border border-gray-600">
                    case 3
                </div>
              </div>
            </div>

          </div>

            <div className='font-semibold'>
              <p className='text-sm font-medium mt-4 text-brand-secondary'>Input:</p>
              <div className='w-full cursor-text rouded-lg border px-3 py-[10px] bg-brand border-transparent text-white mt-2'>
                nums: [2, 7,, 11, 15] target: 9
              </div>
              <p className='text-sm font-medium mt-4 text-brand-secondary'>Output:</p>
              <div className='w-full cursor-text rouded-lg border px-3 py-[10px] bg-brand border-transparent text-white mt-2'>
                [0, 1]
              </div>
            </div>


        </div>
      </Split>
    </div>
  )
}

export default Playground;