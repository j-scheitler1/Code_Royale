import express from "express";
import http from "http";
import { Server } from "socket.io";
import { registerSocketHandlers } from "./socketHandler";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  registerSocketHandlers(io, socket);
});

server.listen(3000, () => {
  console.log("Backend server listening on port 3000");
});
