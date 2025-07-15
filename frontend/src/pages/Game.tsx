import React from "react";
import { useLocation } from "react-router-dom";
import ProblemPage from "./problem/ProblemPage";
import type { Problem } from "@/utils/problems/types/problem";

interface MatchState {
  matchId: string;
  problem: Problem;
  players: string[];
}

const Game: React.FC = () => {
  const location = useLocation();
  const state = location.state as MatchState | null;

  if (!state) {
    return <div>Error: Match state not found.</div>;
  }

  const { matchId, problem, players } = state;

  return (
    <div>
      <div>
        <h2>Match ID: {matchId}</h2>
        <h3>Players: {players.join(" vs ")}</h3>
        {problem.title && <h4>Problem: {problem.title}</h4>}
      </div>
      <ProblemPage problem={problem} />
    </div>
  );
};

export default Game;
