import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProblemPage from "./problem/ProblemPage";
import type { Problem } from "../../../backend/src/types/problem";
import { socket } from "@/utils/socket";

interface MatchState {
  matchId: string;
  problem: Problem;
  players: string[];
  timer: number; // GET TIMER FROM MATCH PAYLOAD
}

// Format time in MM:SS
const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
};

const Game: React.FC = () => {
  const location = useLocation();
  const state = location.state as MatchState | null;
  const navigate = useNavigate();

  if (!state) {
    return <div>Error: Match state not found.</div>;
  }
  const { matchId, problem, players, timer: initialTimer } = state;
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [timer, setTimer] = useState<number>(initialTimer);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleTimer = (newTime: number) => setTimer(newTime);
    const handleEnded = ({ result }: { result: string }) => {
      console.log("Match ended with:", result);
      navigate('/dashboard')
    };
    socket.emit("join", matchId);
    socket.on("timer_update", handleTimer);
    socket.on("match_ended", handleEnded);

    return () => {
      socket.off("timer_update", handleTimer);
      socket.off("match_ended", handleEnded);
    };

  }, [matchId]);

  return (
    <div>
      <div>
        <h2>Match ID: {matchId}</h2>
        <h3>Players: {players.join(" vs ")}</h3>
        {problem.title && <h4>Problem: {problem.title}</h4>}
        <h1 style={{ fontFamily: "monospace" }}>
          {formatTime(timer)}
        </h1>
      </div>
      <ProblemPage problem={problem} />
    </div>
  );
};

export default Game;
