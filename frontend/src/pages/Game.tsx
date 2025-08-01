import React, { useEffect, useRef, useState } from "react";
import Workspace from '../workspace/Workspace';
import { submitMatchResult } from '../firebase/matchService'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase/firebase';
import { socket } from "@/utils/socket";
import type { MatchState, MatchResult } from '../utils/types';

      // players: [player1.userData.uid, player2.userData.uid],

const Game: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as MatchState;
  const initialTimer = state.timer;
  const matchId = state.matchId;
  const currentPlayerId = auth.currentUser?.uid;
  const [timer, setTimer] = useState<number>(initialTimer);
  const [isWinner, setIsWinner] = useState<boolean>(false);

  const [matchResult, setMatchResult] = useState<MatchResult>({
    matchId: state.matchId,
    playerId: state.player1 === currentPlayerId ? state.player1 : state.player2,
    opponentId: state.player1 === currentPlayerId ? state.player2 : state.player1,
    result: "loss",
    timestamp: Date.now(),
  });
  const matchResultRef = useRef<MatchResult>(matchResult);

  const passMatchToFireBaseHandler = async (result: MatchResult) => {
    submitMatchResult(result);
  };
  
  // Set up socket listeners for match events
  useEffect(() => {
    if (!state) return;
    const { matchId } = state;
    const handleTimer = (newTime: number) => setTimer(newTime);
    const handleEnded = () => {
      const currentResult = matchResultRef.current;
      if (currentResult.result === "win") {
        passMatchToFireBaseHandler(currentResult);
      }
      navigate('/outcome', { state: currentResult });
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
    if (isWinner) {
      const updatedResult = {
        ...matchResultRef.current,
        result: "win",
        timestamp: Date.now(),
      };

      setMatchResult(updatedResult);
      matchResultRef.current = updatedResult;
      socket.emit("player_won", matchId);
    }
  }, [isWinner]);

  useEffect(() => {
    matchResultRef.current = matchResult;
  }, [matchResult]);

  if (!state) {
    return <div>Error: Match state not found.</div>;
  }
  const { problem } = state;
  
  return (
    <div>
      <Workspace problem={problem} timer={timer} setIsWinner={setIsWinner} />
    </div>
  );
};

export default Game;
