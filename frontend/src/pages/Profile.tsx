import React, { useState } from 'react';
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

// export type UserMatchStats = {
//   wins: number,
//   losses: number,
//   ties: number,
// }

const Profile:React.FC = () => {
  const user = auth.currentUser;
  const [matchData, setMatchData] = useState<UserMatchStats | null>(null);
  // ADD ERROR HANDLING

  // If a User is logged in then send to helper -> and set match data
  React.useEffect(() => {
    if (user?.uid) {
      getWinsAndLosses(user.uid).then(setMatchData).catch(console.error);
    }
  }, [user]);

  return (
    <div>Have a good coding
      {matchData && (
        <div>
          <div>{matchData.wins}</div>
          <div>{matchData.losses}</div>
        </div>
      )}
    </div>
  );
}

export default Profile;