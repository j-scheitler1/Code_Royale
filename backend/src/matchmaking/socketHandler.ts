import { Server, Socket } from "socket.io";
import { addToQueue, removeFromQueue } from "./queue";
import { createMatchIfPossible, deleteMatch } from "./matchManager";
import { UserData } from "../types/problem";

export function registerSocketHandlers(io: Server, socket: Socket) {
  socket.on("join_queue", (userData: UserData) => {
    console.log(`${userData.email} joined the queue`);
    addToQueue({ socket, userData });
    createMatchIfPossible(io);
  });

  socket.on("player_won", (matchId: string) => {
    console.log(`Player won in match ${matchId}`);
    const match = io.sockets.adapter.rooms.get(matchId);
    if (match) {
      io.to(matchId).emit("match_ended");
      match.forEach((socketId) => {
        console.log(`Notifying socket ${socketId} of match end`);
        io.sockets.sockets.get(socketId)?.leave(matchId);
      });
      io.sockets.adapter.rooms.delete(matchId);
    }
  });

  socket.on("delete_match", (matchId: string) => {
    deleteMatch(matchId);
  });

  socket.on("disconnect", () => {
    console.log(`Socket ${socket.id} disconnected`);
    removeFromQueue(socket.id);
  });
}
