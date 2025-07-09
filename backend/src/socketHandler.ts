import { Server, Socket } from "socket.io";
import { addToQueue, removeFromQueue } from "./queue";
import { createMatchIfPossible } from "./matchManager";
import { UserData } from "./types/problem";

export function registerSocketHandlers(io: Server, socket: Socket) {
  socket.on("join_queue", (userData: UserData) => {
    console.log(`${userData.username} joined the queue`);
    addToQueue({ socket, userData });
    createMatchIfPossible(io);
  });

  socket.on("disconnect", () => {
    console.log(`Socket ${socket.id} disconnected`);
    removeFromQueue(socket.id);
  });
}
