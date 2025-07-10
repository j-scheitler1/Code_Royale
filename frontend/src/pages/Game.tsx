import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase"; // adjust if needed
import ProblemPage from "./problem/ProblemPage";

interface GameData {
  problemId: string;
  player1: string;
  player2: string;
  startedAt?: { toDate: () => Date };
}

function useGame(gameId: string | undefined) {
  const [game, setGame] = useState<GameData | null>(null);

  useEffect(() => {
    if (!gameId) return;

    const unsub = onSnapshot(doc(db, "games", gameId), (docSnap) => {
      if (docSnap.exists()) {
        setGame(docSnap.data() as GameData);
      }
    });

    return () => unsub();
  }, [gameId]);

  return game;
}

const Game: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const game = useGame(gameId);

  if (!game) {
    return <div>Loading game...</div>;
  }

  return (
      <ProblemPage pid={game.problemId}/>    
  );
};

export default Game;
