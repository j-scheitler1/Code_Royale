import React from 'react';
import { languageOptions } from './languages';
// import { submitCode } from '../../../pages/problem/submitCode';

type PreferenceNavProps = {
  languageId: number;
  setLanguageId: (id: number) => void;
  setSubmitSelect: (id: boolean) => void;
  timer: number;
}

const PreferenceNav: React.FC<PreferenceNavProps> = ({ languageId, setLanguageId, setSubmitSelect, timer }) => {
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageId(Number(e.target.value));
  };

  const handleSubmit = () => {
    setSubmitSelect(true);
  }

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (

    // Language Selector
    <div className="relative h-11 flex items-center bg-brand text-brand">
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

      <div className="absolute left-1/2 -translate-x-1/2 flex items-center text-brand">
        <span className="mr-2">Time Remaining</span>
        {formatTime(timer)}
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
