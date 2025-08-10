import type { Problem } from '@coderoyale/shared-types/src';

export interface Player {
  uid: string;
  username: string
}

export interface MatchState {
  matchId: string;
  player1: string;
  player2: string;
  problem: Problem;
  timer: number;
}

export interface MatchResult {
  matchId: string;
  playerId: string;
  opponentId: string;
  result: string; // "win", "lose", or "tie"
  timestamp: number;
}

export type UserMatchStats = {
  wins: number,
  losses: number,
  ties: number,
}