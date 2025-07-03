import express from 'express';
import http from 'http';
import { WebSocketServer } from 'ws';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('New player connected');

  ws.on('message', (message) => {
    const data = JSON.parse(message.toString());
    console.log("Received:", data);
  });

  ws.send(JSON.stringify({ type: 'welcome', message: 'Connected to server' }));
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
