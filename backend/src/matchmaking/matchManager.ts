import { v4 as uuidv4 } from "uuid";
import { getQueue } from "./queue";
import { getRandomProblem } from "../data/problems";
import { Match, UserData } from "../types/types";
import { Server } from "socket.io";

const matches = new Map<string, Match>();

export function createMatchIfPossible(io: Server) {
  const queue = getQueue();
  if (queue.length < 2) return;

  const player1 = queue.shift()!;
  const player2 = queue.shift()!;
  const problem = getRandomProblem();
  const matchId = uuidv4();
  
  console.log(`Creating match ${matchId} between ${player1.userData.email} and ${player2.userData.email}`);

  const match: Match = {
    players: [player1.userData, player2.userData],
    sockets: [player1.socket, player2.socket],
    problem: problem,
    timer: 50000000, // 30 minutes in seconds
  };

  matches.set(matchId, match);
  
  console.log(`Match ${matchId} created with problem: ${problem.title}`);
  console.log("Backend Player 1", player1.userData.uid);
  console.log("Backend Player 2", player2.userData.uid);

  [player1.socket, player2.socket].forEach((socket, i) => {
    socket.join(matchId);
    socket.emit("match_found", {
      matchId,
      player1: player1.userData.uid, 
      player2: player2.userData.uid,
      problem,
      timer: match.timer,
    });
  });

  startCountdown(io, matchId);
}

function startCountdown(io: Server, matchId: string) {
  const match = matches.get(matchId);
  if (!match) return;

  const interval = setInterval(() => {
    const current = matches.get(matchId);
    if (!current) {
      clearInterval(interval);
      return;
    }

    current.timer--;
    console.log(`Match ${matchId} timer: ${current.timer}s remaining`);
    io.to(matchId).emit("timer_update", current.timer);

    if (current.timer <= 0) {
      io.to(matchId).emit("match_ended");
      matches.delete(matchId);
      clearInterval(interval);
    }
  }, 1000);
}

export function deleteMatch(matchId: string) {
  if (matches.has(matchId)) {
    matches.delete(matchId);
    console.log(`Match ${matchId} deleted`);
  }
}
