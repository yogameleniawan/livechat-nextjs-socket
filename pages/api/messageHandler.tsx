/* eslint-disable import/no-anonymous-default-export */
export default (io, socket) => {
  const createdMessage = (msg) => {
    console.log(`Author: ${msg.author} Message: ${msg.message}`)
    socket.broadcast.emit("newIncomingMessage", msg);
  };

  const writeMessage = (data) => {
    socket.broadcast.emit("writeMessageCallback", data);
  }

  const openMessage = (data) => {
    socket.broadcast.emit("openMessageCallback", data);
  }

  socket.on("createdMessage", createdMessage);

  socket.on("writeMessage", writeMessage);
};