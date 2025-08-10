import { db } from './firebase';
import type { MatchResult } from '../utils/types';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

export async function submitMatchResult(result: MatchResult): Promise<void> {
  try {
    const matchRef = doc(db, 'matches', result.matchId);
    await setDoc(matchRef, {
      playerId: result.playerId,
      opponentId: result.opponentId,
      result: result.result,
      timestamp: serverTimestamp(),
    }, { merge: true });
  } catch (error) {
    console.log('Failed to Submit Match' + error);
    throw error;
  }
} 