import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { registerSocketHandlers } from "./matchmaking/socketHandler";
import problemRouter from "./routes/problemRoutes";

const app = express();
app.use(express.json());

const defaultOrigins = [
  "http://localhost:5173",
  "https://code-royale-958e5.web.app",
];
const allowedOrigins =
  (process.env.ALLOWED_ORIGINS?.split(",").map(s => s.trim()).filter(Boolean)) ||
  defaultOrigins;

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "OPTIONS"],
  })
);

app.get("/api/health", (_req, res) => res.status(200).send("ok"));
app.use("/api/problems", problemRouter);

const server = http.createServer(app);
const io = new Server(server, {
  path: "/socket.io",
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  registerSocketHandlers(io, socket);
});

const PORT = Number(process.env.PORT) || 3000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend server listening on ${PORT}`);
  console.log(`Allowed origins: ${allowedOrigins.join(", ")}`);
});
