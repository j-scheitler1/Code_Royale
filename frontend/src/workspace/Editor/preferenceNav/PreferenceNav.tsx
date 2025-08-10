import { languageOptions } from '@/utils/languages';
import { useState } from 'react';

type PreferenceNavProps = {
  languageId: number;
  setOutcome: (outcome: string) => void;
  setLanguageId: (id: number) => void;
  setSubmitSelect: (id: boolean) => void;
  timer: number;
}

const PreferenceNav: React.FC<PreferenceNavProps> = ({ languageId, setOutcome, setLanguageId, setSubmitSelect, timer }) => {
  const [leaveModal, setLeaveModal] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageId(Number(e.target.value));
  };

  const handleSubmit = () => {
    setSubmitSelect(true);
  }

  const handleEnded = (outcome: string) => {
    setOutcome(outcome);
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
        <span className="ml-4 mr-2">Time Remaining</span>
        {formatTime(timer)}
      </div>

      <div className="flex flex-1 justify-end items-center bg-brand p-1 pr-4">
        <button
          className="hover:font-bold text-brand transition-colors"
          onClick={handleSubmit}
        >
          {`{ Submit }`}
        </button>
        {!leaveModal && (
          <button
            className="hover:font-bold text-brand px-4 transition-colors"
            onClick={() => setLeaveModal(true)}
          >
            {`{ Leave Game }`}
          </button>
        )}
        {leaveModal && (
          <>
            <button
              className="hover:font-bold text-brand px-4 transition-colors"
              onClick={() => {handleEnded('loss')}}
            >
              {`{ Exit Game }`}
            </button>
            <button
              className="hover:font-bold text-brand transition-colors"
              onClick={() => setLeaveModal(false)}
            >
              {`{ Cancel }`}
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default PreferenceNav;
