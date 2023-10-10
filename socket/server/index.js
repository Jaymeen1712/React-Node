const express = require("express");
const app = express();

const http = require("http");
const { Server } = require("socket.io");
const Cors = require("cors");

app.use(Cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  // console.log("user", socket.id);
  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", ({ room, text }) => {
    socket.to(room).emit("receive_message", text);
  });
});

server.listen(4001, () => {
  console.log("Server listening on port", 4001);
});
