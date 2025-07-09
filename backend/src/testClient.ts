import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Connected to backend");

  socket.emit("join_queue", {
    uid: "user123",
    username: "Player1",
  });
});

socket.on("match_found", (data) => {
  console.log("✅ Match Found!");
  console.log(data);
});

socket.on("timer_update", (time) => {
  console.log(`⏱️ Time left: ${time}s`);
});

socket.on("match_ended", (result) => {
  console.log("🏁 Match ended:", result);
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});
