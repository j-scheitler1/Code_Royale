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
        <div className='w-full overflow-auto'>
          <CodeMirror 
            value={initialContent}
            extensions={[javascript()]}
            className='h-full w-full'
            theme = {oneDark}
          />
        </div>
        <div className="w-full h-full bg-brand-secondary text-white p-4">Test Cases is Gonna Be Here</div>
      </Split>
    </div>
  )
}

export default Playground;