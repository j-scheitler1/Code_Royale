import React from 'react';
import { Link, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import type { MatchResult } from '../utils/types';

// TODO: Add a link to the dashboard here

const Outcome:React.FC = () => {
  const location = useLocation();
  const state = location.state as MatchResult;
  // const navigate = useNavigate();

  if (!state) {
    return <div>Error: Outcome state not found.</div>;
  }

  

  return (
    <div className="text-brand bg-brand h-screen flex flex-col items-center justify-center">
      {!state && <div>Error: Outcome state not found.</div>}

      {state.result === "tie" && (
        <div>
          <h1>This match was a tie!</h1>
          <Link to="/dashboard" >{'{Back to the Dashboard}'}</Link>
        </div>
      )}

      {state.result === "win" && (
        <div>
          <h1>You won this match!</h1>
        </div>
      )}

      {state.result === "loss" && (
        <div>
          <h1>You lost this match! Nice try!</h1>
        </div>
      )}
    </div>
  );
}

export default Outcome;