import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/firebase';
import {
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [isWaiting, setIsWaiting] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, 'games'),
      where('player1', '==', user.uid)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const gameId = change.doc.id;
          navigate(`/game/${gameId}`);
        }
      });
    });

    return () => unsub();
  }, [user, navigate]);

  const findMatch = async () => {
    if (!user) {
      alert('You must be logged in');
      return;
    }

    const waitingRef = doc(db, 'waitingRoom', 'slot');
    const gamesRef = collection(db, 'games');
    const waitingDoc = await getDoc(waitingRef);

    if (!waitingDoc.exists()) {
      await setDoc(waitingRef, { uid: user.uid });
      setIsWaiting(true);
      console.log('Waiting for opponent...');
      return;
    }

    const opponentUid = waitingDoc.data().uid;

    const gameDoc = await addDoc(gamesRef, {
      player1: opponentUid,
      player2: user.uid,
      problemId: 'two-sum',
      startedAt: serverTimestamp(),
      winner: null,
    });

    await deleteDoc(waitingRef);
    navigate(`/game/${gameDoc.id}`);
  };

  return (
    <>
      <h1 className="text-brand-header">Jump Into a Game</h1>
      <div>
        {!isWaiting ? (
          <button onClick={findMatch} className="text-brand-header">
            Find Match
          </button>
        ) : (
          <div className="text-brand-header animate-pulse">Waiting for opponent...</div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
