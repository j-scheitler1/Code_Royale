import { auth, db } from './firebase';
import { collection, query, where, getCountFromServer, or, and } from 'firebase/firestore';
import type { UserMatchStats } from '../utils/types';

export async function getWinsAndLosses(userId: string): Promise<UserMatchStats> {
  const uid = userId ?? auth.currentUser?.uid;
  if (!uid) throw new Error("No User Signed In.");

  const matches = collection(db, 'matches');

  const winsQ = query(matches, 
    where('result', '==', 'win'),
    where('playerId', '==', uid)
  );
  const lossesQ = query(matches, 
    where('result', '==', 'loss'),
    where('opponentId', '==', uid)
  );
  const tiesQ = query(matches,
    and(
      where('result', '==', 'tie'),
      or(
        where('playerId', '==', uid), 
        where('opponentId', '==', uid)
      )
    )
  );

  const [winsSnap, lossesSnap, tiesSnap] = await Promise.all([
    getCountFromServer(winsQ),
    getCountFromServer(lossesQ),
    getCountFromServer(tiesQ),
  ]);

  return {
    wins: winsSnap.data().count,
    losses: lossesSnap.data().count,
    ties: tiesSnap.data().count,
  };
}