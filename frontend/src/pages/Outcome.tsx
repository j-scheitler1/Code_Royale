import React from 'react';
import { useLocation } from "react-router-dom";

interface OutcomeProps {
  submittedCorrectly: boolean;
  isWinner: boolean;
}

// Receive the outcome of the game from the Game.tsx component -> Return JSX based on winner and loser

const Outcome:React.FC = () => {
  const location = useLocation();
  const state = location.state as OutcomeProps;
  const { submittedCorrectly, isWinner } = state;

  if (!state) {
    return <div>Error: Outcome state not found.</div>;
  }

  return (
    <div className="text-brand bg-brand h-screen flex flex-col items-center justify-center">
      {!isWinner &&
        <div>
          <h1>This match was a tie!</h1>
          {/* ADD LINK TO DASHBOARD HERE */}
        </div>
      }
      {isWinner && submittedCorrectly && 
        <div>
          <h1>You won this match!</h1>
        </div>
      }
      {isWinner && !submittedCorrectly && 
        <div>
          <h1>You lost this match! Nice Try!</h1>
        </div>
      }
    </div>
  )
}

export default Outcome;