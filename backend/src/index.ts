import express from "express";
import http from "http";
import { Server } from "socket.io";
import { registerSocketHandlers } from "./matchmaking/socketHandler";
import problemRouter from './routes/problemRoutes';

const app = express();
app.use(express.json());
app.use('/api/problems', problemRouter);

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
