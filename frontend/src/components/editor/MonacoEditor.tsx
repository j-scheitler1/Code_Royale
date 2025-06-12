import React from 'react';
import Editor from '@monaco-editor/react';

interface MonacoEditorProps {
  code: string;
  language: string;
  theme: string;
  onChange: (value: string | undefined) => void;
}

const MonacoEditor: React.FC<MonacoEditorProps> = ({ code, language, theme, onChange }) => {
  return (
    <Editor
      height="100%"
      language={language}
      value={code}
      theme={theme}
      onChange={onChange}
      options={{
        fontSize: 14,
        minimap: { enabled: true },
        automaticLayout: true,
        scrollBeyondLastLine: false,
      }}
    />
  );
};

export default MonacoEditor;
