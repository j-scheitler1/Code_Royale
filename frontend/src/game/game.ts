import { doc, getDoc, setDoc, deleteDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase/firebase"; // your paths may differ

async function findMatch() {
  const user = auth.currentUser;
  if (!user) return;

  const waitingRef = doc(db, "waitingRoom", "slot");
  const gamesRef = collection(db, "games");

  const waitingDoc = await getDoc(waitingRef);

  if (!waitingDoc.exists()) {
    await setDoc(waitingRef, { uid: user.uid });
    console.log("Waiting for opponent...");
    return;
  }

  const opponentUid = waitingDoc.data().uid;

  const gameDoc = await addDoc(gamesRef, {
    player1: opponentUid,
    player2: user.uid,
    problemId: "two-sum",
    startedAt: serverTimestamp(),
    winner: null
  });

  await deleteDoc(waitingRef);

  console.log("Game started!", gameDoc.id);

  window.location.href = `/game/${gameDoc.id}`;
}
