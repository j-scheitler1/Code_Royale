import React from 'react';
import { languageOptions } from './languages';
// import { submitCode } from '../../../pages/problem/submitCode';

type PreferenceNavProps = {
  languageId: number;
  setLanguageId: (id: number) => void;
  // submitCode: boolean;
  setSubmitSelect: (id: boolean) => void;
}

const PreferenceNav: React.FC<PreferenceNavProps> = ({ languageId, setLanguageId, setSubmitSelect }) => {
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageId(Number(e.target.value));
  };

  const handleSubmit = () => {
    setSubmitSelect(true);
  }

  // TEMPORARY SUBMISSION - FOR TESTING
  // const handleSubmit = async () => {
  //   alert(languageId);
  //   const result = await submitCode({
  //     source_code: 'print("Hello, Judge0!")',
  //     language_id: languageId,
  //   });

  //   console.log('Judge0 Result:', result);
  //   alert(result.stdout || result.stderr || 'No output');
  // };

  return (
    <div className="h-11 flex bg-brand text-white">
      <div className="flex mx-8 p-1">
        <select
          className="text-brand py-1 bg-brand-secondary"
          value={languageId}
          onChange={handleLanguageChange}
        >
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-1 justify-end items-center bg-brand p-1 pr-8">
        <button
          className="hover:text-green-500 text-brand transition-colors"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default PreferenceNav;
