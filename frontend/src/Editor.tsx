import React, { useState } from 'react';
import MonacoEditor from './components/editor/MonacoEditor';
import EditorSidebar from './components/editor/EditorSidebar';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const EditorPage: React.FC = () => {
  // WILL SET THE STARTER CODE HERE WITH THE INTENDED PROBLEM
  const [code, setCode] = useState<string>('// Start coding...');
  const [sidebarWidth, setSidebarWidth] = useState<number>(300);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
  };

  return (
    <div className="flex h-screen bg-brandtext-white">
      <ResizableBox
        className="relative box bg-neutral-800 p-4 resizable-box"
        width={sidebarWidth}
        height={window.innerHeight}  // fixed height allows resizing to work properly
        axis="x"
        resizeHandles={['e']}
        minConstraints={[200, 0]}
        maxConstraints={[600, 0]}
        onResize={(e, data) => setSidebarWidth(data.size.width)}
      >
        <EditorSidebar />
      </ResizableBox>

      <div className="flex-1">
        <MonacoEditor
          code={code}
          language="javascript"
          theme="vs-dark"
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );
};

export default EditorPage;
