import { useState, useEffect } from 'react';
import { auth } from "@/firebase/firebase";
import type { UserMatchStats } from '@/utils/types';
import { getWinsAndLosses } from '@/firebase/matchDataService'
import Header from '@/components/header_layout';

const Profile: React.FC = () => {
  const user = auth.currentUser;
  const [matchData, setMatchData] = useState<UserMatchStats | null>(null);
  const totalMatches = matchData ? (matchData.wins + matchData.losses + matchData.ties) : 0;
  const winPercentage = matchData ? ((matchData.wins / totalMatches) * 100) : 0.00;
  
  useEffect(() => {
    if (user?.uid) {
      getWinsAndLosses(user.uid).then(setMatchData).catch(console.error);
    }
  }, [user]);

  return (
    <div className="relative bg-brand min-h-screen">
    <header className="flex items-center p-2">
      <div className="ml-2">
        <Header />
      </div>
    </header>
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