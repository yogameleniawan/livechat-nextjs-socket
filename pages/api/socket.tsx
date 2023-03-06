import { Server } from "socket.io";
import messageHandler from "./messageHandler";

export default function SocketHandler(req, res) {
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  const onConnection = (socket) => {
    messageHandler(io, socket);

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  };

  io.on("connection", onConnection);

  console.log("Setting up socket");
  res.end();
}