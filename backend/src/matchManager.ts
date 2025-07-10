import { v4 as uuidv4 } from "uuid";
import { getQueue } from "./queue";
import { getRandomProblem } from "./data/problems";
import { Match, UserData } from "./types/problem";
import { Server } from "socket.io";

const matches = new Map<string, Match>();

export function createMatchIfPossible(io: Server) {
  const queue = getQueue();
  if (queue.length < 2) return;

  const player1 = queue.shift()!;
  const player2 = queue.shift()!;
  const problem = getRandomProblem();
  const matchId = uuidv4();

  const match: Match = {
    players: [player1.userData, player2.userData],
    sockets: [player1.socket, player2.socket],
    problem,
    timer: 1800,
  };

  matches.set(matchId, match);

  [player1.socket, player2.socket].forEach((socket, i) => {
    socket.join(matchId);
    socket.emit("match_found", {
      matchId,
      opponent: i === 0 ? player2.userData : player1.userData,
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
    io.to(matchId).emit("timer_update", current.timer);

    if (current.timer <= 0) {
      io.to(matchId).emit("match_ended", { result: "timeout" });
      matches.delete(matchId);
      clearInterval(interval);
    }
  }, 1000);
}
