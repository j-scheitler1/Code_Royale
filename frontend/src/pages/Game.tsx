import React, { useEffect, useState, useRef } from "react";
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
  const navigate = useNavigate();
  const state = location.state as MatchState;
  const initialTimer = state.timer;
  const [timer, setTimer] = useState<number>(initialTimer);
  const [matchEnded, setmatchEnded] = useState(false);
  const submittedCorrectlyRef = useRef(false);

  const setSubmittedCorrectly = (value: boolean) => {
    submittedCorrectlyRef.current = value;
  };

  useEffect(() => {
    if (!state) return;
    const { matchId } = state;
    const handleTimer = (newTime: number) => setTimer(newTime);
    const handleEnded = ({ result }: { result: string }) => {
      const submittedCorrectly = submittedCorrectlyRef.current;
      if (result === "win") navigate('/outcome', { state: { submittedCorrectly: submittedCorrectly, isWinner: true } });
      else if (result === "tie") navigate('/outcome', { state: { submittedCorrectly: submittedCorrectly, isWinner: false } });
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
  
  return (
    <div>
      <Workspace problem={problem} timer={timer} setMatchEnded={setmatchEnded} setSubmittedCorrectly={setSubmittedCorrectly} />
    </div>
  );
};

export default Game;
