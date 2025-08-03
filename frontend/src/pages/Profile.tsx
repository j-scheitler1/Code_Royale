import React, { useState } from 'react';
import { signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import type { UserMatchStats } from '../utils/types';
import { getWinsAndLosses } from '../firebase/matchDataService'

// TODO
// 1. Import the firebase functions and check for user
// 2. Call the Matches in Firebase and Get Wins and Losses
// 3. Display the Wins and Losses
// 4. Show the Total Matches Played (Wins + Losses)
// 5. Display the Win Rate (Wins / Total Matches)
// 6. Add a ramdom quote or message to encourage users

const Profile:React.FC = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [matchData, setMatchData] = useState<UserMatchStats | null>(null);
  const totalMatches = matchData ? (matchData.wins + matchData.losses + matchData.ties) : 0;
  const winPercentage = matchData ? ((matchData.wins / totalMatches) * 100) : 0.00;

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };
  
  React.useEffect(() => {
    if (user?.uid) {
      getWinsAndLosses(user.uid).then(setMatchData).catch(console.error);
    }
  }, [user]);

  return (
    <div className="relative bg-brand min-h-screen">
      <div className="flex items-center">
        <Link to="/" className="text-brand px-4 py-4">
          {'{ Home }'}
        </Link>
        <Link to="/" onClick={handleLogout} className="text-brand py-4">
          {`{ Logout }`}
        </Link>
      </div>
      <div className="flex flex-col">
        {matchData && (
          <div className="flex flex-col text-brand px-8 py-4">
            <div className="text-brand-header">Your Stats</div>
            <div className="px-2">Total Matches: {totalMatches}</div>
            <div className="px-2">Wins: {matchData.wins}</div>
            <div className="px-2">Losses: {matchData.losses}</div>
            <div className="px-2">Win Percentage: {winPercentage} %</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;