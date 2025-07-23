import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import ProblemPage from "./problem/ProblemPage";
import Workspace from '../workspace/Workspace';
import type { Problem } from "../../../backend/src/types/problem";
import { socket } from "@/utils/socket";

interface MatchState {
  matchId: string;
  problem: Problem;
  players: string[];
  timer: number;
}

const Game: React.FC = () => {
const location = useLocation();
const state = location.state as MatchState;
const navigate = useNavigate();

const initialTimer = state.timer;
const [timer, setTimer] = useState<number>(initialTimer);
const [matchEnded, setmatchEnded] = useState(false);

useEffect(() => {
  if (!state) return;
  const { matchId } = state;
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

}, [state, navigate]);

useEffect(() => {
  if (matchEnded) {
    socket.emit("player_won", state.matchId);
  }
}, [matchEnded, state.matchId]);

if (!state) {
  return <div>Error: Match state not found.</div>;
}
const { problem } = state;
// const { matchId, problem, players } = state;

return (
  <div>
    <Workspace problem={problem} timer={timer} setMatchEnded={setmatchEnded} />
  </div>
);
};

export default Game;
